import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import "./styles.css"
import Logo from '../assets/Logo_Donne.png';

export default function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const { logout, user, authenticated } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  }
  const authButton = () => {
    if (!authenticated) {
      return (
          <Link className="btn btn-sm btn-outline-dark" to="/login">Login</Link>
      )
    } else {
      return (
        <div className="d-inline-flex align-content-center">
          <p className="m-0 p-1 px-2 fs-6">Olá, {user.nome}</p>
          <button className="btn btn-sm btn-outline-dark" onClick={handleLogout}>Logout</button>
        </div>)
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom box-shadow fixed-top" >
      <div className="container-fluid">
        <div className="navbar-brand">
        <img src={Logo} className="logo" alt="Logo"/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse accordion-flush`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavCollapse}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={handleNavCollapse}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donnes" className="nav-link" onClick={handleNavCollapse}>
                Donnes!
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/DonneCreate" className="nav-link" onClick={handleNavCollapse}>
                Cadastro de Donnes!
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/parceiros" className="nav-link" onClick={handleNavCollapse}>
                Parceiros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ParceiroCreate" className="nav-link" onClick={handleNavCollapse}>
                Cadastro de Parceiro
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link" onClick={handleNavCollapse}>
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mensagens" className="nav-link" onClick={handleNavCollapse}>
                Mensagens
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="mx-3 ">
          {authButton()}
        </div>
      </div>
    </nav>
  );
}
