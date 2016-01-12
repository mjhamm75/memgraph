import express from 'express';
import { getMember, getMembers } from './routes/member.js';

let PORT = 3000;

let app = express();

app.get('/members', (req, res) => {
	getMembers().then(data => {
		var members = formatMembers(data);
		res.json({
			members
		})
	});
})

app.get('/members/:id', (req, res) => {
	getMember(req.params.id).then(data => {
		var members = formatMembers(data);
		res.json({
			member: members[0]
		})
	});
})

app.get('/callings', (req, res) => {

})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

function formatMembers(data) {
	return data.map(row => {
		return {
			firstName: row.firstname,
			lastName: row.lastname,
			address: {
				streetAddress: row.streetaddress,
				city: row.city,
				state: row.state,
				zipcode: row.zipcode
			}
		}
	})
}