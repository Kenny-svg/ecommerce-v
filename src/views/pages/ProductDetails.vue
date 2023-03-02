<template>
    <template v-if="state.error">
      <ErrorBox :errorMessage="errorMessage"/>
    </template>
    <div v-if="state.loading">
        Loading...
      </div>
    <div class="mt-20 border-yellow-500 border-2 h-auto w-10/12 mx-auto rounded-lg" v-if="fetchComplete">
        <div class=" p-5 grid grid-cols-1 md:grid-cols-2 ">
          <div class=" mx-auto w-2/4 h-auto flex justify-center items-center">
            <img class=" mx-auto w-3/4 h-auto" :src="product.image" alt="" >
          </div>
          <div class="p-4">
            <h4 class="font-bold">{{product.category}}</h4>
                <StarRating :ratingNumber="product.rating.rate" :ratingCount="product.rating.count" class="rating-product"/>
                <h4 class="mt-20 font-bold md:mb-0 mb-5 text-2xl">{{product.title}}</h4>
                <h4 class="text-center bg-yellow-400/30 text-2xl text-yellow-500 font-bold w-32 mb-4 mx-auto rounded-md">${{product.price}}</h4>
                <p class="text-sm tracking-wide text-center">{{product.description}}</p>
                <div class="flex justify-center">
                <button class="text-white text-sm font-bold mt-5 rounded-md p-2 text-center bg-yellow-500" @click="addToCart()"> Add To Cart </button>
              </div>
          </div>


      </div>
    </div>
    <Footer />
    </template>
    
    <script setup>
    import {state } from '../../compossables/state'
    import ErrorBox from '../../components/ErrorBox.vue'
    import StarRating from '../../components/StarRating.vue'
    import { ref, onMounted,  } from 'vue'
    import Footer from '../../components/Footer.vue'
    
    // Declaring Props
    const props = defineProps(['id'])
    
    // Declaring Variables
    ref(localStorage.setItem('productID', props.id))
    const productID = ref(parseInt(localStorage.getItem('productID')))
    const cartItemsID = ref(JSON.parse(localStorage.getItem('cartItemsID')))
    const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')))
    const product = ref([])
    const errorMessage = ref(null)
    const fetchComplete = ref(false)
    
    // Methods To Get ITEM
    const getSingleProduct = async () => {
      state.loading = true
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productID.value}`)
        const data = await response.json()
        product.value = data
        fetchComplete.value = true
        state.loading = false
        return product.value
      } catch {
        state.error = true
        errorMessage.value = 'Oops!, We are unable to load item'
      }
    }
    
    function addToCart () {
      const newCartItem = ref({
        productImage: product.value.image,
        productTitle: product.value.title,
        productRating: product.value.rating.rate,
        productID: product.value.productID,
        productPrice: product.value.price,
        productQuantity: 1
      })
      // Check if items Array == null;
      if (cartItems.value === null || cartItemsID.value === null) {
        // if items Array is null equate items array to product id && equate cartItems to newcartItems
        cartItems.value = [newCartItem.value]
        cartItemsID.value = [productID.value]
        // store Items Array && cartItems in local storage
        localStorage.setItem('cartItemsID', JSON.stringify(cartItemsID.value))
        localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
        state.getItemsInCart()
    
        state.error = false
      } else {
        // Step One Check If product Id is in items array
        if ([productID.value].every(id => cartItemsID.value.includes(id)) === true) {
          // if true : do nothing
          errorMessage.value = 'Item Already Added to Cart'
          state.error = true
          return errorMessage.value
        } else {
          // add product ID to items Array && add newCart Items to cartItems
          cartItemsID.value = [...cartItemsID.value, productID.value]
          cartItems.value = [...cartItems.value, newCartItem.value]
          // store Items Array && cartItems in local storage
          localStorage.setItem('cartItemsID', JSON.stringify(cartItemsID.value))
          localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
          state.getItemsInCart()
        }
      }
    }
    
    // Life Cycle Hooks
    onMounted(() => {
      getSingleProduct()
    })
    </script>
    