<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">Admin Auto</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <!-- <a class="nav-link" href="#"
              >Home </a
            > -->
  
            <router-link to="/" class="nav-link2">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Add Student</a> -->
            <router-link to="/add-auto" class="nav-link2">Add Auto</router-link>
          </li>
  
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Update Student</a>
            <router-link to="/update-stu" class="nav-link2">Update Student</router-link>
          </li> -->
  
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Logout</a> -->
            <router-link to="/logout-auto" class="nav-link2">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "HeaderStu",
  };
  </script>
  
  
  <style>
  .nav-link2
  {
    text-decoration: none;
    border: none ;
    color : rgb(0,0, 0,0.65);
    padding: 10px;
  }
  </style>
  