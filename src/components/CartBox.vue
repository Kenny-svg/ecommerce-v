<template>
    <template v-if="state.error">
      <ErrorBox :errorMessage = "errorMessage"/>
    </template>
    
    <!-- Cart is Empty -->
    <div class=" mt-20 border-yellow-500 border-2 h-auto w-10/12 mx-auto rounded-lg"  v-if="cartIsEmpty">
      <h1 class="text-center text-3xl font-bold mt-5">Cart is Empty</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-500 md:w-80 w-40 h-40 md:h-80 animate__animated animate__bounce text-center mx-auto">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>

     <div class="text-center text-white font-bold bg-yellow-500" id="shop-link"> <router-link to="/">Go To Shop</router-link> </div>
    </div>
    
    <div class="mt-[100px] h-auto  w-10/12  md:w-5/12 mx-auto " id="cart-box">
      <div v-for="(product, index) in cartItems" :key="index" class="border-yellow-500 rounded-lg mt-2 p-2 border-2 grid grid-cols-2 md:gap-0 gap-8">
      <div class="mx-2 md:w-2/4 h-auto flex justify-center items-center" id="product-info">
        <img class=" w-full md:w-3/4 h-auto" :src="product.productImage" :alt="product.title" id="product-image">
      </div>
      <div class=""  id="product-details">
        <div>
          <h1 class="mb-2 font-bold" id="title">{{product.productTitle}}</h1>
        <h2 class="font-bold text-2xl mb-2" id="price"><span class="bg-gray-300 p-1 rounded-sm  mr-2 text-sm font-normal">Price </span>${{product.productPrice}}</h2>
        <button class="bg-gray-300 pl-2 pr-2 font-bold" @click="product.productQuantity > 0 ? --product.productQuantity : product.productQuantity = 0"> - </button><span class="text-2xl bg-yellow-500 text-white font-bold pl-2 pr-2" id="quantity">{{product.productQuantity}}</span><button  class="bg-gray-300 pl-2 pr-2 font-bold mb-2" @click="product.productQuantity < 50 ? product.productQuantity++ : state.error = true"> + </button>
        <h2 class="font-bold text-2xl mb-2" id="total"><span class="bg-gray-300 p-1 rounded-sm  mr-2 text-sm font-normal">Total </span>${{(product.productPrice * product.productQuantity).toFixed(2)}}</h2>
      </div>
        <div>
        

          <svg @click.prevent="deleteItem(index)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer text-yellow-500 mt-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
    </div>



      </div>
      </div>
    </div>
    </template>
    
    <script setup>
    import { ref, watch, onMounted } from 'vue'
    import { state } from '../compossables/state';
    import ErrorBox from './ErrorBox.vue';
    import 'animate.css';
    
    // Declaring important variables
    const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')))
    const cartItemsID = ref(JSON.parse(localStorage.getItem('cartItemsID')))
    const errorMessage = ref('Out of Stock')
    const cartIsEmpty = ref(false)
    
    // Watching for State Changes in the Cart Items Content
    watch(cartItems, (updated, previous) => {
      cartItems.value = updated
    },
    { deep: true }
    )
    
    // Function for Deleted item
    function deleteItem (value) {
      const removedCartItems = cartItems.value.splice(value, 1)
      const removedCartItemsID = cartItemsID.value.splice(value, 1)
    
      // Get Remaining Items in the Cart
      const filterCart = cartItems.value.filter(item => item !== removedCartItems)
      const filterCartID = cartItemsID.value.filter(item => item !== removedCartItemsID)
    
      // Saving Filtered Item to LocalStorage
      localStorage.setItem('cartItemsID', JSON.stringify(filterCartID))
      localStorage.setItem('cartItems', JSON.stringify(filterCart))
      state.getItemsInCart()
    
      // Redirecting Users to Home id Cart is Empty
      if (cartItemsID.value.length === 0) {
        cartIsEmpty.value = true
        state.getItemsInCart()
      }
      if (cartIsEmpty.value === true) {
        state.getItemsInCart()
      }
    }
    onMounted(() => {
      console.log(cartItemsID.value)
      if (cartItemsID.value === null) {
        cartIsEmpty.value = true
        state.getItemsInCart()
      }
    })
    </script>
    