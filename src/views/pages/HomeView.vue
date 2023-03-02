<template>
    <div class="mt-[65px] grid md:grid-cols-2 grid-cols-1 gap-2">
        <div class=" p-5">
            <Carousel />          
        </div>
        <Cards />


    </div>
    <div class="mt-10  w-11/12 mx-auto bg-yellow-500 p-2 rounded-t-lg">
      <h1 class="ml-5 font-bold text-white ">Our products</h1>
    </div>
  <!-- Error Checker -->
  <template v-if="state.error">
    <ErrorBox :errorMessage="errorMessage"/>
  </template>
  <div v-else></div>
  <div v-if="state.loading">
    <div class="grid md:grid-cols-4 w-11/12 mx-auto gap-8 mt-10">
  <div class="w-full h-10 bg-gray-300 rounded-lg mr-4 animate-pulse">
  </div>
  <div class="w-full h-10 bg-gray-300 rounded-lg mr-4 animate-pulse"></div>
  <div class="w-full h-10 bg-gray-300 rounded-lg animate-pulse"></div>
  <div class="w-full h-10 bg-gray-300 rounded-lg animate-pulse"></div>
</div>
  </div>
  <!-- Category -->
  <div v-else class="grid md:grid-cols-4 w-11/12 mx-auto gap-8 mt-10" >
      <div data-aos="zoom-in" class="border-2 p-5 rounded-lg shadow-lg border-b-yellow-500" v-for="( product,index) in products" :key="index">
        <router-link :to="{ name: 'product', params: { id: product.id,}}">
  
          <div class="grid grid-cols-2">
              <h4 class="text-yellow">{{product.rating.rate}}</h4>
              <StarRating :ratingNumber="product.rating.rate" :ratingCount="product.rating.count" class="home-rating"/>
          </div>
          <img :src="product.image" alt="" class=" h-[150px] mx-auto">
          <h4 class="mt-5 mb-5">{{product.title.substr(0, 40)}} <span v-if="product.title.length > 39">...</span></h4>
          <div class="flex justify-between">
              <h4 class="font-bold">${{product.price}}</h4>
              <h4 class="category">{{product.category}}</h4>
          </div>
        </router-link>
    </div>
    </div>
    <div class="">
        <button class="border-2 bg-yellow-500 text-white mt-3 mb-3 p-2 rounded-md" @click="decreaseLimit()" id="load-more" v-if="limitReached">Load Less</button>
        <button class="border-2 bg-yellow-500 text-white mt-3 mb-3 p-2 rounded-md " @click="increaseLimit()" id="load-less" v-else>Load More</button>
    </div>
  
   
    <Footer />
</template>

<script setup>
import Carousel from '../../components/carousel/Carousel.vue';
import Cards from '../../components/navbar/Cards.vue';
import { ref, computed } from '@vue/reactivity'
import ErrorBoxVue from '../../components/ErrorBox.vue';
import StarRating from '../../components/StarRating.vue';
import { onMounted, onUnmounted,} from 'vue';
// import {useProductStore} from '../../stores/ProductStore'
import { state} from '../../compossables/state'
import Footer from '../../components/Footer.vue';

const errorMessage = ref(['item added to box'])
const products = ref({})
const limit = ref(12)
const limitReached = ref(false)

async function getAllProducts () {
    state.loading = true
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit.value}`)
    const data = await response.json()
    products.value = data
    state.error = false
    state.loading = false
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

<style scoped>
  @keyframes pulse {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  .animate-pulse {
    animation: pulse 1s ease-in-out infinite;
  }
  @keyframes wipe {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
  
  .animate-wipe {
    animation: wipe 1s ease-in-out infinite;
  }
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    opacity: 0.5;
  }
</style>


