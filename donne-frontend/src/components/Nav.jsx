import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import "./styles.css"
import Logo from '../assets/Logo_Donne.png';

export default function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [navLogin, setNavLogin] = useState(true)
  const { logout, user, authenticated } = useContext(AuthContext);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleNavLogin = () => {
    !navLogin? setNavLogin(!navLogin) : setNavLogin(navLogin);
    handleNavCollapse();
  }
  const handleLogout = () => {
    logout();
  }
  const authButton = () => {
    if (!authenticated) {
      return (
        <Link className="btn btn-sm  btn-outline-dark" to="/login">Login</Link>
      )
    } else {
      return (
        <div className="d-inline-flex align-content-center">
          <p className="m-0 usuario">Olá, {user.nome}</p>
          <button className="btn btn-sm btn-outline-dark" onClick={handleLogout}>Logout</button>
        </div>)
    }
  }
  const privateLink = () => {
    if (!authenticated) {
      return ;
    } else {
      return (
        <li className="nav-item">
          <Link to="/mensagens" className="nav-link" onClick={handleNavCollapse}>
            Mensagens
          </Link>
        </li>)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom box-shadow fixed-top" >
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={Logo} className="logo" alt="Logo" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavLogin}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse accordion-flush`} id="navbarNav">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavCollapse}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/somos" className="nav-link" onClick={handleNavCollapse}>
                Sobre nós
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Donnes!
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/donnes" className="dropdown-item" onClick={handleNavCollapse} >Nossas Donnes!</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/DonneCreate" className="dropdown-item" onClick={handleNavCollapse}>Cadastro de Donne!</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Parceiros
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/parceiros" className="dropdown-item" onClick={handleNavCollapse} >Nossos Parceiros</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/ParceiroCreate" className="dropdown-item" onClick={handleNavCollapse}>Cadastro de Parceiro</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link" onClick={handleNavCollapse}>
                Contato
              </Link>
            </li>
            <>{privateLink()}</>
            {!navLogin ? <div className="mx-0 nav-btn">{authButton()}</div> : <></>}
          </ul>
        </div>
        {navLogin ? <div className="mx-0 nav-btn">{authButton()}</div> : <></>}
      </div>
    </nav>
  );
}
