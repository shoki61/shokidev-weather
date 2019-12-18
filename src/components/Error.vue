<template>
  <div class="container-fluid" align="center">
        <div class="error" align="center">
          <h3><i class="fas fa-exclamation" style="font-size:23px"></i> Error</h3>
          <p>Please try again !!!</p>
          <button @click="push">Ok</button>
        </div>
  </div>
</template>

<script>
  export default {
    methods : {
      push(){
        localStorage.removeItem("cityName");
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  p{
    border: 1px dashed rgb(255, 76, 77);
    width: 50%;
    padding: 10px;
  }
  button{
    border-radius: 3px;
    border : none;
    background-color: #7cc9ff;
    color : white;
    cursor: pointer;
    padding: 3px 20px;
    outline: none;
  }
  button:hover{
    background-color: #5583ff;
  }
  button:focus{
    box-shadow:0 0 0 .2rem #7cc9ff;
  }
  .container-fluid{
    margin-top: 250px;
   min-height: 90vh;
  }
  .error{
    width: 400px;
    border-radius: 5px;
    background-color:whitesmoke;
    color: rgb(255, 76, 77);
    border: 1px solid rgba(255, 76, 77, 0.8);
    padding: 15px;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 1200px){
    .error{
      width: 90%;
      margin-top: 400px;
    }
    h3,i{
      font-size: 90px!important;
    }
    p{
      font-size: 57px;
      width: 70%;
    }
    button{
      font-size: 50px;
      width: 70%;
      border-radius:5px;
      margin: 15px;
      margin-bottom: 35px;
    }

  }

</style>
