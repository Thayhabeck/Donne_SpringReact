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
                    <Route exact path="/" element={<Private><HomePage /></Private>} />
                </Routes>
                <Footer/>
            </AuthProvider>
        </Router>
    );
}

export default AppRoutes;