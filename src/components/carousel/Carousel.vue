<template>
	<div class="relative w-full">
		<swiper
			class="w-full h-100"
			loop
			:images-per-view="1"
			:space-between="50"
			navigation
			:pagination="{ clickable: true }"
       :autoplay="{
         delay: 5000,
         disableOnInteraction: false,
       }"
		>
			<swiper-slide v-for="image in images" :key="image">
        <div class="">
          <img  :src="image.src" class="object-cover bg-black/100 ">
          <p class="-mt-40 md:-mt-60 font-bold ml-10 absolute text-5xl">{{ image.caption }}</p>
        </div>
			</swiper-slide>
		</swiper>
		<Icon name="ic:round-favorite" size="35px" class="absolute top-4 text-white right-4 z-10 cursor-pointer drop-shadow" />
	</div>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
  
    SwiperCore.use([Navigation, Pagination, Autoplay])
  
    export default {

      components: {
        Swiper,
        SwiperSlide,
      },

      setup() {

        const images = [
        {
            src: 'https://img.freepik.com/premium-photo/small-shopping-cart-with-paper-bags-yellow-space-space-text_185193-1485.jpg?w=740',
            caption: 'Top wears'
        },
        {
            src: 'https://img.freepik.com/premium-photo/smiling-african-american-girl-posing-isolated-yellow-orange-background-people-lifestyle-concept-mock-up-copy-space-holding-package-bag-with-purchases-after-shopping-pointing-index-finger-aside_365776-31413.jpg?w=740',
            caption: '80% off today'
        },
        {
            src: 'https://img.freepik.com/premium-photo/kids-fashion-sales-discounts-happy-small-girl-running-after-successful-shopping-energetic-child-jump-with-heavy-bags-holiday-gifts-packages-cyber-monday-hurry-up-its-total-sale_474717-2586.jpg',
            caption: 'Grab one today!'
        },
        {
            src: 'https://img.freepik.com/free-photo/handsome-asian-blond-guy-posing_1258-23366.jpg?w=740&t=st=1677619112~exp=1677619712~hmac=26dde6d0d127c8117fb86918414d48964e02282a2cb909bd54535f149693baba',
            caption: 'Black Friyay!'
        },
        
        ]
        
        return {images};
      },
        


    };
  </script>
  
<style scoped>
body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>