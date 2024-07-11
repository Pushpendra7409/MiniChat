const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "Send me your exam Sheets",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "sunny",
    msg: "Give notes",
    created_at: new Date(),
  },
  {
    from: "harry",
    to: "garry",
    msg: "give money",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "golu",
    msg: "send pictures of dogs",
    created_at: new Date(),
  },
  {
    from: "neha",
    to: "radha",
    msg: "give answers to my questions",
    created_at: new Date(),
  },
  {
    from: "tony",
    to: "monu",
    msg: "Send pics",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
  
 