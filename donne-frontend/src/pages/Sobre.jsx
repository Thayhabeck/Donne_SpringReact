import React from "react";
import Header from "../components/Header";
import Girl from '../assets/girl.svg';
import Business from '../assets/business.svg';
import Super from '../assets/super.svg';
import { Link } from "react-router-dom";

const SobrePage = () => {

    return (
        <>
            <Header title="Um pouco sobre a Donne!" />
            <hr className="hr m-0 p-0" />
            <div className="my-4 container">
                <div className="Container somos1 row justify-content-around align-items-center">
                    <img className="img-fluid col-md-3" src={Girl} alt="girl" />
                    <div className="col-md-5 p-3 div ">
                        <h2 className="m-0 p-0">
                            Nossa missão:
                        </h2>
                        <hr className="hrs my-2 p-0" />
                        <p>
                            Nossa missão é ajudar mulheres sobreviventes de violência doméstica a conquistarem independência financeira!
                        </p>
                        <Link to="/donnes" className="btn btn-dark text-decoration-none" >
                            Conheça nossas Donnes!
                        </Link>
                    </div>
                </div>
                <div className="Container somos2 row justify-content-around align-items-center">
                    <div className="col-md-5 p-3 div ">
                        <h2 className="m-0 p-0">
                            Nosso modelo de negócio:
                        </h2>
                        <hr className="hrs my-2 p-0" />
                        <p>
                            Somos uma central de relacionamento com o cliente 100% remota formada apenas por mulheres sobreviventes de
                            violência doméstica. <br />
                            Nosso foco é ajudar mulheres que sofreram violência doméstica, a se inserirem no
                            mercado de trabalho e mudarem o cenário de suas vidas! <br />
                            Nossos parceiros, além de estarem contratando um serviço altamente eficiente através do trabalho qualificado
                            e
                            empático de cada uma das nossas Donnes!, também estarão ajudando a dar liberdade financeira à estas
                            mulheres!
                        </p>
                        <Link to="/parceiros" className="btn btn-dark text-decoration-none" >
                            Conheça nossos Parceiros
                        </Link>
                    </div>
                    <img className="img-fluid col-md-3" src={Business} alt="girl" />
                </div>
                <div className="Container somos1 p-4  text-center">
                    <h2 className="my-3 pb-2">
                        Áreas de atuação das nossas Donnes!
                    </h2>
                    <hr className="hr my-2 p-0" />
                    <div className="row justify-content-around align-items-center">
                        <img className="img-fluid col-md-4" src={Super} alt="girl" />
                        <div className="d-inline-block div col-md-5 p-3">
                            <div className="container person m-1 p-4">
                                <h3 className="m-0 p-0 text-start">
                                    Pré-Vendas
                                </h3>
                                <hr className="hrs my-2 p-0" />
                                <p>
                                    Passamos por toda a jornada do lead, entrando em contato após estudar sobre seu perfil a fim de
                                    verificar se o produto ou serviço da sua empresa soluciona o que o lead deseja.
                                </p>
                            </div>
                            <div className="container person m-1 p-4">
                                <h3 className="m-0 p-0 text-start">
                                    Vendas
                                </h3>
                                <hr className="hrs my-2 p-0" />
                                <p>
                                    Identificamos estratégias para acionar os leads. Caso precise, identificamos melhorias nos
                                    processos,
                                    trazendo soluções para otimizar os resultados.
                                </p>
                            </div>
                            <div className="container person m-1 p-4">
                                <h3 className="m-0 p-0 text-start">
                                    Suporte
                                </h3>
                                <hr className="hrs my-2 p-0" />
                                <p>
                                    Com total conhecimento do produto ou serviço, oferecemos um atendimento humanizado trazendo as
                                    melhores
                                    soluções dentro do cenário apresentado.
                                </p>
                            </div>
                    <div className="btn-group my-2">
                        <Link to="/DonneCreate" className="btn btn-dark text-decoration-none border-secondary" >
                            Ser uma Donne!
                        </Link>
                        <Link to="/ParceiroCreate" className="btn btn-dark  text-decoration-none border-secondary" >
                            Ser um Parceiro
                        </Link>
                    </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default SobrePage;