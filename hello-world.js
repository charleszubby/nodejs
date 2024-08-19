console.log("HELLO WORLD");

//! creaying a text file using file system
import myText from "fs";

myText.writeFile("hello.txt", "Hello Node", (err) => {
  if (err) throw err;
});

//!Asychronous code (callback function)
myText.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
