import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DonneService from "../../services/DonneService";

export default function Index() {
    const [donnes, setDonnes] = useState([]);
    const getAllDonnes = () => {
        DonneService.getAllDonnes()
            .then((response) => {
                setDonnes(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllDonnes();
    }, []);

    const deleteDonne = (donneId) => {
        if (window.confirm("Deseja realmente excluir este cadastro?")) {
            DonneService.deleteDonne(donneId)
                .then((response) => {
                    getAllDonnes();
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
            <Link className="btn btn-primary" style={{ marginBottom: '10px' }} to="/DonneCreate">
                Cadastrar Donne
            </Link>
            <table className="table table-responsive table-hover table-striped">
                <thead>
                    <tr className="bg-dark text-light">
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CPF</th>
                        <th>Função</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {donnes.map((donne) => (
                        <tr key={donne.idDonne}>
                            <td>{donne.nome}</td>
                            <td>{donne.email}</td>
                            <td>{donne.cpf}</td>
                            <td>{donne.funcao.nomeFuncao}</td>
                            <td>
                                <Link className="btn btn-warning" style={{ margin: '5px' }} to={`/DonneUpdate/${donne.idDonne}`}>
                                    <span className="material-icons">
                                        edit
                                    </span>
                                </Link>
                                <button className="btn btn-danger" onClick={() => deleteDonne(donne.idDonne)} style={{ margin: '5px' }}>
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