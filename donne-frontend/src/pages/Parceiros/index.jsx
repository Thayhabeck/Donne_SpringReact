import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";
import ParceiroService from "../../services/ParceiroService";

export default function Index() {
    const { authenticated } = useContext(AuthContext);
    const [parceiros, setParceiros] = useState([]);
    const getAllParceiros = () => {
        ParceiroService.getAllParceiros()
            .then((response) => {
                setParceiros(response.data);
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

    const permitedBtn = (parceiro) => {
        if (!authenticated) {
            return;
        } else {
            return (
                <div className="d-flex justify-content-center align-content-center">
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
                </div>
            )
        }
    }

    return (
        <div className="p-0 m-0 w-100 ">
            <Header title="Nossos Parceiros!" />
            <hr className="hr m-0 p-0" />
            <div className="container-flex py-0 m-3 mx-5">
                <Link className="btn btn-dark" style={{ marginBottom: '10px' }} to="/ParceiroCreate">
                    Cadastrar Novo Parceiro
                </Link>

                <div className="mt-4 justify-content-around">
                    <div className="row ">
                        {parceiros.map((parceiro) => (
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={parceiro.idParceiro}>
                                <div className="card" >
                                    <div className="card-header bg-dark text-light">
                                        Parceiro nº. {parceiro.idParceiro}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{parceiro.nome}</h5>
                                        <p className="card-text">CNPJ: {parceiro.cnpj}<br />
                                            Área de Atuação: {parceiro.area_atuacao.nomeArea} <br />
                                            Contato: {parceiro.email} </p>
                                        <>{permitedBtn(parceiro)}</>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}