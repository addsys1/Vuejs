<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <img class="logo" src="../assets/img.jpg" alt="" />
        <div class="card my-3">
          <div class="card-header">
            <h3>Sign Up</h3>
          </div>

          <div class="card-body">
            <div class="form-group py-3">
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                placeholder="Enter your Name...."
                v-model="name"
              />

              <span class="error-feedback text-danger" v-if="v$.name.$error">{{
                v$.name.$errors[0].$message
              }}</span>
            </div>

            <div class="form-group py-3">
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                placeholder="Enter your Email...."
                v-model="email"
              />
              <span class="error-feedback text-danger" v-if="v$.email.$error">{{
                v$.email.$errors[0].$message
              }}</span>
            </div>

            <div class="form-group py-3">
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                placeholder="Enter your Password...."
                v-model="password"
              />
              <span
                class="error-feedback text-danger"
                v-if="v$.password.$error"
                >{{ v$.password.$errors[0].$message }}</span
              >
            </div>

            <div class="form-group py-3">
              <button type="button" @click="signUp" class="btn btn-primary">
                Sign Up
              </button>
            </div>

            <div>
              <router-link to="/login-auto" class="login-signin"
                >Login</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

import { toast } from "vue3-toastify"; //npm install --save vue3-toastify
import "vue3-toastify/dist/index.css";

export default {
  name: "SignUp",

  data() {
    return {
      v$: useValidate(),
      name: "",
      email: "",
      password: "",
    };
  },

  validations() {
    return {
      name: { required, minLength: minLength(5) },
      email: { required, email },
      password: { required, minLength: minLength(5) },
    };
  },

  methods: {
    async signUp() {
      this.v$.$validate();

      if (!this.v$.$error) {
        try {
          console.warn("success");
          let result = await axios.post("http://localhost:3000/users", {
            name: this.name,
            email: this.email,
            password: this.password,
          });

          if (result.status == 201) {
            // toast.success('welcome to my websitel Success!',{autoClose: 5000,})

            localStorage.setItem("user-info", JSON.stringify(result.data));

            this.$router.push({ name: "HomeAuto" });

            setTimeout(() => {
              toast.success("Sign up successful!", {
                autoClose: 2000,
              });
            }, 300);
          }
            } catch (error) {
              console.error("Error:", error);
              // Display an error toast
              toast.error("An error occurred. Please try again.");
            }
      } else {
        console.warn("Error...");
      }

      // End Validation
    },
  },
};
</script>

<style>
img {
  width: 120px;
}
.login-signin {
  text-decoration: none;
  color: #000;
}
</style>
