<template>
        <div>
            <div class="grid grid-cols-2 gap-8 mt-5 mx-auto w-11/12">
                <div class="flex  justify-center ">
  <figure class="relative max-w-xs cursor-pointer">
    <img class="rounded-lg shadow-xl hover:shadow-2xl  h-[200px] object-cover" src="https://img.freepik.com/free-photo/fashionable-mix-race-girl-trendy-blouse-straw-hat-standing-white-wall-perfect-white-smile-shopping-mood_273443-173.jpg?w=740&t=st=1677622393~exp=1677622993~hmac=1b642f8916f170c1287712bbc913dde92ec9e62156efeb25b281169851e84b71">

      <figcaption class="absolute text-lg -mt-24 mx-auto text-white px-4">
        <div>
          
          <router-link :to="{name: 'product-category', params: {category: `women's clothing`}}">
            <h1 class="font-bold bg-yellow-500/80 rounded-md text-sm md:text-md p-2 md:p-2  w-24 text-center hover:bg-black/80">Shop Now!</h1>
          </router-link>

      </div>
      <div>
        <h1 class="text-xl text-black ">Women's wear</h1>
      </div>
      </figcaption>
  </figure>
</div>
<div class="flex  justify-center ">
  <figure class="relative max-w-xs cursor-pointer">
    <img class="rounded-lg shadow-xl hover:shadow-2xl w-[300px] h-[200px] object-cover" src="https://img.freepik.com/free-vector/jewelry-accessories-realistic-set-with-rings-earrings-black-background_1284-27174.jpg?w=740&t=st=1677621224~exp=1677621824~hmac=bbe322f9be769e85fbfb92b79355d5b1290c41dc332965fbfe5fd790c963e8f0https://img.freepik.com/free-vector/jewelry-accessories-realistic-set-with-rings-earrings-black-background_1284-27174.jpg?w=740&t=st=1677621224~exp=1677621824~hmac=bbe322f9be769e85fbfb92b79355d5b1290c41dc332965fbfe5fd790c963e8f0">

      <figcaption class="absolute text-lg  -mt-24  text-white px-4">
        <div>

          <router-link :to="{name: 'product-category', params: {category: `jewelery`}}">
            <h1 class="font-bold bg-yellow-500/80 rounded-md text-sm md:text-md p-2 md:p-2  w-24 text-center hover:bg-black/80">Shop Now!</h1>
          </router-link>
      </div>
      <div>
        <h1 class="text-xl text-white">Jewelery</h1>
      </div>
      </figcaption>
  </figure>
</div>
            </div>
            <div class="grid grid-cols-2 gap-8 mt-5 mx-auto w-11/12">
                <div class="flex  justify-center    ">
  <figure class="relative max-w-xs cursor-pointer">
    <img class="rounded-lg shadow-xl hover:shadow-2xl w-[300px] h-[200px] object-cover" src="https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?w=826&t=st=1677621362~exp=1677621962~hmac=785719e736f1ad632f9a96e6c0f94dbacef96458fa7c331120b36e256575d516">

      <figcaption class="absolute text-lg  -mt-24  text-white px-4">
        <div>
          <router-link :to="{name: 'product-category', params: {category: `electronics`}}">
            <h1 class="font-bold bg-yellow-500/80 rounded-md text-sm md:text-md p-2 md:p-2  w-24 text-center hover:bg-black/80">Shop Now!</h1>
          </router-link>
      </div>
      <div>
        <h1 class="text-xl black">Electronics</h1>
      </div>
      </figcaption>
  </figure>
</div>
<div class="flex  justify-center ">
  <figure class="relative max-w-xs cursor-pointer">
    <img class="rounded-lg shadow-xl hover:shadow-2xl  h-[200px] object-cover" src="https://img.freepik.com/free-photo/sideways-portrait-intelligent-male-researcher-scientist-wears-cap-red-shirt-formal-jacket_273609-8686.jpg?w=740&t=st=1677621682~exp=1677622282~hmac=6c4a958c9ae8d20c8b658de64ab316bd2e39e69554c181207d5071301443582b">

      <figcaption class="absolute text-lg  -mt-24  text-white px-4">
        <div>
          <router-link :to="{name: 'product-category', params: {category: `men's clothing`}}">
            <h1 class="font-bold bg-yellow-500/80 rounded-md text-sm md:text-md p-2 md:p-2  w-24 text-center hover:bg-black/80">Shop Now!</h1>
          </router-link>
      </div>
      <div>
        <h1 class="text-xl">Men's wear</h1>
      </div>
      </figcaption>
  </figure>
</div>
            </div>
            
            
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>