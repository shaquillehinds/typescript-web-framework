import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

const url = "http://localhost:3000";

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(url);

  constructor() {}
}
