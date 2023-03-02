<template>
    <div id="stars">
      <div class="flex justify-end">
      <!-- Getting Rated Stars -->
        <div class="rating-image" v-for="index in Math.round(ratingNumber)" :key="index">
          <img class="w-5 h-5" src="../assets/imgs/star.svg" alt="">
      </div>
      <!-- Getting the black stars for rating left -->
      <div class="rating-image" v-for="index in 5 - Math.round(ratingNumber)" :key="index">
           <img class="w-4 h-5" src="../assets/imgs/white-star.svg" alt="">
      </div>
    
    <!-- Number of people Rating the item -->
    </div>
    <div id="count" class="flex justify-end">
        (<span class=" text-yellow-500">{{ratingCount}}</span> <img class="w-3" src="../assets/imgs/person.svg" alt="">)
      </div>
    </div>
    </template>
    
    <script>
    export default {
      props: {
        ratingNumber: {
          type: Number,
          required: true
        },
        ratingCount: {
          type: Number
        }
      }
    }
    </script>
