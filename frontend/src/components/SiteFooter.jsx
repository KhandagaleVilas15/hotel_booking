const links = ['Support', 'Trips', 'List your property', 'Terms', 'Privacy'];

const SiteFooter = () => (
  <footer className="site-footer">
    <p>© {new Date().getFullYear()} TravelX Hotels Clone. Educational use only.</p>
    <nav>
      {links.map((link) => (
        <a href="#" key={link}>
          {link}
        </a>
      ))}
    </nav>
  </footer>
);

export default SiteFooter;

