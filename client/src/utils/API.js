import axios from "axios";

export default {

  // Authentication
  // =============================================================

  //Logout a user out.
  logout: function() { return axios.get(`api/auth/logout`) },
  // Check if user is logged in


  // Users
  // =============================================================

  // Retrieve all users.
  getUsers: function() { return axios.get("/api/users/") },
  // Retrieve a single user.
  getUser: function(id) { return axios.get(`/api/users/${id}`) },

  // Connections
  // =============================================================

  // Add a connection.
  // Remove a connection.
  // Accept connection request.
  // Deny connection request.
  // Get Connection Count.

  // Posts
  // =============================================================

  // Retrieve all posts.
  getPosts: function() { return axios.get(`/api/posts/`) },

  // Retrieve a single post.
  getPost: function(id) { return axios.get(`/api/posts/${id}`) },

  // Create a post.
  createPost: function(postData) { return axios.post(`/api/posts/`, postData ) },

  // Delete a post.
  deletePost: function(id) { return axios.delete(`/api/posts/${id}`) },

  // Like a post
  likePost: function(id, user) { return axios.post(`/api/posts/${id}/like`, user) },

  // Dislike a post
  dislikePost: function(id, user) { return axios.post(`/api/posts/${id}/dislike`, user) },

  // Remove like or dislike from post
  removeLikeFromPost: function(id) { return axios.get('') },
};
