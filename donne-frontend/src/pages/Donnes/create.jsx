import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DonneService from "../../services/DonneService";
import FuncaoService from "../../services/FuncaoService";

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
                    navigate("/");
                });
        } else {
            DonneService.createDonne(donne)
                .then((response) => {
                    navigate("/");
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
        <div className="container py-4 mt-5">
            <form>
                <fieldset>
                    <legend className="bg-dark rounded-3 p-3 text-light">
                        <h2 className="text-center">
                            {id ? "Editar Dados da Donne" : "Cadastro de Donne!"}
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
                    <Link to="/" className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancelar</Link>
                </fieldset>
            </form>
        </div>
    );
}