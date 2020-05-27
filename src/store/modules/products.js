import axios from 'axios'
export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {

    },
    mutations: {
        getProducts(state, products) {
            state.products = products
        },
        decreseProductsInventory(state, id) {
            state.products.find(product => {
                if (product.id === id && product.inventory > 0) {
                    product.inventory--;
                }
            })
        }
    },
    actions: {
        async getProducts({ commit }) {
            try {
                const res = await axios.get('/api/products');
                commit('getProducts', res.data.data);
            } catch (err) {
                console.log(err);

            }
        }
    }
}