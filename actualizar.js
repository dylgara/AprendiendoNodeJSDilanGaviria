var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364482",
    "filter": {"id":227},
    "update": {
        "$set": {
            "title": "Aguacate"
        }
    }
}
);
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-wnqgp/endpoint/data/v1/action/insertMany',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'czSYdrVNcYMJIRnZAJlDKpyxBevka1pf4e0eVF9Zp3j6cgMKMCWFhP2DZK2PqlYe',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });