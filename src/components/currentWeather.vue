<template>
  <div class="fullContainer">
      <transition name="fade" mode="out-in">
        <div key="a"  class="searchImg" v-if="city.name === '' " style="display:flex;justify-content:center;margin-top:300px;">
      <img class="imgIcon" src="https://img.icons8.com/cotton/128/000000/search--v1.png" alt="Loading...">
    </div>

        <div key="b" v-else >
        <div style="margin-top: 120px;margin-bottom: 30px;" align="center">
            <input
                    class="newSearchInput"
                    type="text"
                    v-model="newSearch"
                    @keydown.enter="push"
                    placeholder="search new city...">
        </div>
      <div class="container">
        <div class="row mx-auto pt-2">
          <h3 class="mx-auto">{{city.name}} / {{city.country}}</h3>
        </div>
        <div class="infoContainer pl-3 pr-3 mb-4">
         <div class="iconVsTemp">
          <div class="iconContainer">
              <!--http://openweathermap.org/img/wn/@2x.png-->
            <img class="imgIcon" :src="img+city.icon+png" alt="">
          </div>
          <div class="tempContainer">
              <p class="temp mx-auto">{{city.temp}}<span>°C</span></p>
          </div>
         </div>
          <div class="durumContainer">
            <div class="durum">
              <p><img src="https://img.icons8.com/office/30/000000/pressure.png"> {{city.pressure}} hpa</p>
              <p><img src="https://img.icons8.com/ultraviolet/30/000000/wet.png"> {{city.humidity}}%</p>
              <p><img src="https://img.icons8.com/cotton/30/000000/wind-turbine-2.png"> {{city.wind_speed}} m/s</p>
            </div>
            <div class="durum">
              <p style="height: 25px">{{city.condition}}</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <router-link
            to="/forecast"
            tag="p"
            class="col-12"
          >
            <p  class="linkText">See 3 hours / 5 days forecast for {{city.name}}</p>
          </router-link>
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
          name: "",
          country: "",
          temp: "",
          pressure: "",
          humidity: "",
          condition: "",
          wind_speed: "",
          icon: "",
        },
          img : "/src/icons/",
          png : ".png",
        newSearch: ""
      }
    },
    created(){
      let url = "https://api.openweathermap.org/data/2.5/weather?q="+localStorage.getItem("cityName")+"&APPID=65d6a7fd3ce6b78c501c67c41ae3e9b8";
      axios.get(url)
        .then(response=>{
          let data = response.data;
          this.city = {
            name : data.name,
            country : data.sys.country,
            temp : Math.round(data.main.temp - 273.15),
            pressure : data.main.pressure,
            humidity : data.main.humidity,
            condition : data.weather[0].description,
            wind_speed : data.wind.speed,
            icon : data.weather[0].icon,
          };
        }).catch(()=> {
        this.$router.push("/error")
      })
    },
      methods : {
        push(){
            localStorage.setItem("cityName",this.newSearch);
            window.location.reload();
        }
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
  .fullContainer{
        min-height: 90vh;
  }
  .newSearchInput{
    border:1px solid #bfbfbf;
    border-radius: 3px;
    width: 250px;
    text-align: center;
    height: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    outline: none;
    font-weight: 600;
  }
  input:focus{
      box-shadow: 0 0 0 5px gray;
      transition: box-shadow .5s ease-in-out;
  }
  input:focus::placeholder{
      color:transparent;
  }
  h3{
    font-weight: 400;
    color: #0f8392;
  }
  .container{
    width: 700px;
    margin:auto;
    border : 1px solid grey;
    box-shadow: 5px 5px 20px 5px #b4afaf;
    border-radius: 5px;
    background-color: whitesmoke;
  }
  .iconVsTemp{
      display: flex;
      justify-content: space-around;
      align-items: center;
  }
  .imgIcon{
      height: 130px;
  }
  .infoContainer{
      display: flex;
      justify-content: center;
  }
  .temp{
    font-size: 70px;
    color : #2b5c81;
    font-weight: 100;
  }
  .iconContainer{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .tempContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    margin-left: 25px;
  }
  .durumContainer{
    font-size: 20px;
  }
  .durum{
    padding-top: 15px;
    display: flex;
    color : #636363;
    font-weight: 100;
  }
  .durum p{
    margin:5px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .durum p:first-child{
    margin-left:0;
  }
  p img{
    margin-right: 2px;
  }
  .col-12{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin: auto;
  }
  .col-12 p:hover{
    color : #0c5460;
    text-decoration:underline;
  }
  .col-12 .linkText{
    font-weight: 600;
    color: #897465;
    transition: color .3s ease-in-out;
    cursor: pointer;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px){
      .container{
          min-width: 90vw;
          border-radius: 20px;
          background-color: whitesmoke;
      }
      h3{
          font-size: 70px;
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
          color: #ffa136;
          display: flex;
      }
      span{
          font-size: 90px;
          margin-top: 30px;
      }
      .durum{
          display: flex;
          justify-content: center;

      }
      .durum p{
          font-size: 45px;
          margin-right: 60px;
      }
      .durum img{
          height: 70px;
          margin-right: 10px;
      }
      .linkText{
          font-size: 37px;
          color:gray!important;
      }
      hr{
          border-top: 1px solid gray;
      }
      .searchImg{
          margin-top: 450px!important;
      }
      input{
          font-size: 45px;
          width: 550px!important;
          height: 90px!important;
          margin-top: 150px;
          margin-bottom: 50px;
          border:2px solid gray !important;
          border-radius: 15px!important;
          color:#5a5f63!important;
      }
      input:focus{
          box-shadow: 0 0 0 10px #5a5f63!important;
      }
  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px){
      .container{
      min-width: 75vw;
      margin-top: 60px;
      border-radius: 20px;
      background-color: whitesmoke;
      box-shadow: 5px 5px 30px 2px grey;
      }
      h3{
          margin-top:15px;
          font-size: 50px;
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
          color: #ffa136;
          display: flex;
      }
      span{
          font-size: 50px;
          margin-top: 35px;
      }
      .durum{
          display: flex;
          justify-content: center;
          color: grey;
      }
      .durum p{
          font-size: 35px;
          margin-right: 60px;
      }
      .durum img{
          height: 45px;
          margin-right: 10px;
      }
      .linkText{
          font-size: 30px;
          color: grey !important;
      }
      hr{
          border-top: 1px solid gray;
      }
      input{
          font-size: 35px;
          width: 350px!important;
          height: 70px!important;
          margin-top: 70px;
          margin-bottom: 10px;
          border:2px solid gray !important;
          border-radius: 15px!important;
          color:#5a5f63!important;
      }
      input:focus{
          box-shadow: 0 0 0 10px #5a5f63!important;
      }
  }



</style>
