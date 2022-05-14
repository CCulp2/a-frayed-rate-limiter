const BASE_URL = 'https://api.ontempworks.com'
const axios = require('axios').default;


export async function getRequestBuilder(req) {
    url = BASE_URL + req.params;

    axios.get(url)
    .then((res) => {
        return res;
    })
    .catch((e) => {
        console.log(e);
    })
}

export async function postRequestBuilder(req) {
    url = BASE_URL + req.params;

    axios.post(url, {
        
    })
}