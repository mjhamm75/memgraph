import faker from 'faker';
import { knexInit } from '../config/knex';

let knex = knexInit();

for(let i = 0; i < 1; i++) {
	var firstName = faker.name.firstName();
	var lastName = faker.name.lastName();
	

	knex('member').insert({
		firstName, 
		lastName
	}).then(res => {
		console.log(`Inserterd ${i}`)
	})
}