import faker from 'faker';
import { knexInit } from '../config/knex';
import { Observable } from 'rx';

let knex = knexInit();

for(let index = 0; index < 400; index++) {
	var firstname = faker.name.firstName();
	var lastname = faker.name.lastName();
	
	var subscriber = Observable.fromPromise(createName())
		.concatMap(res => res)
		.concatMap(res => createAddress(res))
	subscriber.subscribe(res => console.log(res));
}

function createName() {
	var firstname = faker.name.firstName();
	var lastname = faker.name.lastName();

	return knex('member').insert({ 
		firstname, 
		lastname
	}).returning('id');
}

function createAddress(memberId) {
	var streetaddress = faker.address.streetAddress();
	var city = faker.address.city();
	var state = faker.address.state();
	var zipcode = faker.address.zipCode();

	return knex('address').insert({
		streetaddress,
		city,
		state,
		zipcode,
		member_id: memberId
	}).returning('id');
}