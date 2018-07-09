const { GraphQLServer } = require("graphql-yoga");
const schema = require("./graphql/schema");
const path = require("path");

const PORT = process.argv[2] || 3000;

const server = new GraphQLServer({
  schema
});

const options = {
  port: PORT,
  endpoint: "/graphql",
  playground: "/playground"
};

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});

server
  .start(options)
  .then(() => {
    console.log("Server running on port " + PORT);
  })
  .catch(reason => {
    console.log(reason);
  });
