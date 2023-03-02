import {defineStore} from 'pinia'

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        categories: [],
        loading: false,
        error: null,
    }),
    getters: {
        categoryTotal: (state) => {
            return state.categories.length
        }
    },
    actions: {
        async getCategories() {
            this.loading = true

            //fetch the categories from fake store api
            try{
                const res = await fetch('https://fakestoreapi.com/products/categories')
                const data = await res.json()
                if(!res.ok){
                    throw Error('could not fetch the categories from the store')
                }
                this.categories = data
                this.loading = false
            }
            catch{
                this.error = err.message
                console.log(this.error)
            }
        },
        deleteCategory(id) {
            
            this.categories = this.categories.filter(p => {
                return p.id !== id
            })
                fetch(`https://fakestoreapi.com/products/categories${id}`,{
                    method:"DELETE"
                })
                    .then(res=>res.json())
                    .then(json=>console.log(json))
                    // .then(()=>  this.getcategories())
        }
    },
    persist: {
        storage: localStorage,
      },

})