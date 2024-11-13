import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <span className="name">Madhumita</span>

        <div className="navbar-links">
            <a href="/" className="n-link">Home</a>
            <a href="/about" className="n-link">About</a>
            <a href="/contact" className="n-link">Contact</a>
        </div>
    </div>
  )
}

export default Navbar