import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Copy, CornerDownLeft, FolderGit2, Hash, Mail, Moon, Search, Sun } from 'lucide-react';
import { GithubMark, LinkedinMark } from './BrandIcons.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { OPEN_PALETTE, copyText, scrollToSection, showProject } from '../lib/events.js';
import { navLinks, profile, projects } from '../data/portfolio.js';

const openTab = (url) => window.open(url, '_blank', 'noopener,noreferrer');

/** A ⌘K / Ctrl K menu for jumping to sections and projects or running quick actions. */
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const returnFocus = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const commands = useMemo(
    () => [
      { group: 'Go to', label: 'Home', icon: Hash, run: () => scrollToSection('home') },
      ...navLinks.map((link) => ({ group: 'Go to', label: link.label, icon: Hash, run: () => scrollToSection(link.id) })),
      { group: 'Go to', label: 'Soft skills', icon: Hash, keywords: 'strengths people', run: () => scrollToSection('strengths') },
      ...projects.map((project) => ({
        group: 'Projects',
        label: project.title,
        hint: project.category,
        icon: FolderGit2,
        keywords: project.stack.join(' '),
        run: () => showProject(project.slug),
      })),
      { group: 'Actions', label: 'Copy email address', icon: Copy, keywords: 'contact', run: () => copyText(profile.email, 'Email address copied') },
      { group: 'Actions', label: 'Send an email', icon: Mail, keywords: 'contact', run: () => { window.location.href = `mailto:${profile.email}`; } },
      {
        group: 'Actions',
        label: theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme',
        icon: theme === 'light' ? Moon : Sun,
        keywords: 'theme mode colour color',
        run: toggleTheme,
      },
      { group: 'Links', label: 'Open GitHub', icon: GithubMark, run: () => openTab(profile.github) },
      { group: 'Links', label: 'Open LinkedIn', icon: LinkedinMark, run: () => openTab(profile.linkedin) },
    ],
    [theme, toggleTheme],
  );

  const results = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return commands;
    return commands.filter((command) => {
      const text = `${command.label} ${command.group} ${command.hint ?? ''} ${command.keywords ?? ''}`.toLowerCase();
      return words.every((word) => text.includes(word));
    });
  }, [commands, query]);

  const close = useCallback(() => setOpen(false), []);

  // Global shortcut and the open event from buttons elsewhere on the page.
  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener(OPEN_PALETTE, onOpen);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener(OPEN_PALETTE, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    returnFocus.current = document.activeElement;
    setQuery('');
    setActive(0);
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = '';
      returnFocus.current?.focus?.({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  if (!open) return null;

  const run = (command) => {
    close();
    // Let the menu close and focus return before scrolling or opening anything.
    setTimeout(command.run, 0);
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!results.length) return;
      const step = event.key === 'ArrowDown' ? 1 : -1;
      setActive((current) => (current + step + results.length) % results.length);
    } else if (event.key === 'Enter' && results[active]) {
      event.preventDefault();
      run(results[active]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      close();
    } else if (event.key === 'Tab') {
      // Keep focus inside the dialog; the search field drives everything.
      event.preventDefault();
    }
  };

  return (
    <div className="palette-overlay" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Command menu">
        <div className="palette-search">
          <Search size={20} aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-autocomplete="list"
            aria-activedescendant={results[active] ? `palette-option-${active}` : undefined}
            placeholder="Search sections, projects and actions…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
          <button type="button" className="palette-esc" onClick={close} aria-label="Close command menu">
            <kbd>Esc</kbd>
          </button>
        </div>

        <ul className="palette-list" id="palette-list" role="listbox" aria-label="Results" ref={listRef}>
          {results.map((command, index) => {
            const Icon = command.icon;
            const showGroup = index === 0 || results[index - 1].group !== command.group;
            return [
              showGroup && (
                <li className="palette-group" role="presentation" key={`group-${command.group}`}>
                  {command.group}
                </li>
              ),
              <li
                key={`${command.group}-${command.label}`}
                id={`palette-option-${index}`}
                role="option"
                aria-selected={index === active}
                className="palette-option"
                onMouseMove={() => setActive(index)}
                onClick={() => run(command)}
              >
                <span className="palette-icon" aria-hidden="true"><Icon size={17} /></span>
                <span className="palette-label">{command.label}</span>
                {command.hint && <span className="palette-hint">{command.hint}</span>}
                <CornerDownLeft className="palette-enter" size={15} aria-hidden="true" />
              </li>,
            ];
          })}
        </ul>

        {!results.length && <p className="palette-empty">No results for “{query}”.</p>}

        <div className="palette-footer" aria-hidden="true">
          <span><kbd>↑</kbd><kbd>↓</kbd> to move</span>
          <span><kbd>↵</kbd> to open</span>
          <span><kbd>Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
