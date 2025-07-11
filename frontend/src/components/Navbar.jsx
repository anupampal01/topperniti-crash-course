import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>TopperNiti</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/crash-course">Crash Course</Link></li>
      <li><Link to="/courses">Courses</Link></li> {/* ✅ Add this */}
      <li><Link to="/testimonials">Testimonials</Link></li>
    </ul>
  </nav>
);

export default Navbar; // ✅ Required for import default
