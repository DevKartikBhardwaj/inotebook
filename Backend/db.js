const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";

main().catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(url);
}

module.exports = main;