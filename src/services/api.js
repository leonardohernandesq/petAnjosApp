import axios from 'axios'

//http://empresafuneraria103559.protheus.cloudtotvs.com.br:4050/rest/wsanjusers/users
// http://empresafuneraria103559.protheus.cloudtotvs.com.br:4050/rest/wsanjusers/users?username=11131992881&password=1
//http://empresafuneraria103559.protheus.cloudtotvs.com.br:4050/rest/wsanjcart/dependents

//Exemplo de payload:
// {
//     "fullname": "ARIOVALDO FARIAS DE SOUZA",
// 	   "username": "11131992881",
//     "password": "11941",
//     "listuser": "l"
// }

const api = axios.create({
  baseURL: 'http://empresafuneraria103558.protheus.cloudtotvs.com.br:4050/',
  headers: {
    'Authorization': 'Basic YWRtaW46TnYqNW45',
    'Connection': 'keep-alive',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'application/json',
    'Accept': '*/*',
  },
}); 

export default api;