require('dotenv').config(); //injects directly into index
const path = require('path');
const express = require('express'); //eslint-disable-line

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build'))); //absolute path to the build folder 

const PORT = process.env.PORT || 5000;

app.get('/api/foo', (req, res)=> {
    res.json({ message: 'hello there!'})
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});











function cohortRocks () {
    console.log('arguments: ', process.argv.slice(2));
    console.log(`web ${process.argv[2]} rocks`);
}

function cohortRocksEnv() {
    console.log(`Home folder is "${process.env.HOME}"`);
    console.log(`My shell is "${process.env.SHELL}"`);
    console.log(`In my environment, FOO is "${process.env.FOO}"`);
    console.log(`My secrets are stored in "${process.env.SECRET_STASH}"`);
}
cohortRocksEnv();