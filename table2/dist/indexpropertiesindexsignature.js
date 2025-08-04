"use strict";
const messages = {
    fr: "salut",
    en: "hello"
};
console.log(messages["fr"]);
const Message = {
    fr: "salut",
    en: "hello"
};
console.log(Message['en']);
// for (const langue in messages) {
//   console.log(`${langue} → ${messages[langue]}`);
// }
