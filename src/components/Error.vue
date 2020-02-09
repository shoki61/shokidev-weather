<template>
  <div class="container-fluid" align="center">
        <img src="/src/assets/park.png" alt=""/>
        <div class="error" align="center">
            <p>No result for <span>"<i>{{error}}</i>"</span></p>
            <p>Please try again.</p>
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
    padding: 10px;
    font-size: 20px;
    display: block;
    margin-bottom: 0;
  }
  span{
      margin-left: 10px;
      color: #3184b6;

  }
  button{
    border-radius: 3px;
    border : none;
    background-color: #6497c8;
    color : white;
    cursor: pointer;
    padding: 5px 30px;
    outline: none;
    margin-top: 30px;
  }
  button:hover{
    background-color: #404d9a;
  }
  button:focus{
    box-shadow:0 0 0 .2rem #7cc9ff;
  }
  .container-fluid{
    margin-top: 250px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .error{
      width: 30%;

  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px){
    .error{
      width: 80%;
      margin: auto;
      margin-top: 100px;

    }
    p{
      font-size: 45px;
    }
    button{
      font-size: 50px;
      width: 65%;
      border-radius:10px;
      margin: 60px 15px 35px;
    }
    img{
       width: 60%;
       height: 400px;
       margin: auto;
    }
    .container-fluid{
        flex-direction: column;
        padding-top: 150px;
    }

  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px){
      .error{
          width: 80%;
          margin: auto;
          margin-top: 100px;
      }
      .container-fluid{
          flex-direction: column;
          padding-top: 150px;
      }
      img{
          width: 50%;
          height: 300px;
          margin: auto;
      }
      p{
          font-size: 35px;
      }
      button{
          font-size: 40px;
          width: 60%;
          border-radius:10px;
          margin: 60px 15px 35px;
      }

  }

</style>
