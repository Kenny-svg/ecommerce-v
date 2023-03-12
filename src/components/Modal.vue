<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal transform transition-all duration-300">
      <h1>{{ header }}</h1> 
      <p>{{ text }}</p>  
      <slot name="form"></slot>
    </div>
    
  </div>
</template>


<script>
export default {
    props: ['header'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.modal {
    width: 30%;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .modal h1 {
    color: rgb(22, 0, 0);
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #333;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .modal {
    width: 80%;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
}
</style>