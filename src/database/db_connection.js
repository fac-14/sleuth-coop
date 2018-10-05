"use strict"

const pgp = require('pg-promise')();
const url = require('url')
require('env2')('./config.env');

if(!process.env.DB_URL) throw new Error('Environment variable DB_URL must be set')

const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.path.split("/")[1],
  max: process.env.MAX_DB_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== 'localhost'
}

const db = pgp(options);

module.exports = db;