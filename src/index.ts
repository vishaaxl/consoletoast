export class Log {
  static success(msg: string): void {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then(({ ip }) => {
        console.log(
          `%c ${msg}, your ip: ${ip} has been stored along with your exact location and family members details.`,
          "color:white;background:green"
        );
      });
  }
  static error(msg: string): void {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then(({ ip }) => {
        console.log(
          `%c ${msg}, your ip: ${ip} has been stored along with your exact location and family members details.`,
          "color:white;background:red"
        );
      });
  }
  static warning(msg: string): void {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then(({ ip }) => {
        console.log(
          `%c ${msg}, your ip: ${ip} has been stored along with your exact location and family members details.`,
          "color:red;background:yellow"
        );
      });
  }
}
