import generator from "generate-password";

function passwordGenerator() {
  var password = generator.generate({
    length: 10,
    numbers: true,
  });

  // 'uEyMTw32v9'
  console.log(password);
}
passwordGenerator();
