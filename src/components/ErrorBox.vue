<template>
    <div id="error" class="mt-20 flex justify-center text-center cursor-pointer mx-auto bg-yellow-500 w-4/12 rounded-lg text-white">
      <h2 @click="closeBox()" id="close-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 cursor-pointerx">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
</svg>
</h2>
     <p> {{props.errorMessage}} </p>
    </div>
    <div  id="resolve-error">
    </div>
  </template>
  
  <script setup>
  import { state } from '../compossables/state';
  import { defineProps } from 'vue'
  const props = defineProps({
    errorMessage: {
      type: String,
      default: 'No'
    }
  })
  
  function closeBox () {
    state.error = false
    return state.error
  }
  </script>
  