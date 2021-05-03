console.log("users: ", users);

console.log("todos: ", todos);

let stringifyUsers ="";
   
for (const user of users) {
    stringifyUsers += user.name + "\n"
}

alert(stringifyUsers);


const users=Object.create(todos)
    {id: 11,
      users.name="Nicolas Rain",
       users.name="wret",
      users.email="blaze@april.boolean",
      users.address={
      street= "oxford street",
        suite: "Apt. 556",
        city: "London",
        zipcode: "1000-3874",
        geo: {
          lat: "-47.3159",
          lng: "80.1496",
        }