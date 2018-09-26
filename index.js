var app = express();

app.use('./css', express.static(__dirname + 'node_modules/bootstrap/dist/css/bootstrap.css'));
app.use('./js', express.static(__dirname + 'node_modules/bootstrap/dist/js/bootstrap.js'));
app.use('./js', express.static(__dirname + 'node_modules/popper.js/dist/popper.css'));
app.use('./js', express.static(__dirname + 'node_modules/jquery/dist/jquery.js'));