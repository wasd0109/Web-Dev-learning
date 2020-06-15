// Create an object and an array which we will use in our facebook exercise.
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
  userName: "Ken",
  password: "secret",
};
// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
  {
    userName: "Ken",
    password: "secret",
  },
  {
    userName: "John",
    password: "supersecret",
  },
  {
    userName: "Steve",
    password: "ultrasecret",
  },
];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [
  {
    userName: "John",
    timeline: "Hello",
  },
  {
    userName: "Steve",
    timeline: "Hi",
  },
  {
    userName: "Katy",
    timeline: "Lol",
  },
];
var userNamePrompt = prompt("Please enter your username");
var passwordPrompt = prompt("Please enter your password");
// function signIn(user, pass) {
//   if (user === database[0].userName && pass === database[0].password) {
//     console.log(newsFeed);
//   } else {
//     alert("Wrong username or password!");
//   }
// }
function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].userName === username &&
      database[i].password === password
    ) {
      console.log(newsFeed);
      return true;
    }
  }
  return false;
}
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Wrong username or password!");
  }
}
signIn(userNamePrompt, passwordPrompt);
