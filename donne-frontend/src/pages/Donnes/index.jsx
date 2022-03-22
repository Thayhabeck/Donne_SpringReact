import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";
import DonneService from "../../services/DonneService";

export default function Index() {
    const { authenticated } = useContext(AuthContext);
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

    const permitedBtn = (donne) => {
        if (!authenticated) {
            return;
        } else {
            return (
                <div className="d-flex justify-content-center align-content-center">
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
                </div>
            )
        }
    }

    return (
        <div className="p-0 m-0 w-100 ">
            <Header title="Nossas Donnes!" />
            <hr className="hr m-0 p-0" />
            <div className="container-flex py-0 m-3 mx-5">
                <Link className="btn btn-dark" style={{ marginBottom: '10px' }} to="/DonneCreate">
                    Cadastrar Nova Donne
                </Link>
                <div className="mt-4 justify-content-around">
                    <div className="row ">
                        {donnes.map((donne) => (
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" key={donne.idDonne}>
                                <div className="card">
                                    <div className="card-header bg-dark text-light">
                                        Donne! nº. {donne.idDonne}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{donne.nome}</h5>
                                        <p className="card-text">
                                            Função: {donne.funcao.nomeFuncao} <br />
                                            Contato: {donne.email} </p>
                                        <>{permitedBtn(donne)}</>
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