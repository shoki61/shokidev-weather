<template>
  <div class="container-fluid">

    <transition name="fade" mode="out-in">

      <div key="a" v-if="city.name===''" class="loadingDiv mt-3" align="center">
      <h2 class="mt-5 mb-4 loadingText">Loading...</h2>
      <div class="spinner-grow" role="status"></div>
    </div>

      <div key="b" v-else>
      <router-link
        class="mx-auto text-center btn btn-dark"
        style="position:fixed;padding:3px 30px"
        tag="button"
        to="/currentWeather"
      >
        <i class="fa fa-arrow-left"></i>
      </router-link>
      <h2 class="mx-auto text-center title animated bounceInDown">{{city.name}} / {{city.country}}</h2>
      <div class="container mb-5 animated bounceInUp" v-for="list in lists">
        <div class="infoContainer pl-3 pr-3 mb-4">
          <div class="iconVsTemp">
            <div>
              <img class="imgIcon" :src="img+list.weather[0].icon+png" alt="iconImg">
            </div>
            <div>
              <span class="temp mx-auto">{{Math.round(list.main.temp-273.15)}}<span>°C</span></span>
            </div>
          </div>
          <div>
            <div class="durum">
               <table>
              <tr>
                <td>Pressure </td>
                <td>: <span>{{list.main.pressure}} hpa</span></td>
              </tr>
              <tr>
                <td>Humidity </td>
                <td>: <span>{{list.main.humidity}}%</span></td>
              </tr>
              <tr>
                <td>Wind </td>
                <td>: <span>{{list.wind.speed}} m/s</span></td>
              </tr>
              <tr>
                <td>Cloudiness </td>
                <td>: <span>{{list.weather[0].description}}</span></td>
              </tr>
              <tr>
                <td>Date </td>
                <td>: <span>{{list.dt_txt}}</span></td>
              </tr>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </transition>
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
      setTimeout(()=>{
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q="+localStorage.getItem("cityName")+"&APPID=65d6a7fd3ce6b78c501c67c41ae3e9b8")
                .then(response=>{
                  let data = response.data;
                  this.city.name = data.city.name;
                  this.city.country = data.city.country;
                  this.lists = data.list;
                }).catch(()=>{
          this.$roter.push("/error");
        })
      },1500)
    }
  }
</script>

<style scoped>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .3s;
  }
  .fade-leave{
  }
  .fade-leave-active{
    transition: opacity .3s;
    opacity: 0;
  }
  .loadingText{
    color:grey;
  }
  .spinner-grow{
    width: 50px;
    height: 50px;
    background-color: #3086ba;
  }
  .loadingDiv{
    height: 400px;
    width: 400px;
    margin: auto;
    padding-top: 130px;
  }
  .title{
    margin-top: 100px;
    color : #ff993d;
    font-weight: 400;
    width: 60%;
    padding: 5px 0;
    background-color: #1d2124;
    border-radius: 5px;
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
    margin-right: 20px;
  }
  .imgIcon{
    height: 160px;
  }
  .temp{
    font-size: 70px;
    color : #2b5c81;
    font-weight: 100;
  }
  .durum{
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 400;
  }
  .durum span{
    font-weight: 500!important;
    color: darkslategray;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px){
    .loadingText{
      font-size: 80px;
      margin-top: 300px!important;
      margin-bottom: 80px!important;
    }
    .spinner-grow{
      width: 175px;
      height: 175px;
    }
    .title{
      margin-top: 200px;
      border-radius: 20px;
    }
    .durum{
      margin-top: 0!important;
    }
    .container{
      min-width: 90vw;
      margin-top: 60px;
      border-radius: 20px;
      background-color: whitesmoke;
      box-shadow: 5px 5px 30px 2px grey;
    }
    button{
      font-size: 60px;
      width: 150px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.7);
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
      font-weight: normal!important;
    }
    span{
      font-size: 90px;
      margin-top: 40px!important;
    }
    .durum span{
      font-size: 43px;
    }
    .durum{
      display: flex;
      justify-content: center;
    }
    td{
      font-size: 43px;
      padding-left: 10px;
      font-weight: normal;
    }
  }
  @media only screen and (min-device-width :500px)and (max-device-width : 1200px){
    .loadingText{
      font-size: 70px;
      margin-top: 250px!important;
      margin-bottom: 80px!important;
    }
    .spinner-grow{
      width: 165px;
      height: 165px;
    }
    .container{
      min-width: 70vw;
      margin-top: 60px;
      border-radius: 20px;
      background-color: whitesmoke;
      box-shadow: 5px 5px 30px 2px grey;
    }
    button{
      font-size: 40px;
      border-radius: 15px;
      width:120px;
      background-color: rgba(0, 0, 0, 0.7);
    }
    .title{
      font-size: 50px;
      margin-top: 150px;
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
      height: 250px;
    }
    .temp{
      font-size: 130px;
      color: #FF671E;
      display: flex;
      font-weight: 400;
      padding-bottom: 20px;
    }
    span{
      font-size: 55px;
      margin-top: 40px!important;
    }
    .durum{
      display: flex;
      justify-content: center;
      font-weight: normal;
      margin-top: 0;
    }
    .durum span{
      font-size: 35px;
    }
    td{
      font-size: 35px;
      padding-left: 10px;
    }
    strong{
      font-weight: 500;
    }
  }


</style>
