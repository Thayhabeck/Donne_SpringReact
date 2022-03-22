import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContatoService from "../../services/ContatoService";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();

    const createContato = (e) => {
        e.preventDefault();
        const contato = { nome, email, mensagem };
        ContatoService.createContato(contato)
            .then((response) => {
                navigate("/");
            });
    }

      return (
        <div className="container py-4 mt-5">
            <form>
                <fieldset>
                    <legend className="bg-dark rounded-3 p-3 text-light">
                        <h2 className="text-center">
                            Enviar Mensagem
                        </h2>
                    </legend>
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
        </div>
    );
}