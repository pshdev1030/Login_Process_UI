import { createServer, Response } from "miragejs";

const wait = (delay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

const token1 = "token1token1";

const token1DB = { sunghyeon: token1 };

const token2 = "token2token2";

const token2DB = { sunghyeon: token2 };

createServer({
  routes() {
    this.post("/login/type1", async (schema, req) => {
      const { userName } = JSON.parse(req.requestBody);

      if (!token1DB[userName]) {
        return new Response(404, {}, { message: "Invalid Username" });
      }

      return new Response(200, {}, { token: token1 });
    });

    this.post("/login/type2", async (schema, req) => {
      const { userName } = JSON.parse(req.requestBody);

      if (!token2DB[userName]) {
        return new Response(404, {}, { message: "Invalid Username" });
      }

      return new Response(200, {}, { token: token1 });
    });
  },
});
