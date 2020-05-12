import knexFile from '../../knexfile';
import knex from 'knex';

const connection = knex(knexFile.development);

export default connection;
