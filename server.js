import express from 'express';
import members from './mock/member.mock';

let PORT = 3000;

let app = express();

app.get('/', (req, res) => {
	res.json({
		members: members
	})
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});