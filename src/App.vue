<template>
  <div>
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
  import Header from "./components/Header"
  export default {
    components : {
      appHeader : Header
    },
  }
</script>
<style>

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
  @media only screen and (min-device-width : 200px)and (max-device-width : 1200px){
    body{
      background-color: #F2F7F9;
    }
  }

</style>
