import axios from 'axios';


//https://sujeitoprogramador.com/r-api/?api=filmes URL usada no tutorial

const api = axios.create({
    //baseURL: 'https://dog.ceo/api/' //qual vai ser o link?
    //baseURL: "https://sujeitoprogramador.com/"
    baseURL: "https://fakestoreapi.com/"
});

export default api;