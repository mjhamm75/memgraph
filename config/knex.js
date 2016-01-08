export function knexInit() {
	return require('knex')({
	    client: 'pg',
	    connection: 'postgres://memgraph:memgraph@localhost/memgraph',
	    debug: false
	});	
}