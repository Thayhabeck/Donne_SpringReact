import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CreateUser from "./pages/Usuarios/create";
import Destinos from "./pages/Destinos/index";
import Viagens from "./pages/Viagens/index"
import CreateViagem from "./pages/Viagens/Create";

const AppRoutes = () => {
    const Private = ({children}) => {
        const { isLogged, loading, authenticated } = useContext(AuthContext);

        if (loading && !authenticated){
            return <div className="loading">Carregando...</div>
        }

        if(!isLogged){
            return <Navigate to="/login" />;
        } 

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Nav/>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/cadastro" element={<CreateUser />} />
                    <Route exact path="/destinos" element={<Destinos />} />
                    <Route exact path="/viagem" element={<Private><Viagens /></Private>} />
                    <Route exact path="/viagemCreate" element={<Private><CreateViagem /></Private>} />
                    <Route exact path="/viagemUpdate/:id" element={<Private><CreateViagem /></Private>} />
                </Routes>
                <Footer/>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;