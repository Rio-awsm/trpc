import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
  let response = await trpc.createTodo.mutate({
    title: "Go to gym",
    description: "Hit the gym",
  });
  console.log(response);
  
}

main()