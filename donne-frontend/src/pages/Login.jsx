import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import "./styles.css"

const LoginPage = () => {
    const { login, authenticated } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, senha);
    }

    return (
        <div className="container py-2 mt-2 align-content-center">
            <form className="form" onSubmit={handleSubmit}>
            <p>{String(authenticated)}</p>
                <fieldset className="field">
                    <legend className="bg-dark rounded-3 p-3 mb-3 text-light">
                        <h2 className="text-center">
                            Login
                        </h2>
                    </legend>
                    <div className="mb-3">
                        <label className="form-label fw-bolder" htmlFor="email">Email</label> <br />
                        <input className="form-control" type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
        </div>

    );
};

export default LoginPage;