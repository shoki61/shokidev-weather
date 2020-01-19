<template>
  <div class="fullContainer">
      <transition name="fade" mode="out-in">

          <div key="a" v-if="city.name===''" class="loadingDiv" align="center">
              <h2 class="mt-5 mb-4">Loading...</h2>
              <div class="spinner-grow" role="status"></div>
          </div>

        <div key="b" v-else >
        <div style="margin-bottom: 30px;" align="center">
            <input
                    class="newSearchInput animated bounceInDown"
                    type="text"
                    v-model="newSearch"
                    @keydown.enter="push"
                    placeholder="search new city...">
        </div>
            <div>
                <transition name="fade" mode="out-in">
                  <div key="a" v-if="city.condition===''" class="loadingDiv pt-5" align="center">
                    <div class="spinner-grow mt-2 loading" role="status"></div>
                </div>
                  <div key="b" v-else class="container animated zoomIn">
                    <div class="row mx-auto pt-2">
                        <h3 class="mx-auto">{{city.name}} / {{city.country}}</h3>
                    </div>
                    <div class="infoContainer pl-3 pr-3 mb-4">
                        <div class="iconVsTemp">
                            <div class="iconContainer">
                                <img class="imgIcon" :src="img+city.icon+png" alt="">
                            </div>
                            <div class="tempContainer">
                                <p class="temp mx-auto">{{city.temp}}<span>°C</span></p>
                            </div>
                        </div>
                        <div class="durumContainer">
                            <div class="durum">
                                <table>
                                    <tr>
                                        <td>Pressure </td>
                                        <td>: <strong>{{city.pressure}} hpa</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Humidity </td>
                                        <td>: <strong>{{city.humidity}}%</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Wind </td>
                                        <td>: <strong>{{city.wind_speed}} m/s</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Cloudiness </td>
                                        <td>: <strong>{{city.condition}}</strong></td>
                                    </tr>
                                </table>
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
                </transition>
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
        newSearch: "",
      }
    },
    created(){
      let url = "https://api.openweathermap.org/data/2.5/weather?q="+localStorage.getItem("cityName")+"&APPID=65d6a7fd3ce6b78c501c67c41ae3e9b8";
      axios.get(url)
        .then(response=>{
          let data = response.data;
          setTimeout(()=>{
              this.city = {
                  name : data.name,
                  country : data.sys.country,
                  temp : Math.round(data.main.temp - 273.15),
                  condition : data.weather[0].description,
                  pressure : data.main.pressure,
                  humidity : data.main.humidity,
                  wind_speed : data.wind.speed,
                  icon : data.weather[0].icon,
              };
          },1500)
        }).catch(()=> {
        this.$router.push("/error")
      })
    },
      methods : {
        push(){
            localStorage.setItem("cityName",this.newSearch);
            this.city.condition='';
            let url = "https://api.openweathermap.org/data/2.5/weather?q="+localStorage.getItem("cityName")+"&APPID=65d6a7fd3ce6b78c501c67c41ae3e9b8";
            setTimeout(()=>{
                axios.get(url)
                    .then(response=>{
                        let data = response.data;
                        this.city = {
                            name : data.name,
                            country : data.sys.country,
                            temp : Math.round(data.main.temp - 273.15),
                            condition : data.weather[0].description,
                            pressure : data.main.pressure,
                            humidity : data.main.humidity,
                            wind_speed : data.wind.speed,
                            icon : data.weather[0].icon,
                        };
                    }).catch(()=> {
                    this.$router.push("/error")
                })
            },2000)
        }
      }

  }
</script>

<style scoped>
    .fullContainer{
        background:url("../assets/currentWbackImage.jpg") no-repeat center center;
        background-size: cover;
        height: 100vh;
    }
    h2{
        color: #c6c6c6;
        margin-top: 130px!important;
    }
    .spinner-grow{
        width: 50px;
        height: 50px;
        background-color: #44b3fc;
    }
    .loadingDiv{
        height: 400px;
        width: 400px;
        margin: auto;
        padding-top: 130px;
    }
    /*Componentler arası geçiş animasyonu*/
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
  .newSearchInput{
    border:none;
    border-bottom:2px solid #d8ca78;
    background-color: transparent;
    width: 250px;
    text-align: center;
    height: auto;
    outline: none;
    font-weight: 400;
    font-size: 25px;
    margin-top: 175px;
    color: #d8ca78;
  }
  ::placeholder{
      color: #d8ca78;
      font-weight: 400;
      transition: color .3s ease-in-out;
  }
  input:focus::placeholder{
      color:transparent;
  }
  h3{
    font-weight: 400;
    color: #0fd6e5;
  }
  .container{
    width: 700px;
    margin:auto;
    border-radius: 5px;
    background-color: rgba(68, 66, 69, 0.62);
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
    color : #a9afd0;
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
    color : #c5c5c5;
    font-weight: 100;
  }
  .col-12{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin: auto;
  }
  .col-12 p:hover{
    color : #0dc7d4;
    text-decoration:underline;
  }
  .col-12 .linkText{
    font-weight: 600;
    color: #c1aa90;
    transition: color .3s ease-in-out;
    cursor: pointer;
  }
  @media only screen and (min-device-width : 200px)and (max-device-width : 500px){
      .loading{
          margin-top: 130px!important;
      }
      h2{
          font-size: 80px;
          margin-top: 300px!important;
          margin-bottom: 80px!important;
      }
      .spinner-grow{
          width: 175px;
          height: 175px;
      }
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
          font-weight: 400;
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
      .linkText{
          font-size: 37px;
          color:gray!important;
      }
      hr{
          border-top: 1px solid gray;
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
      td{
          font-size: 45px!important;
          padding-left: 10px;
          font-weight: normal;
      }
      strong{
          font-weight: 500;
      }
  }
  @media only screen and (min-device-width : 500px)and (max-device-width : 1200px){
      .loading{
        margin-top: 160px!important;
      }
      .spinner-grow{
        width: 135px;
        height: 135px;
      }
      h2{
        font-size: 60px;
        margin-top: 200px!important;
        margin-bottom: 65px!important;
      }
      .container{
        min-width: 75vw;
        margin-top: 60px;
        border-radius: 20px;
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
      }
      .linkText{
          font-size: 30px;
      }
      hr{
          border-top: 1px solid gray;
      }
      input{
          font-size: 35px!important;
          width: 350px!important;
          height: 70px!important;
          margin-top: 70px;
          margin-bottom: 10px;
          border-bottom:2px solid #d8ca78 !important;
      }
      td{
          font-size: 40px!important;
          padding-left: 10px;
          font-weight: normal;
      }
      strong{
          font-weight: 500;
      }
  }



</style>
