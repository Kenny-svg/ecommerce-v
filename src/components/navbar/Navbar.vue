<template>
  <header>
    <nav class="fixed w-full top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90">
      <div class="max-w-8xl px-4">
        <div class="flex items-center justify-between h-16">
          <span class="text-2xl text-gray-900 font-semibold"><span>

            <button  @click="router.push('/cart')" class="bg-yellow-500 text-white text-lg rounded-sm p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
<p class="absolute text-black -mt-9 font-bold ml-2 text-lg" v-if="state.itemsInCart > 0">{{state.itemsInCart}}</p>
</button>
          </span> G<span class="text-yellow-500">ET</span></span>
          <span @click="menuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
          </span>

          <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute md:w-auto w-full top-14 duration-700 ease-in z-50 text-uppercase md:bg-transparent md:shadow-transparent shadow-2xl bg-white/90" :class="[open ? 'left-0' : 'left-[-100%]']">
             
              <router-link   to="/"><li class="md:mx-4 md:my-0 my-6 font-bold"> Home </li></router-link>
              <router-link :to="{name: 'product-category', params: {category: `jewelery`}}"> <li class="md:mx-4 md:my-0 my-6 font-bold">Jewelery </li></router-link>
              <router-link :to="{name: 'product-category', params: {category: `women's clothing`}}"><li class="md:mx-4 md:my-0 my-6 font-bold"> Women's Clothing </li> </router-link>
              <router-link :to="{name: 'product-category', params: {category: `men's clothing` }}"><li class="md:mx-4 md:my-0 my-6 font-bold"> Men's Clothing </li></router-link>
              <router-link :to="{name: 'product-category', params: {category: 'electronics'}}"><li class="md:mx-4 md:my-0 my-6 font-bold"> Electronics </li></router-link>
          </ul>

        </div>
        
      </div>
      <div v-if="show">
              <div v-for="category in categoryStore.categories" :key="category.id" class="text-black absolute bg-white shadow-xl w-[300px] flex items-center ml-4 md:ml-[176px] h-auto border-t-2 duration-150 transition">
                <ul class="p-5 ">
                  <li>{{ categoryStore.categories[0] }}</li>
                  <li  class="mt-3" >{{ categoryStore.categories[1] }}</li>
                  <li  class="mt-3">{{ categoryStore.categories[2] }}</li>
                  <li  class="mt-3">{{ categoryStore.categories[3] }}</li>
                </ul>
              </div>
            </div>
</nav>
  </header>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import {useCategoryStore} from '../../stores/CategoryStore'
import { useRouter } from 'vue-router'
import { state } from "../../compossables/state";

const categoryStore = useCategoryStore();
categoryStore.getCategories()

const router = useRouter()
const show = ref(false)
function showCategory() {
  show.value = !show.value
  open.value = false
}
let open = ref(false)
 


function menuOpen() {
  open.value = !open.value
  show.value = false
}
</script>

<style lang="scss" scoped>

</style>