// const fastify = require("fastify")();
// const fastifyStatic = require("fastify-static");
// const path = require("path");

// fastify.register(fastifyStatic, {
// 	root: path.join(__dirname, "public"),
// });

// fastify.listen(3000, (err, address) => {
// 	if (err) throw err;
// 	fastify.log.info(`server listening on ${address}`);
// });

export default {
	async fetch(request) {
		if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        if (request.method === "POST") {
            const data = await request.json();

            // Gửi email thông qua Cloudflare Email Routing
            const emailContent = `
                From: ${data.name} <${data.email}>
                Phone: ${data.phone}
                Message:
                ${data.message}
            `;
            console.log(emailContent);

            return new Response("Email processed successfully", { status: 200 });
        }

        return new Response("Method not allowed", { status: 405 });
    },
};
