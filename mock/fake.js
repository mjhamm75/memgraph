import faker from 'faker';
import { knexInit } from '../config/knex';

let knex = knexInit();

for(let index = 0; index < 300; index++) {
	var firstname = faker.name.firstName();
	var lastname = faker.name.lastName();
	

	knex('member').insert({
		firstname, 
		lastname
	}).then(res => {
		console.log(`Inserted ${res}`)
	})
}