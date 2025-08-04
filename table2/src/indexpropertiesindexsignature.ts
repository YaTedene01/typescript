const messages:{[langue:string]:string}={
    fr:"salut",
    en:"hello"
};
console.log(messages["fr"]);


type message={
    [langues:string]:string
}
 const Message:message={
    fr:"salut",
    en:"hello"
    
};
console.log(Message['en']);


// for (const langue in messages) {
//   console.log(`${langue} → ${messages[langue]}`);
// }

