const fastify = require("fastify")();
const fastifyStatic = require("fastify-static");
const path = require("path");

fastify.register(fastifyStatic, {
	root: path.join(__dirname, "public"),
});

fastify.listen(3000, (err, address) => {
	if (err) throw err;
	fastify.log.info(`server listening on ${address}`);
});
