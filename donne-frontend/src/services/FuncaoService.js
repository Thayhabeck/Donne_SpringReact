import axios from "axios";

const FUNCAO_API_URL = "https://donneproject.herokuapp.com/funcao";

class FuncaoService {
    getAllFuncoes() {
        return axios.get(FUNCAO_API_URL);
    }

}

export default new FuncaoService();