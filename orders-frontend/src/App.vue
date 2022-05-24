<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="w3-black"> 
      <div class="w3-bar">
        <div class="wrapper">
          <RouterLink to="/" class="w3-left brand text-white">
            <img src="@/assets/delivery.png" alt="Logo"> 
            Delivery App
            
          </RouterLink>
          <div class="w3-right">
            <RouterLink to="/" class="w3-button w3-bar-item w3-hover-blue text-white">Home</RouterLink>
            <RouterLink to="/about" class="w3-button w3-bar-item w3-hover-blue text-white">About</RouterLink>
            <RouterLink to="/orders" class="w3-button w3-bar-item w3-hover-blue text-white">Orders</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper bg-dark">
    <RouterView />
  </div>
  </header>

  
</template>

<style>
.wrapper {
  width: 960px;
  margin: 0 auto;
}
.brand {
  text-decoration: none;
  font-weight: 600;
}
.brand > img {
  height: 40px;
  width: 40px;
  padding: 3px;
}
</style>
