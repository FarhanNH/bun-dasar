const passwordHash = await Bun.password.hash("rahasia", {
    algorithm: "bcrypt",
    cost: 10,
});

const result = await Bun.password.verify("rahasia", passwordHash, "bcrypt"); //bisa hanya 2 parameter saya tanpa mencantumkan algoritmanya
console.log(result);