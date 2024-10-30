import { publicProcedure, router } from "./trpc";
import { z } from "zod";

import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
});

const appRouter = router({
  // createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
  //   console.log("server pinned");

  //   const title = opts.input.title;
  //   const description = opts.input.description;

  //   //do db here

  //   return {
  //     id: "1",
  //     title: title,
  //     description: description,
  //   };
  // }),

  signUp: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      let email = opts.input.email;
      let password = opts.input.password;

      //do db stuff

      let token = "1213";
      return {
        token,
      };
    }),

  createTodo: publicProcedure
    .input(
      z.object({
        title: z.string(),
      })
    )
    .mutation(async (opts) => {
      console.log(opts.ctx.username);
    }),
});

const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader);
    //jwt verify
    return {
      username: "qwerty",
    };
  },
});

server.listen(3000);

export type AppRouter = typeof appRouter;
