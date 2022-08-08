let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flinstones = [].concat(...flintstones);

console.log(flinstones);