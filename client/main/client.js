const axios = require("axios");

class RouteClient {

    query_routes(peers) {
        if (peers == undefined) {
            throw "Peers param is needed";
        }

        if (!Array.isArray(peers)) {
            peers = [peers];
        }
        let req_config = {
            params: {
                peers: peers
            }
        }
        return axios.get(RouteClient.url + '/route', req_config);
    }
}

RouteClient.url = 'http://route-machine:8000';

module.exports = RouteClient;