import axios from "axios";

const AREA_API_URL = "https://donneproject.herokuapp.com/area-atuacao";

class AreaService {
    getAllAreas() {
        return axios.get(AREA_API_URL);
    }

}

export default new AreaService();