import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import Mensagens from "./pages/Contato";
import Contato from "./pages/Contato/create";
import Donnes from "./pages/Donnes"
import DonneCreate from "./pages/Donnes/create"
import Parceiros from "./pages/Parceiros"
import ParceiroCreate from "./pages/Parceiros/create"
import Somos from "./pages/Sobre"
import { AuthProvider, AuthContext } from "./contexts/auth";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const AppRoutes = () => {
    const Private = ({children}) => {
        const {loading, authenticated } = useContext(AuthContext);

        if (loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
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
                    <Route exact path="/somos" element={<Somos />} />
                    <Route exact path="/donnes" element={<Donnes />} />
                    <Route exact path="/DonneCreate" element={<DonneCreate />} />
                    <Route exact path="/DonneUpdate/:id" element={<Private><DonneCreate /></Private>} />
                    <Route exact path="/parceiros" element={<Parceiros />} />
                    <Route exact path="/ParceiroCreate" element={<ParceiroCreate />} />
                    <Route exact path="/ParceiroUpdate/:id" element={<Private><ParceiroCreate /></Private>} />
                    <Route exact path="/mensagens" element={<Private><Mensagens /></Private>} />
                    <Route exact path="/contato" element={<Contato />} />
                </Routes>
                <Footer/>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;