import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContatoService from "../../services/ContatoService";
import contatoImg from "../../assets/contatoImg.svg";
import "./styles.css"
import Header from "../../components/Header";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();

    const createContato = (e) => {
        e.preventDefault();
        if (nome === "" || email === "" || mensagem === "" ){
            window.alert("Preencha todos os campos!")
        } else {
        const contato = { nome, email, mensagem };
        ContatoService.createContato(contato)
            .then((response) => {
                navigate("/");
            });
    }}

    return (
        <div className="p-0 m-0 w-100 align-content-center">
            <Header title="Fale Conosco!" />
            <hr className="hr m-0 p-0" />
            <div className="row m-0 p-0 justify-content-around">
                <form className="form col-md-5 py-2 mt-2">
                    <fieldset className="field">
                        <div className="mb-3">
                            <label htmlFor="Nome" className="form-label fw-bolder">Nome</label>
                            <input type="text" id="Nome" className="form-control" placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label fw-bolder">Email</label>
                            <input type="email" id="Email" className="form-control" placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Mensagem" className="form-label fw-bolder">Mensagem</label>
                            <textarea type="text" id="Mensagem" className="form-control" placeholder="Mensagem"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => createContato(e)}>Enviar</button>
                        <Link to="/" className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancelar</Link>
                    </fieldset>
                </form>
                <img src={contatoImg} alt="login" className="img-fluid col-md-4 " />
            </div>
        </div>
    );
}