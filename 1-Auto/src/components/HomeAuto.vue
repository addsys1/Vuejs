<template>
  <div class="container">
    <div class="row">
      <HeaderAuto />
    </div>

    <div class="row">
      <div class="col-md-8 mx-auto">
        <h2>Hello {{ this.name }} , you are in Home page</h2>

        <div class="table-responsive py-3">
          <table
            class="table table-striped table-hover table-bordered table-secondary"
          >
            <thead>
              <th>Id</th>
              <th>Matricule</th>
              <th>Marque</th>
              <th>Modele</th>
              <th>Annee_Fabrication</th>
              <th>Kilometrage</th>
              <th>Action</th>
            </thead>

            <tbody>
              <tr v-for="item in autos" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.matricule }}</td>
                <td>{{ item.marque }}</td>
                <td>{{ item.modele }}</td>
                <td>{{ item.annee_Fabrication }}</td>
                <td>{{ item.kilometrage }}</td>
                <td class="d-flex justify-content-evenly">
                  <router-link
                    class="btn btn-info"
                    :to="'/update-auto/' + item.id"
                    >Update</router-link
                  >

                  <button class="btn btn-danger" @click="deleteAuto(item.id)">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuto from "./HeaderAuto.vue";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert
export default {
  name: "HomeAuto",
  data() {
    return {
      name: "",
      result : '',
      autos: [],
    };
  },

  components: {
    HeaderAuto,
  },

  methods: {
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "LoginAuto" });
      }

      let result = await axios.get("http://localhost:3000/autos");
      console.warn(result);
      this.autos = result.data;
    },

    async deleteAuto(id) {
      // const confirmed = window.confirm(
      //   "Are you sure you want to delete this item?"
      // );
      // if (confirmed) {
      //   console.warn(id);
      //   let result = await axios.delete("http://localhost:3000/autos/" + id);
      //   if (result.status == 200) {
      //     this.loadData();
      //   }
      // }

      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        console.warn(id);
        this.result = await axios.delete("http://localhost:3000/autos/" + id);
        
          this.loadData();
      
      }
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
