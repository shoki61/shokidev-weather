<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
    <router-link to="/" class="navbar-brand ml-4" @click.native="deleteName">
      <img src="/src/assets/logo.png" alt="logo">
    </router-link>
    <a href="https://github.com/shoki61/shokidev-weather" title="github" target="_blank" class="github"><i class="fab fa-github"></i></a>

  </nav>
</template>
<script>
  export default {
    methods : {
      deleteName(){
        localStorage.removeItem("cityName")
      }
    }
  }

</script>


<style>
  .navbar{
    background-color: rgba(32, 45, 64, 0.83);
    padding-top:10px;
  }
  .navbar-brand:hover span{
    color : #1ad0e9;
  }
  .github{
    margin-left: 80%;
    color: white;
    font-size: 25px;
    position: absolute;
    padding-left:13px;
    width: 50px;
    transition: border-bottom-color .3s ease-in-out,color .3s ease-in-out;
    padding-bottom: 3px;
    border-bottom:2px solid transparent;
  }
  .github:hover{
    color : #1ad0e9;
    border-bottom: 2px solid #1ad0e9;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px){
    nav{
      height: 150px;
    }
    span{
      font-size: 60px;
      margin-left: 20px;
    }
    img{
      height: 100px;
    }
    .navbar-brand{
      display: flex;
      align-items: center;
    }
    .github{
      font-size: 50px;
    }
  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px){
    nav{
      height: 100px;
    }
    span{
      font-size: 35px;
      margin-left: 20px;
    }
    img{
      height: 75px;
    }
    .navbar-brand{
      display: flex;
      align-items: center;
    }
    .github{
      font-size: 35px;
    }
  }
</style>
