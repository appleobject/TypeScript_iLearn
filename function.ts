function log(val: any): void {
  console.log(val);
}

function buildName(firstName: string, lastName?: string): string {
  return firstName + " " + lastName;
}

function people(firstName: string, ...remainingName: string[]) {
  return firstName + " " + remainingName.join(" ");
}

let personOne = people(
  "Jude-Scott",
  "34-45 Hooper Street Ikeja",
  "45",
  "10010"
);
let personTwo = people(
  "Navin-Randle",
  "14-25 Ajao Street Ikate",
  "65",
  "10050"
);

log(personOne);
log(personTwo);

log(buildName("Kvng"));
