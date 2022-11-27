import { createServer, Response } from "miragejs";

const wait = (delay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

const token1 = "token1token1";

const token1DB: { [key: string]: string } = { sunghyeon: token1 };

const token2 = "token2token2";

const token2DB: { [key: string]: string } = { token1token1: token2 };

createServer({
  routes() {
    this.post("/login/type1", async (schema, req) => {
      const { userName } = JSON.parse(req.requestBody);

      await wait(2000);

      if (!token1DB[userName]) {
        return new Response(404, {}, { message: "Invalid Username" });
      }

      return new Response(200, {}, { token: token1DB[userName] });
    });

    this.post("/login/type2", async (schema, req) => {
      const { token } = JSON.parse(req.requestBody);

      await wait(2000);

      if (!token2DB[token]) {
        return new Response(404, {}, { message: "Invalid Token" });
      }

      return new Response(200, {}, { token: token2DB[token] });
    });
  },
});
