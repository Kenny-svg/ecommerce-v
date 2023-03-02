import { reactive, watch } from 'vue'
const body = document.body
// if (localStorage.setItem('cartItemsID', []) === false) {
//   localStorage.getItem('cartItemsID', [])
// }
const state = reactive({
  loading: false,
  error: false,
  showCart: true,
  itemsInCart: 0,
  itemsArray: [],
  getItemsInCart () {
    const addedItems = JSON.parse(localStorage.getItem('cartItemsID'))
    const check = Boolean(addedItems)
    if (check) {
      this.itemsInCart = addedItems.length  
    } else {
      this.itemsInCart = 0
    }
    return this.itemsInCart
  },
  changed () {
    if (this.error) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'visible'
    }
  }
})
state.getItemsInCart()
export { state }
