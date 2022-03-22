import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ParceiroService from "../../services/ParceiroService";

export default function Index() {
    const [donnes, setDonnes] = useState([]);
    const getAllParceiros = () => {
        ParceiroService.getAllParceiros()
            .then((response) => {
                setDonnes(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllParceiros();
    }, []);

    const deleteParceiro = (parceiroId) => {
        if (window.confirm("Deseja realmente excluir este cadastro?")) {
            ParceiroService.deleteParceiro(parceiroId)
                .then((response) => {
                    getAllParceiros();
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
            <Link className="btn btn-primary" style={{ marginBottom: '10px' }} to="/ParceiroCreate">
                Cadastrar Parceiro
            </Link>
            <table className="table table-responsive table-hover table-striped">
                <thead>
                    <tr className="bg-dark text-light">
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CNPJ</th>
                        <th>Area de Atuação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {donnes.map((parceiro) => (
                        <tr key={parceiro.idParceiro}>
                            <td>{parceiro.nome}</td>
                            <td>{parceiro.email}</td>
                            <td>{parceiro.cnpj}</td>
                            <td>{parceiro.area_atuacao.nomeArea}</td>
                            <td>
                                <Link className="btn btn-warning" style={{ margin: '5px' }} to={`/ParceiroUpdate/${parceiro.idParceiro}`}>
                                    <span className="material-icons">
                                        edit
                                    </span>
                                </Link>
                                <button className="btn btn-danger" onClick={() => deleteParceiro(parceiro.idParceiro)} style={{ margin: '5px' }}>
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