import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ParceiroService from "../../services/ParceiroService";
import AreaService from "../../services/AreaService";

export default function Create() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");
    const [area, setArea] = useState({ idArea: null, nomeArea: "" });
    const [areas, setAreas] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    const createOrEditParceiro = (e) => {
        e.preventDefault();
        const donne = { nome, email, cnpj, senha, area };
        if (id) {
            ParceiroService.updateParceiro(id, donne)
                .then((response) => {
                    navigate("/");
                });
        } else {
            ParceiroService.createParceiro(donne)
                .then((response) => {
                    navigate("/");
                });
        }
    }

    const getAllAreas = () => {
        AreaService.getAllAreas()
            .then((response) => {
                setAreas(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllAreas();
    }, []);

    useEffect(() => {
        function getParceiroById() {
            if (id) {
                ParceiroService.getParceiroById(id)
                    .then((response) => {
                        setNome(response.data.nome);
                        setEmail(response.data.email);
                        setCnpj(response.data.cnpj);
                        setSenha("********");
                        setArea({ idArea: response.data.area_atuacao.idArea, nomeArea: response.data.area_atuacao.nomeArea });
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
        getParceiroById();
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
                        <label htmlFor="Cnpj" className="form-label fw-bolder">CNPJ</label>
                        <input type="text" id="Cnpj" className="form-control" placeholder="Cnpj"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Senha" className="form-label fw-bolder">Senha</label>
                        <input type="password" id="Senha" className="form-control" placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="area" className="form-label fw-bolder">Area de Atuação</label>
                        <select className="form-select"
                            aria-label="Area"
                            onChange={(e) => setArea({ idArea: Number.parseInt(e.target.value) })}>
                            <option value="default">{id ? area.nomeArea : "Escolha um Área de Atuação"}</option>
                            {areas.map((area) => (
                                <option key={area.idArea} value={area.idArea}>{area.nomeArea}</option>
                            ))};
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => createOrEditParceiro(e)}>Enviar</button>
                    <Link to="/" className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancelar</Link>
                </fieldset>
            </form>
        </div>
    );
}