const axios = require("axios");

async function sendRequest(url) {
  return await axios.get(url).then(response => response.data);
}

const resolvers = {
  Query: {
    posts: async () => {
      return await sendRequest("https://jsonplaceholder.typicode.com/posts");
    },
    post: async (parent, { id }) => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/posts/" + id
      );
    },
    users: async () => {
      return await sendRequest("https://jsonplaceholder.typicode.com/users");
    },
    user: async (parent, { id }) => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
    },
    albums: async () => {
      return await sendRequest("https://jsonplaceholder.typicode.com/albums");
    },
    album: async (parent, { id }) => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/albums/" + id
      );
    },
    photos: async () => {
      return await sendRequest("https://jsonplaceholder.typicode.com/photos");
    },
    photo: async (parent, { id }) => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/photos/" + id
      );
    },
    todos: async () => {
      return await sendRequest("https://jsonplaceholder.typicode.com/todos");
    },
    todo: async (parent, { id }) => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/todos/" + id
      );
    }
  },
  Mutation: {
    addPost: async (parent, { post }) => {
      return await axios.default
        .post("https://jsonplaceholder.typicode.com/posts", post)
        .then(response => response.data);
    }
  },
  Post: {
    user: async post => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/users/" + post.userId
      );
    },
    comments: async post => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/posts/" +
          post.userId +
          "/comments"
      );
    }
  },
  Album: {
    user: async album => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/users/" + album.userId
      );
    }
  },
  Photo: {
    album: async photo => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/albums/" + photo.id
      );
    }
  },
  Todo: {
    user: async todo => {
      return await sendRequest(
        "https://jsonplaceholder.typicode.com/users/" + todo.userId
      );
    }
  }
};

module.exports = resolvers;
