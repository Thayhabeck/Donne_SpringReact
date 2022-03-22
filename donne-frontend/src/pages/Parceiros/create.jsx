import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ParceiroService from "../../services/ParceiroService";
import AreaService from "../../services/AreaService";
import Header from "../../components/Header";
import parceiroForm from "../../assets/parceiroForm.svg";
import "./styles.css"

export default function Create() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");
    const [area_atuacao, setArea_Atuacao] = useState({ idArea: null, nomeArea: "" });
    const [areas, setAreas] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    const createOrEditParceiro = (e) => {
        e.preventDefault();
        if (nome === "" || email === "" || cnpj === "" || senha === "" || area_atuacao.idArea === null){
            window.alert("Preencha todos os campos!")
        } else {
        const donne = { nome, email, cnpj, senha, area_atuacao };
        if (id) {
            ParceiroService.updateParceiro(id, donne)
                .then((response) => {
                    navigate("/parceiros");
                });
        } else {
            ParceiroService.createParceiro(donne)
                .then((response) => {
                    navigate("/parceiros");
                });
        }}
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
                        setArea_Atuacao({ idArea: response.data.area_atuacao.idArea, nomeArea: response.data.area_atuacao.nomeArea });
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
        getParceiroById();
    }, [id]);

    return (
        <div className="p-0 m-0 w-100 align-content-center">
            <Header title={id ? "Editar Dados do Parceiro" : "Cadastro de Parceiro"} />
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
                        <label htmlFor="area_atuacao" className="form-label fw-bolder">Area de Atuação</label>
                        <select className="form-select"
                            aria-label="Area"
                            onChange={(e) => setArea_Atuacao({ idArea: Number.parseInt(e.target.value) })}>
                            <option value="default">{id ? area_atuacao.nomeArea : "Escolha um Área de Atuação"}</option>
                            {areas.map((area_atuacao) => (
                                <option key={area_atuacao.idArea} value={area_atuacao.idArea}>{area_atuacao.nomeArea}</option>
                            ))};
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => createOrEditParceiro(e)}>Enviar</button>
                    <Link to="/parceiros" className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancelar</Link>
                </fieldset>
            </form>
            <img src={parceiroForm} alt="login" className="img-fluid col-md-3 " />
        </div>
        </div>
    );
}