import axios from "axios";

const PARCEIRO_API_URL = "https://donneproject.herokuapp.com/parceiro";

class ParceiroService {
    getAllParceiros() {
        return axios.get(PARCEIRO_API_URL);
    }

    createParceiro(parceiro) {
        return axios.post(PARCEIRO_API_URL, parceiro);
    }

    getParceiroById(parceiroId) {
        return axios.get(PARCEIRO_API_URL + "/" + parceiroId);
    }

    updateParceiro(parceiroId, parceiro) {
        return axios.put(PARCEIRO_API_URL + "/" + parceiroId, parceiro);
    }

    deleteParceiro(parceiroId) {
        return axios.delete(PARCEIRO_API_URL + "/" + parceiroId);
    }
}

export default new ParceiroService();