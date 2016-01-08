import express from 'express';
import { getMembers } from './routes/member.js';

let PORT = 3000;

let app = express();

app.get('/', (req, res) => {
	getMembers().then(members => {
		res.json({
			members
		})
	});
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});