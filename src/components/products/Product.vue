<template>
  <!-- Error Checker -->
  <template v-if="state.error">
    <ErrorBox :errorMessage="errorMessage"/>
  </template>
  
  <!-- Random Image Generator -->
  <div class="random-image">
    <h1> Welcome to Our Store !</h1>
  </div>
  
  <!-- Category -->
  <div id="product-grid" >
      <div v-for="( product,index) in products" :key="index" class="product">
        <router-link :to="{ name: 'product', params: { id: product.id,}}">
  
          <div class="flex-rating">
              <h4 class="rating-rate">{{product.rating.rate}}</h4>
              <StarRating :ratingNumber="product.rating.rate" :ratingCount="product.rating.count" class="home-rating"/>
          </div>
          <img :src="product.image" alt="" class="product-image">
          <h4 class="title">{{product.title.substr(0, 40)}} <span v-if="product.title.length > 39">...</span></h4>
          <div class="flex-price">
              <h4 class="price">${{product.price}}</h4>
              <h4 class="category">{{product.category}}</h4>
          </div>
        </router-link>
    </div>
    </div>
    <button @click="decreaseLimit()" id="load-more" v-if="limitReached">Load Less</button>
    <button @click="increaseLimit()" id="load-less" v-else>Load More</button>
  </template>
  
<script setup>
import { ref, computed } from '@vue/reactivity';
import { onMounted, onUnmounted,} from 'vue';
// import {useProductStore} from '../../stores/ProductStore'
import { state} from '../../compossables/state'

const errorMessage = ref(['item added to box'])
const products = ref({})
const limit = ref(12)
const limitReached = ref(false)

async function getAllProducts () {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit.value}`)
    const data = await response.json()
    products.value = data
    state.error = false
    return products.value
  } catch (err) {
    errorMessage.value = 'We can\'t find any item'
    state.error = true
  }
}

const increaseLimit = () => {
  limit.value += 4
  getAllProducts()
  setTimeout(() => {
    if (limit.value >= 20) {
      limitReached.value = true
    }
  }, 1000)
}
const decreaseLimit = () => {
  limit.value -= 12
  limitReached.value = false
  getAllProducts()
}

onMounted(() => {
  getAllProducts()
})
</script>