<template>
  <div class="container-fluid" align="center">
        <div class="error" align="center">
            <p>No result for <span>"{{error}}"</span> </p>
          <button @click="push">Ok</button>
        </div>
  </div>
</template>

<script>
  export default {
      data(){
          return{
              error:localStorage.getItem('cityName')
          }
      },
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
    width: 50%;
    padding: 10px;
    font-size: 20px;
  }
  span{
      margin: 10px;
  }
  button{
    border-radius: 3px;
    border : none;
    background-color: #6497c8;
    color : white;
    cursor: pointer;
    padding: 3px 20px;
    outline: none;
  }
  button:hover{
    background-color: #4662c4;
  }
  button:focus{
    box-shadow:0 0 0 .2rem #7cc9ff;
  }
  .container-fluid{
    margin-top: 250px;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px){
    .error{
      width: 80%;
      margin-top: 400px;
    }
    h3,i{
      font-size: 70px!important;
    }
    p{
      font-size: 45px;
      width: 65%;
    }
    button{
      font-size: 50px;
      width: 65%;
      border-radius:10px;
        margin: 15px 15px 35px;
    }

  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px){
      .error{
          width: 70%;
          margin-top: 400px;
      }
      h3,i{
          font-size: 60px!important;
      }
      p{
          font-size: 35px;
          width: 60%;
      }
      button{
          font-size: 40px;
          width: 60%;
          border-radius:10px;
          margin: 15px 15px 35px;
      }

  }

</style>
