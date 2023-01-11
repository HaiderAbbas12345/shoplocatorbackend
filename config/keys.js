// const db = {
//   username: "HaiderAbbas",
//   password: "7p4KXSgKkTKrDz0h",
//   database: "storelocator",
//   cluster: "cluster0",
// };
// const uri = `mongodb+srv://${db.username}:${db.password}@${db.cluster}.7smpdm2.mongodb.net/${db.database}?retryWrites=true&w=majority`;

const db = {
  username: "usman",
  password: "usman886",
  database: "mytable",
  cluster: "cluster0",
};
const uri = `mongodb+srv://${db.username}:${db.password}@${db.cluster}.ua23z.mongodb.net/${db.database}?retryWrites=true&w=majority`;

module.exports = uri;
// mongodb+srv://usman:<password>@cluster0.ua23z.mongodb.net/?retryWrites=true&w=majority
