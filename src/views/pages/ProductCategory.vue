<template>
    <div class=" mt-20">
      <h1 class="mt-5 text-center mb-20 text-3xl font-bold"> {{route.params.category.toUpperCase()}}</h1>
      <div v-if="state.loading">
        Loading...
      </div>
    </div>
      <div class="grid md:grid-cols-4 w-11/12 mx-auto gap-8 mt-10" id="product-grid" >
        <div data-aos="zoom-in" v-for="( product,index) in products" :key="index" class="border-2 p-5 rounded-lg shadow-lg border-b-yellow-500">
          <router-link :to="{ name: 'product', params: { id: product.id}}">
            <div class="grid grid-cols-2">
                <h4 class="rating-rate">{{product.rating.rate}}</h4>
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
      <Footer />
    </template>
    
    <script setup>
    import StarRating from '../../components/StarRating.vue';
    import { useRoute } from 'vue-router'
    import { ref, defineProps, onMounted, watch } from 'vue'
    import { state } from '../../compossables/state';
    import Footer from '../../components/Footer.vue';
    
    // Defining Ref Attributes
    const products = ref({})
    const route = useRoute()
    const randomImage = ref('https://api.lorem.space/image/fashion?')
    // Defining props
    const props = defineProps({
      category: {
        type: String,
        default: 'No'
      }
    })
    
    // watching Params Changes
    watch(route, (newRoute, oldROute) => {
      getProductCategory(newRoute.params.category)
      randomImage.value = 'https://api.lorem.space/image/fashion?w=200&h=150'
    })
    // Methods to get Products By Category
    async function getProductCategory (category) {
      state.loading = true
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
      const data = await response.json()
      products.value = data
      state.loading = false
      return products.value
    }
    
    onMounted(() => {
      getProductCategory(route.params.category)
    })
    </script>
    