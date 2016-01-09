import { knexInit } from './../config/knex';
import { Observable } from 'rx';

let knex = knexInit();

export function getMembers() {
	return knex.select()
		.table('member')
		.innerJoin('address', 'member.id', 'address.member_id');
}

export function getMember(id) {
	return knex.select()
		.table('member')
		.innerJoin('address', 'member.id', 'address.member_id')
		.where('member.id', id);
}