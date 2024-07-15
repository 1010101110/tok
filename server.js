//inits
const path = require('path')
const fs = require('fs')

const fastify = require('fastify')({
  logger: true,
  https:{
    key:fs.readFileSync(path.resolve('/etc/letsencrypt/live/transgenderok.com/privkey.pem')),
    cert:fs.readFileSync(path.resolve('/etc/letsencrypt/live/transgenderok.com/fullchain.pem')),
  }
})

const Pool = require('pg').Pool

const dbpool = new Pool({
  user: 'webapi',
  host: 'localhost',
  database: 'tok',
  password: 'ThisIsActuallyReallySecure69',
  port: 5432,
})

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
})

// routes
fastify.get('/', (request, reply) => {
  reply.sendFile('index.html')
})

fastify.get('/api/res/all', async (request, reply) => {
  return await dbpool.query`select * from res`.rows
})

fastify.get('/api/art/all', async (request, reply) => {
  return await dbpool.query`select * from art`.rows
})

//https server
fastify.listen({ port: 443, host: '0.0.0.0' }, (err, address) => {
  if (err) throw err
})

// http redirect
const fastify2 = require('fastify')({ logger: false })
fastify2.get('*', (request, reply) => {
  reply.redirect('https://transgenderok.com')
})
fastify2.listen({port:80, host:'0.0.0.0'}, async (err, address) => {
  //err log
  if (err) throw err

  //init db
  const dbresp = await dbpool.query('SELECT NOW()')
  console.log('db init ' + dbresp.rows[0].now)
})