import { User } from "./models/User";

const user = new User({ name: "Dina", age: 24 });

// user.sync.save(user.get())

setTimeout(() => {
  console.log(user);
}, 1000);
user.events.on("change", () => console.log("change"));
user.events.trigger("change");
