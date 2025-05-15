import footerLinks from '../assets/links.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return <footer>
    <ul>
      {footerLinks.map(footerLink => (
        <li key={footerLink.id}><a href={footerLink.link}>{footerLink.label}</a></li>
      ))}
    </ul>
    <p>© {year} Atlas School</p>
  </footer>
}
