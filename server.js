import express from 'express';

let PORT = 3000;

let app = express();

app.get('/', (req, res) => {
	res.json({
		hello: 'world'
	})
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});