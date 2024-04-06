import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
    return(
    <>
     <nav className="navbar navbar-expand-lg" style={{background:'#ff926a'}}>
  <div className="container-fluid d-flex" >
    <Link className="navbar-brand" style={{background:'#ff632b',color:'white'}} to="/">Résumé</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#about_me">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#scrollspy">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#scrollspyheading4">Contact</a>
        </li>
        </ul>
      <ul className="navbar-nav ms-auto">
        <li className='nav-item'>
        <a className="nav-link ms-auto" target="_blank" href=" https://wa.me/918851134420">Hire Me!</a> 
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>

)
}