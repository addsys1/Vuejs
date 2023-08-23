<template>
    
    <div class="container">
    <div class="row">
      <HeaderAuto />
    </div>

    <div class="row">
      <div class="col-md-8 mx-auto">
        <h1>Add Auto</h1>

        <!-- <form> -->
          <div class="form-group py-3">
            <input
              type="text"
              class="form-control"
              name="matricule"
              id=""
             
              placeholder="Enter your Matricule ..."
              v-model="auto.matricule"
            />
          </div>

          <div class="form-group py-3">
            <input
              type="text"
              class="form-control"
              name="marque"
              id=""
              
              placeholder="Enter your Marque ..."
              v-model="auto.marque"
            />
          </div>

          <div class="form-group py-3">
            <input
              type="text"
              class="form-control"
              name="modele"
              id=""
              
              placeholder="Enter your Modele ..."
              v-model="auto.modele"
            />
          </div>

          <div class="form-group py-3">
            <input
              type="date"
              class="form-control"
              name="annee_Fabrication"
              id=""
              
              placeholder="Enter your Annee_Fabrication ..."
              v-model="auto.annee_Fabrication"
            />
          </div>

          <div class="form-group py-3">
            <input
              type="text"
              class="form-control"
              name="kilometrage"
              id=""
              
              placeholder="Enter your kilometrage ..."
              v-model="auto.kilometrage"
            />
          </div>

          <div class="form-group py-3">
            <button class="btn btn-info" @click="addAuto">
              Add Auto
            </button>
          </div>
        <!-- </form> -->
      </div>
    </div>
  </div>
    
</template>

<script>

import HeaderAuto from "./HeaderAuto.vue" ;
import axios from "axios";
export default {
   name : "AddAuto",

   data()
   {
    return {
      auto : [{
        matricule  : '',
        marque : '',
        modele : '',
        annee_Fabrication  : '',
        kilometrage : '',
      }]
    }

   },

   components : {
    HeaderAuto ,
   },
   methods : {
    async addAuto()
    {
      const result = await axios.post("http://localhost:3000/autos", {
        
        matricule : this.auto.matricule,
        marque : this.auto.marque,
        modele : this.auto.modele,
        annee_Fabrication : this.auto.annee_Fabrication,
        kilometrage : this.auto.kilometrage,
        
      });
      console.warn(this.auto);
      if(result.status ==201)
      {
        this.$router.push({ name: "HomeAuto" });

      }
    }
   },
   mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },


}
</script>