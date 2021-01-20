import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}
  async fetch(id: number): Promise<AxiosPromise<T>> {
    return await axios({ method: "GET", url: `${this.rootUrl}/users/${id}` });
  }

  async save(data: T): Promise<AxiosPromise<T>> {
    if (data.id) return await axios({ method: "PUT", url: `${this.rootUrl}/users/${data.id}`, data });
    else return await axios({ method: "POST", url: `${this.rootUrl}/users`, data });
  }
}
