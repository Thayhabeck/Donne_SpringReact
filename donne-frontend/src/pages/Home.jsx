import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Woman from "../assets/Woman.svg";

const HomePage = () => {

    return (
        <div className="container-fluid my-1">
            <div id="bookstoreCarrousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Img1} className="d-block w-100" alt="Img1" />
                    </div>
                    <div className="carousel-item">
                        <img src={Img2} className="d-block w-100" alt="Img2" />
                    </div>
                    <div className="carousel-item">
                        <img src={Img3} className="d-block w-100" alt="Img3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#bookstoreCarrousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bookstoreCarrousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="text-center mt-xl-5 w-100 align-content-center justify-content-center">
                <img className="img-fluid my-4 w-50" src={Woman} alt="icone" />
            </div>
        </div>
    );
}

export default HomePage;