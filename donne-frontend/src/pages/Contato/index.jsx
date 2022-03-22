import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContatoService from "../../services/ContatoService";

export default function Index() {
    const [mensagens, setMensagens] = useState([]);
    const getAllContatos = () => {
        ContatoService.getAllContatos()
            .then((response) => {
                setMensagens(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllContatos();
    }, []);

    const deleteContato = (contatoId) => {
        if (window.confirm("Deseja realmente excluir esta mensagem?")) {
            ContatoService.deleteContato(contatoId)
                .then((response) => {
                    getAllContatos();
                }).catch((error) => {
                    console.log(error);
                    const { data } = error.response;
                    if (data.status === 500)
                        alert("Não é possível excluir!");
                });
        };
    };

    return (
        <div className="container py-4 mt-5">
            <Link className="btn btn-primary" style={{ marginBottom: '10px' }} to="/contato">
                Adicionar Mensagem
            </Link>
            <table className="table table-responsive table-hover table-striped">
                <thead>
                    <tr className="bg-dark text-light">
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Mensagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {mensagens.map((mensagem) => (
                        <tr key={mensagem.idContato}>
                            <td>{mensagem.nome}</td>
                            <td>{mensagem.email}</td>
                            <td>{mensagem.mensagem}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteContato(mensagem.idContato)} style={{ margin: '5px' }}>
                                    <span className="material-icons">
                                        delete
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}