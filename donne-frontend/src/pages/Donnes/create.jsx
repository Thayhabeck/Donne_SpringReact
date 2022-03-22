import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import DonneService from "../../services/DonneService";
import FuncaoService from "../../services/FuncaoService";
import donneForm from "../../assets/donneForm.svg";
import "./styles.css"

export default function Create() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [funcao, setFuncao] = useState({ idFuncao: null, nomeFuncao: "" });
    const [funcoes, setFuncoes] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    const createOrEditDonne = (e) => {
        e.preventDefault();
        const donne = { nome, email, cpf, senha, funcao };
        if (id) {
            DonneService.updateDonne(id, donne)
                .then((response) => {
                    navigate("/donnes");
                });
        } else {
            DonneService.createDonne(donne)
                .then((response) => {
                    navigate("/donnes");
                });
        }
    }

    const getAllFuncoes = () => {
        FuncaoService.getAllFuncoes()
            .then((response) => {
                setFuncoes(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllFuncoes();
    }, []);

    useEffect(() => {
        function getDonneById() {
            if (id) {
                DonneService.getDonneById(id)
                    .then((response) => {
                        setNome(response.data.nome);
                        setEmail(response.data.email);
                        setCpf(response.data.cpf);
                        setSenha("********");
                        setFuncao({ idFuncao: response.data.funcao.idFuncao, nomeFuncao: response.data.funcao.nomeFuncao });
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
        getDonneById();
    }, [id]);

    return (
        <div className="p-0 m-0 w-100 align-content-center">
            <Header title={id ? "Editar Dados de Donne!" : "Cadastro de Donne!"} />
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
                            <label htmlFor="Cpf" className="form-label fw-bolder">CPF</label>
                            <input type="text" id="Cpf" className="form-control" placeholder="Cpf"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Senha" className="form-label fw-bolder">Senha</label>
                            <input type="password" id="Senha" className="form-control" placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="funcao" className="form-label fw-bolder">Função</label>
                            <select className="form-select"
                                aria-label="Funcao"
                                onChange={(e) => setFuncao({ idFuncao: Number.parseInt(e.target.value) })}>
                                <option value="default">{id ? funcao.nomeFuncao : "Escolha um Função"}</option>
                                {funcoes.map((funcao) => (
                                    <option key={funcao.idFuncao} value={funcao.idFuncao}>{funcao.nomeFuncao}</option>
                                ))};
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => createOrEditDonne(e)}>Enviar</button>
                        <Link to="/donnes" className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancelar</Link>
                    </fieldset>
                </form>
                <img src={donneForm} alt="login" className="img-fluid col-md-3 " />
            </div>
        </div>
    );
}