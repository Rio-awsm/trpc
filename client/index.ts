import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
      async headers() {
        return {
          Authorization: "Bearer 1"
        }
      }
    }),
  ],
});

// async function main() {
//   let response = await trpc.createTodo.mutate({
//     title: "Go to gym",
//     description: "Hit the gym",
//   });
//   console.log(response);
  
// }

// async function main() {
//   let response = await trpc.signUp.mutate({
//     email: "qwerty@gmail.com",
//     password: "qwerty",
//   });
//   console.log(response);
  
// }

async function main() {
  let response = await trpc.createTodo.mutate({
    title: "qwerty@gmail.com",
  });
  console.log(response);
  
}

main()