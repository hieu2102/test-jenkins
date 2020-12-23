const express = require('express'),
	app = express();

app.listen(8080);


app.get('/', (req,res)=>{
	res.status(200).send('hello world');
});
