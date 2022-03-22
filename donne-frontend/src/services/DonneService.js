import axios from "axios";

const DONNE_API_URL = "https://donneproject.herokuapp.com/donne";

class DonneService {
    getAllDonnes() {
        return axios.get(DONNE_API_URL);
    }

    createDonne(donne) {
        return axios.post(DONNE_API_URL, donne);
    }

    getDonneById(donneId) {
        return axios.get(DONNE_API_URL + "/" + donneId);
    }

    updateDonne(donneId, donne) {
        return axios.put(DONNE_API_URL + "/" + donneId, donne);
    }

    deleteDonne(donneId) {
        return axios.delete(DONNE_API_URL + "/" + donneId);
    }
}

export default new DonneService();