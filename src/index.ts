export class Log {
  static success(msg: string): void {
    console.log(`%c ${msg}`, "color:green");
  }
  static error(msg: string): void {
    console.log(`%c ${msg}`, "color:red");
  }
  static warning(msg: string): void {
    console.log(`%c ${msg}`, "color:red; background:yellow");
  }
}
