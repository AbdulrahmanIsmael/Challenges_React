import '../styles/navbar.scss';
// import logo from './images/logo.png';

function Navbar() {
  return (
    <nav className='navbar'>
      <img src='./images/logo.png' alt='city tours logo' />
      <ul className='nav-links'>
        <li>
          <a href='/' className='nav-link'>
            Home
          </a>
        </li>
        <li>
          <a href='/' className='nav-link'>
            About
          </a>
        </li>
        <li>
          <a href='/' className='nav-link active'>
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
