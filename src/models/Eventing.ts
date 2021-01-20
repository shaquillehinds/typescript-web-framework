type Callback = () => void;

interface Events {
  [key: string]: Callback[];
}
export class Eventing {
  events: Events = {};
  on(eventName: string, callBack: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers;
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;
    handlers.forEach((event): void => {
      event();
    });
  }
}
