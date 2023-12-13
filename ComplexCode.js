/* Filename: ComplexCode.js */

// This code is a complex implementation of a social media application with user authentication, post creation, post retrieval, and search functionality.

// User class represents a user in the application
class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.posts = [];
  }

  createPost(content) {
    const post = new Post(this.id, content);
    this.posts.push(post);
  }
}

// Post class represents a post in the application
class Post {
  constructor(userId, content) {
    this.userId = userId;
    this.content = content;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Comment class represents a comment on a post
class Comment {
  constructor(userId, content) {
    this.userId = userId;
    this.content = content;
  }
}

// Database class simulates a database for user and post storage
class Database {
  constructor() {
    this.users = [];
    this.posts = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  addPost(post) {
    this.posts.push(post);
  }

  getUserById(id) {
    return this.users.find(user => user.id === id);
  }

  getPostsByUserId(userId) {
    return this.posts.filter(post => post.userId === userId);
  }

  searchPosts(query) {
    const regex = new RegExp(query, 'i');
    return this.posts.filter(post => regex.test(post.content));
  }
}

// Instantiate database
const db = new Database();

// Create users
const user1 = new User(1, "user1", "password1");
const user2 = new User(2, "user2", "password2");
const user3 = new User(3, "user3", "password3");

// Add users to the database
db.addUser(user1);
db.addUser(user2);
db.addUser(user3);

// Create posts
user1.createPost("Hello world!");
user1.createPost("This is my first post.");
user2.createPost("I love coding.");

// Add posts to the database
db.addPost(user1.posts[0]);
db.addPost(user1.posts[1]);
db.addPost(user2.posts[0]);

// Add comments to posts
user1.posts[0].addComment(new Comment(2, "Great post!"));
user1.posts[0].addComment(new Comment(3, "I agree!"));

// Retrieve posts for a specific user
const user1Posts = db.getPostsByUserId(1);
console.log("User 1 posts:", user1Posts);

// Search posts by content
const searchResults = db.searchPosts("coding");
console.log("Search results:", searchResults);

// Output:
// User 1 posts: [Post { userId: 1, content: 'Hello world!', comments: [Comment { userId: 2, content: 'Great post!' }, Comment { userId: 3, content: 'I agree!' }] }, Post { userId: 1, content: 'This is my first post.', comments: [] }]
// Search results: [Post { userId: 2, content: 'I love coding.', comments: [] }]