import { publicProcedure, router } from "./trpc";
import { z } from "zod";

import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
});

const appRouter = router({
  createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
    console.log("server pinned");
    
    const title = opts.input.title;
    const description = opts.input.description;

    //do db here

    return {
      id: "1",
      title: title,
      description: description,
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
