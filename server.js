const app = require('express')();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
var path = require("path");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.route('/page').get(sendPage);

function sendPage(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
}

http.listen(9000, () => {
  console.log(`listening on *:${9000}`);
});
