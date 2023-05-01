import { BskyAgent, AtpSessionEvent, AtpSessionData } from "@atproto/api";

const agent = new BskyAgent({
  service: "https://staging.bsky.app",
  persistSession: (evt: AtpSessionEvent, sess?: AtpSessionData) => {
    console.log(sess);
  },
});

export async function login() {
  await agent.login({ identifier: "alice@mail.com", password: "hunter2" });
  await agent.resumeSession(null);
  await agent.createAccount({
    email: "alice@mail.com",
    password: "hunter2",
    handle: "alice.example.com",
  });
}
export interface Toppings {
  peppers: boolean;
  pineapple: boolean;
  bbqSauce: boolean;
  cheeseType: string;
}

export async function orderPizza(
  toppings: Toppings
): Promise<{ message: string }> {
  let message = "you ordered a pizza with:\n";
  if (toppings.peppers) message += "  - peppers\n";
  if (toppings.pineapple) message += "  - pineapple\n";
  if (toppings.bbqSauce) message += "  - bbq\n";
  message += `  - ${toppings.cheeseType} cheese`;
  return {
    message,
  };
}
