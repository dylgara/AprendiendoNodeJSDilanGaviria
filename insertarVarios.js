var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364482",
    "documents": [{    

        "id":222,
        "title":"Chicle",
        "price":10000,
        "description":"Chicle picante"
    },
    {    

        "id":234,
        "title":"Chicle",
        "price":10000,
        "description":"Chicle picante"
    }
]
});
            
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