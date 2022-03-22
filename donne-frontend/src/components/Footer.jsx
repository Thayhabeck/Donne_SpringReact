import React from "react";
import imgFooter from '../assets/recodepro.png'

export default function Footer() {
    return (
        <footer className="footer fw-lighter fixed-bottom">
            <div >
                &copy; 2022 - Donne! - <a href="https://www.recodepro.org.br/" target="_blank" rel="noreferrer"><img className="img-recode" src={imgFooter} alt="Recode pro" /></a>
            </div>
        </footer>
    )
}
