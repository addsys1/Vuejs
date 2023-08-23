<template>
    <h1>Lougout</h1>
    
</template>

<script>
export default {
   name : "LogoutAuto",

   mounted()
{
    localStorage.clear();
    this.$router.push({ name: "LoginAuto" });

}

}


</script>