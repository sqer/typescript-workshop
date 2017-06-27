function setFullName(lastName: string, ...otherNames: string[]) {
  console.log("setFullName args:", lastName, otherNames);
}

function sendData(url: string, name: string = "MY_DEFAULT_NAME", age: number = -1) {
  console.log("sendData args:", url, name, age);
}

export function functionsArgsApp() {
  setFullName("Smith");
  setFullName("Smith", "Bob", "Edward", "II");
  sendData("http://batman.com");
  sendData("http://bob.com", "Bobek!", 33);
  sendData("http://batman.com", undefined, 55);
}