const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
	res.send('Welcome');
})

app.get('/check', (req, res) => {
	res.json({
		'Name' : 'Aminul Islam Saqib',
		'ID' : '17-34879-2'
	});
});

app.listen(port, (error) => {
	console.log('Server started at '+port);
});