<template>
  <div class="container-fluid">
      <div  class="searchDiv" v-if="lists.length <= 0" style="display:flex;justify-content:center;margin-top:200px;">
      <img class="imgIcon" src="https://img.icons8.com/cotton/128/000000/search--v1.png">
    </div>
      <div v-else>
      <router-link
        class="mx-auto text-center btn btn-dark"
        style="position:fixed;padding:3px 30px"
        tag="button"
        to="/currentWeather"
      >
        <i class="fa fa-arrow-left"></i>
      </router-link>
      <h2 class="mx-auto text-center">{{city.name}} / {{city.country}}</h2>
      <div class="container mb-5" v-for="list in lists">
        <div class="infoContainer pl-3 pr-3 mb-4">
          <div class="iconVsTemp">
            <div>
              <img class="imgIcon" :src="img+list.weather[0].icon+png" alt="iconImg">
            </div>
            <div>
              <p class="temp mx-auto">{{Math.round(list.main.temp-273.15)}}<span>°C</span></p>
            </div>
          </div>
          <div>
            <div class="durum">
              <p><img src="https://img.icons8.com/office/30/000000/pressure.png"> {{list.main.pressure}}</p>
              <p><img src="https://img.icons8.com/ultraviolet/30/000000/wet.png"> {{list.main.humidity}}%</p>
              <p><img src="https://img.icons8.com/cotton/30/000000/wind-turbine-2.png"> {{list.wind.speed}}</p>
            </div>
            <div class="durum1" align="center">
              <p class="date mr-3">{{list.dt_txt}}</p>
              <p style="height: 20px">{{list.weather[0].description}}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import axios from "axios"

  export default {
    data(){
      return{
        city : {
          name : "",
          country : "",
        },
        img : "/src/icons/",
        png : ".png",
        lists : [],
      }
    },
    created(){
      axios.get("https://api.openweathermap.org/data/2.5/forecast?q="+localStorage.getItem("cityName")+"&APPID=65d6a7fd3ce6b78c501c67c41ae3e9b8")
        .then(response=>{
          let data = response.data;
          this.city.name = data.city.name;
          this.city.country = data.city.country;
          this.lists = data.list;
        }).catch(()=>{
        this.$roter.push("/error");
      })
    }
  }
</script>

<style scoped>
  h2{
    margin-top: 100px;
    color : #ff993d;
    font-weight: 400;
    width: 60%;
    padding: 5px 0;
    background-color: #1d2124;
    border-radius: 5px;
  }
  .container-fluid{
    min-height: 100vh;
  }
  .container{
    max-width: 650px;
    min-width: 560px;
    margin-top: 25px;
    border : 1px solid grey;
    box-shadow: 5px 5px 10px 2px grey;
    border-radius: 5px;
    background-color:whitesmoke;
  }
  .infoContainer{
    display: flex;
  }
  .iconVsTemp{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    margin-top: 20px;
  }
  .imgIcon{
    height: 180px;
  }
  .temp{
    font-size: 70px;
    color : #2b5c81;
    font-weight: 100;
  }
  .durum{
    display: flex;
    font-weight: 100;
    margin-top: 25px;
  }
  .durum1{
    display: flex;
    font-weight: 100;
    font-size:20px;
  }
  .date{
    display: flex;
    align-items: center;
  }
  .durum p{
    margin:10px;
    display: flex;
    align-items: center;
    font-size:23px;
  }
  .durum p:first-child{
    margin-left:0;
  }
  p img{
    margin-right: 5px;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px){
    .container{
      min-width: 90vw;
      margin-top: 60px;
      border-radius: 20px;
      background-color: whitesmoke;
      box-shadow: 5px 5px 30px 2px grey;
    }
    button{
      font-size: 60px;
      border-radius: 20px;
      width:120px;
      background-color: black;
    }
    h2{
      font-size: 80px;
      margin-top: 230px;
      border-radius: 15px;;
      padding: 15px;
    }
    .infoContainer{
      display: block;
    }
    .iconVsTemp{
      justify-content: center;
    }
    .imgIcon{
      height: 350px;
    }
    .temp{
      font-size: 180px;
      color: #FF671E;
      display: flex;
    }
    span{
      font-size: 90px;
      margin-top: 40px!important;
    }
    .durum{
      display: flex;
      justify-content: center;
    }
    .durum p{
      font-size: 65px;
      margin-right: 60px;
    }
    .durum img{
      height: 80px;
      margin-right: 10px;
    }
    .durum1{
      display: flex;
      justify-content: center;
    }
    .durum1 p{
      font-size: 50px;
      margin-right: 60px;
    }
    .durum1 img{
      height: 70px;
      margin-right: 10px;
    }
    .date{
      margin-right: 60px!important;
    }
    .searchDiv{
      margin-top:400px!important;
    }
  }
  @media only screen and (min-device-width :500px)and (max-device-width : 1200px){
    .container{
      min-width: 70vw;
      margin-top: 60px;
      border-radius: 20px;
      background-color: whitesmoke;
      box-shadow: 5px 5px 30px 2px grey;
    }
    button{
      font-size: 40px;
      border-radius: 20px;
      width:120px;
      background-color: black;
    }
    h2{
      font-size: 50px;
      margin-top: 230px;
      border-radius: 15px;;
      padding: 15px;
    }
    .infoContainer{
      display: block;
    }
    .iconVsTemp{
      justify-content: center;
    }
    .imgIcon{
      height: 300px;
    }
    .temp{
      font-size: 130px;
      color: #FF671E;
      display: flex;
    }
    span{
      font-size: 55px;
      margin-top: 40px!important;
    }
    .durum{
      display: flex;
      justify-content: center;
    }
    .durum p{
      font-size: 40px;
      margin-right: 60px;
    }
    .durum img{
      height: 60px;
      margin-right: 10px;
    }
    .durum1{
      margin-top:20px;
      display: flex;
      justify-content: center;
    }
    .durum1 p{
      font-size: 35px;
      margin-right: 60px;
    }
    .date{
      margin-right: 60px!important;
    }
    .searchDiv{
      margin-top:400px!important;
    }
  }

</style>
