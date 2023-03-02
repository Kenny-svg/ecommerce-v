<template>
    <div class="grid grid-cols-2 md:grid-cols-3 bg-yellow-500 mt-5">
        <div class="mt-10 ml-10 font-bold text-2xl">G<span class="text-white">ET</span></div>
        <div class="mt-10">
            <ul class=" md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static  md:w-auto w-full top-14 " >
             
             <router-link   to="/"><li class="md:mx-4 md:my-0 my-6 font-bold"> Home </li></router-link>
             <router-link :to="{name: 'product-category', params: {category: `jewelery`}}"> <li class="md:mx-4 md:my-2  my-6 font-bold ">Jewelery </li></router-link>
             <router-link :to="{name: 'product-category', params: {category: `women's clothing`}}"><li class="md:mx-4 md:my-2  my-6 font-bold "> Women's Clothing </li> </router-link>
             <router-link :to="{name: 'product-category', params: {category: `men's clothing` }}"><li class="md:mx-4 md:my-2  my-6 font-bold "> Men's Clothing </li></router-link>
             <router-link :to="{name: 'product-category', params: {category: 'electronics'}}"><li class="md:mx-4 md:my-2  my-6 font-bold "> Electronics </li></router-link>
         </ul>
        </div>
        <div>
            <div class="flex mt-10">
                <i class="bi bi-github"></i>
                <i class="bi bi-twitter ml-5"></i>
            </div>
        </div>
    </div>
</template>