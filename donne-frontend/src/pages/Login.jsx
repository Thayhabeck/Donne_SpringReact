import React, { useState, useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../contexts/auth";
import loginImg from "../assets/loginImg.svg";
import "./styles.css"

const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        if (email === "" || senha === ""){
            window.alert("Preencha todos os campos!")
        }
        login(email, senha);
    }

    return (
        <div className="p-0 m-0 w-100 align-content-center">
            <Header title="Acesso de Administrador" />
            <hr className="hr m-0 p-0" />
            <div className="row m-0 p-0 justify-content-around">
                <form className="form col-md-5 py-2 mt-2" onSubmit={handleSubmitLogin}>
                    <fieldset className="field">
                        <legend className=" rounded-3 p-1 mb-3 text-dark">
                            <h2 className="text-center">
                                Login
                            </h2>
                        </legend>
                        <div className="mb-3">
                            <label className="form-label fw-bolder" htmlFor="email">Email</label> <br />
                            <input className="form-control" type="email" name="email" id="email" placeholder="Email" 
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bolder" htmlFor="senha">Senha</label> <br />
                            <input className="form-control" type="password" name="senha" id="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto mb-3">
                            <button className="btn btn-primary" type="submit">Entrar</button>
                        </div>
                        <hr className="hr" />
                        <div className="p">ou</div>
                        <hr className="hr" />

                        <button className="botoes button-google">Entrar com o Google</button>
                        <button className="botoes button-facebook">Entrar com o Facebook</button>
                    </fieldset>
                </form>
                <img src={loginImg} alt="login" className="img-fluid col-md-3 " />
            </div>
        </div>

    );
};

export default LoginPage;