// Code will be tested with different roles and movies
let movie = { 
   title: "The Lord of the Rings: The Fellowship of the Ring",
   director: "Peter Jackson",
   composer: "Howard Shore",
   roles: [ // Roles are stored in order of appearance
      "Frodo Baggins",
      "Samwise Gamgee",
      "Gandalf",
      "Aragorn",
      "Legolas",
      "Saruman"
   ],
   orderOfAppearance(role) {
      return this.roles.indexOf(role) + 1;

   }
};;
console.log(movie.orderOfAppearance("Frodo Baggins"))