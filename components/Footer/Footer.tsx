import styles from './Footer.module.css';

const METTA_LINKS = [
  'About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs',
];
const QUICK_LINKS = [
  'Orders & Shipping', 'Join/Login as a Seller', 'Payment & Pricing',
  'Return & Refunds', 'FAQs', 'Privacy Policy', 'Terms & Conditions',
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">

      {/* ── Top section: Newsletter + Contact ── */}
      <div className={styles.topSection}>
        <div className={styles.topInner}>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h2 className={styles.sectionHeading}>BE THE FIRST TO KNOW</h2>
            <p className={styles.newsletterSub}>Sign up for updates from mettā muse.</p>
            <div className={styles.newsletterForm}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.emailInput}
                autoComplete="email"
                aria-label="Email address for newsletter"
              />
              <button type="button" className={styles.subscribeBtn}>SUBSCRIBE</button>
            </div>
          </div>

          <div className={styles.topDivider} aria-hidden="true" />

          {/* Contact + Currency */}
          <div className={styles.contactBlock}>
            <h2 className={styles.sectionHeading}>CONTACT US</h2>
            <a href="tel:+442113356360" className={styles.contactLink}>+44 221 133 5360</a>
            <a href="mailto:customercare@mettamuse.com" className={styles.contactLink}>
              customercare@mettamuse.com
            </a>

            <h2 className={styles.sectionHeading} style={{ marginTop: '24px' }}>CURRENCY</h2>
            <div className={styles.currencyRow}>
              <span className={styles.currencyFlag} aria-hidden="true">🇺🇸</span>
              <span className={styles.currencyLabel}>• USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className={styles.mainDivider} aria-hidden="true" />

      {/* ── Bottom section: Brand + Links + Follow + Accepts ── */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomInner}>

          {/* Brand */}
          <nav className={styles.navCol} aria-label="mettā muse pages">
            <a href="/" className={styles.brandName} aria-label="mettā muse home">
              mettā muse
            </a>
            <ul className={styles.linkList}>
              {METTA_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.footerLink}>{link}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav className={styles.navCol} aria-label="Quick links">
            <h2 className={styles.colHeading}>QUICK LINKS</h2>
            <ul className={styles.linkList}>
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.footerLink}>{link}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Follow Us + Accepts */}
          <div className={styles.navCol}>
            <h2 className={styles.colHeading}>FOLLOW US</h2>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialBtn} aria-label="Follow us on Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className={styles.socialBtn} aria-label="Follow us on LinkedIn">
                <LinkedInIcon />
              </a>
            </div>

            <h2 className={styles.colHeading} style={{ marginTop: '28px' }}>
              mettā muse ACCEPTS
            </h2>
            <div className={styles.paymentRow} aria-label="Accepted payment methods">
              <PaymentIcon label="Google Pay"><GPayIcon /></PaymentIcon>
              <PaymentIcon label="Mastercard"><MastercardIcon /></PaymentIcon>
              <PaymentIcon label="PayPal"><PaypalIcon /></PaymentIcon>
              <PaymentIcon label="American Express"><AmexIcon /></PaymentIcon>
              <PaymentIcon label="Apple Pay"><ApplePayIcon /></PaymentIcon>
              <PaymentIcon label="OPay"><OpayIcon /></PaymentIcon>
            </div>
          </div>

        </div>
      </div>

      {/* ── Copyright ── */}
      <div className={styles.copyright}>
        <p>Copyright © 2023 mettāmuse. All rights reserved.</p>
      </div>

    </footer>
  );
}

/* ── Helper ── */
function PaymentIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <span className={styles.payIcon} aria-label={label} title={label}>
      {children}
    </span>
  );
}

/* ── Inline SVG Icons ── */
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function GPayIcon() {
  return <svg width="32" height="20" viewBox="0 0 48 24" aria-hidden="true"><text x="2" y="17" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">G Pay</text></svg>;
}
function MastercardIcon() {
  return (
    <svg width="32" height="20" viewBox="0 0 48 30" aria-hidden="true">
      <circle cx="18" cy="15" r="12" fill="#EB001B" opacity="0.9"/>
      <circle cx="30" cy="15" r="12" fill="#F79E1B" opacity="0.9"/>
      <path d="M24 6.27a12 12 0 0 1 0 17.46A12 12 0 0 1 24 6.27z" fill="#FF5F00"/>
    </svg>
  );
}
function PaypalIcon() {
  return <svg width="32" height="20" viewBox="0 0 48 24" aria-hidden="true"><text x="4" y="17" fontSize="11" fontWeight="700" fill="#009cde" fontFamily="sans-serif">PayPal</text></svg>;
}
function AmexIcon() {
  return <svg width="32" height="20" viewBox="0 0 48 24" aria-hidden="true"><rect width="48" height="24" rx="3" fill="#2E77BC"/><text x="5" y="17" fontSize="10" fontWeight="700" fill="#fff" fontFamily="sans-serif">AMEX</text></svg>;
}
function ApplePayIcon() {
  return <svg width="32" height="20" viewBox="0 0 48 24" aria-hidden="true"><text x="2" y="17" fontSize="10" fontWeight="700" fill="#fff" fontFamily="sans-serif"> Pay</text></svg>;
}
function OpayIcon() {
  return <svg width="32" height="20" viewBox="0 0 48 24" aria-hidden="true"><rect width="48" height="24" rx="3" fill="#1DB954"/><text x="8" y="17" fontSize="11" fontWeight="700" fill="#fff" fontFamily="sans-serif">OPay</text></svg>;
}
