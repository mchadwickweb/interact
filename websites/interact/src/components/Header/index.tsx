import Logo from "../Logo";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="navigation">
        <ul className="list-plain">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services/development">Services</a>
          </li>
          <li>
            <a href="/articles/">Writing</a>
          </li>
          <li>
            <a href="/contact/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
