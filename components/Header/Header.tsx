'use client';

import { useState } from 'react';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Shop', href: '#' },
  { label: 'Skills', href: '#' },
  { label: 'Stories', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      {/* Top utility bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span className={styles.topBarText}>Lorem ipsum dolor</span>
          <div className={styles.topBarRight}>
            <button className={styles.langButton} aria-label="Select language">ENG ▾</button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={styles.navWrapper}>
        <div className={styles.navInner}>
          <button className={styles.hamburger} onClick={() => setMenuOpen((p) => !p)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-nav">
            <span className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barMidOpen : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barBotOpen : ''}`} />
          </button>

          <a href="/" className={styles.logo} aria-label="Appscrip Store - Home">LOGO</a>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}><a href={link.href} className={styles.navLink}>{link.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Search products"><SearchIcon /></button>
            <button className={styles.iconBtn} aria-label="View wishlist"><WishlistIcon /></button>
            <button className={styles.iconBtn} aria-label="View shopping cart">
              <CartIcon />
              <span className={styles.cartBadge} aria-label="0 items in cart">0</span>
            </button>
            <button className={styles.iconBtn} aria-label="User account"><UserIcon /></button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)} aria-hidden="true" />}
      <nav id="mobile-nav" className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        <ul className={styles.mobileNavList}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}><a href={link.href} className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>{link.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function SearchIcon()  { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>; }
function WishlistIcon(){ return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>; }
function CartIcon()    { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>; }
function UserIcon()    { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>; }
