var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "FakeStore",
    "dataSource": "ADSI2364482",
    "projection": {
        "title":1,"price": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-pfnpp/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'LzNyAh9PS3ATY13qhV5Os0GDj3mOqdxapiqOV139VUODdmtpVtBZo2gzWyAZa2Ik',
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
