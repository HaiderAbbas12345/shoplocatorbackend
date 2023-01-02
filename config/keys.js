const db = {
  username: "HaiderAbbas",
  password: "7p4KXSgKkTKrDz0h",
  database: "storelocator",
  cluster: "cluster0",
};

// const uri = `mongodb+srv://${db.username}:${db.password}@${db.cluster}.fcmxtgn.mongodb.net/${db.database}?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${db.username}:${db.password}@${db.cluster}.7smpdm2.mongodb.net/${db.database}?retryWrites=true&w=majority`;

module.exports = uri;
