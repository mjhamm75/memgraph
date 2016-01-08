import { knexInit } from './../config/knex';
import { Observable } from 'rx';

let knex = knexInit();

export function getMembers() {
	return knex.select().table('member')
}