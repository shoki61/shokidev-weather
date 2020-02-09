<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8 mx-auto" align="center">
        <h1 class="mb-5 animated bounceInDown">Weather is Life</h1>
        <div class=" mb-3 col-3">
          <input @keydown.enter="push"
                 class="animated fadeInUp" v-model="inputName" type="text" placeholder="search city...">
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    data(){
      return{
        inputName : "",
      }
    },
    methods : {
      push(){
        if(this.inputName.length > 1){
          localStorage.setItem("cityName", this.inputName);
          this.$router.push('/currentWeather');
        }
      },
    },

  }
</script>


<style scoped>
  .container-fluid{
    background:url("/src/assets/homeBackImage.jpg") no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
  }
  .col-8{
    padding-top: 250px;
    justify-content: center;
  }
  .col-3{
    display: flex;
    justify-content: center;
  }
  h1{
    color: #fee05b;
    font-weight: 400;
  }
  input {
    outline: none;
    padding: 5px 30px;
    background-color: transparent;
    font-weight: 400;
    font-size: 25px;
    letter-spacing: 2px;
    border: none;
    border-bottom : 0.05em solid #f9f1b1;
    text-align: center;
    color: #f9f1b1 !important;
  }
  ::placeholder{
    color: #f9f1b1;
    transition: color .3s ease-in-out;
  }
  input:focus::placeholder{
    color:transparent;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px){
    h1{
      margin-top: 200px;
      font-size:65px;
    }
    input{
      margin-top: 40px;
      font-size: 50px;
      width: 500px;
    }
  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px){
    h1{
      margin-top: 100px;
      font-size: 50px;
    }
    input{
      margin-top: 40px;
      font-size: 35px;
      width: 400px;
    }
  }
</style>
