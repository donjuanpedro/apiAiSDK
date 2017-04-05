const apiai = require('apiai');

const app = apiai("382e6270a7a24b8491f0a9e51a0bcc67");

var request = app.textRequest('<your personal query>', {
    sessionId: '<unique session id>'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
