import {defineStore} from 'pinia'

export const useProducttStore = defineStore('producttStore', {
    state: () => ({
        product: [],
        loading: false,
        error: null,
    }),
    getters: {
        productTotal: (state) => {
            return state.product.length
        }
    },
    actions: {
        async getProduct(id) {
            this.loading = true

            //fetch the products from fake store api
            try{
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await res.json()
                if(!res.ok){
                    throw Error('could not fetch the products from the store')
                }
                this.product = data
                this.loading = false
            }
            catch{
                this.error = err.message
                console.log(this.error)
            }
        },
        deleteProduct(id) {
            
            this.product = this.product.filter(p => {
                return p.id !== id
            })
                fetch(`https://fakestoreapi.com/products/${id}`,{
                    method:"DELETE"
                })
                    .then(res=>res.json())
                    .then(json=>console.log(json))
                    // .then(()=>  this.getProducts())
        }
    },
    persist: {
        storage: localStorage,
      },

})