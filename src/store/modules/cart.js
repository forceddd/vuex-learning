export default {
    //开启命名空间 只针对于除了state的三个属性 因为state本身已经嵌套了
    namespaced: true,

    state: {
        cartList: JSON.parse(localStorage.getItem('cartList')) || []
    },
    getters: {
        totalPrice(state) {
            return state.cartList.reduce((sum, item) => sum + item.count * item.price, 0)
        }
    },
    mutations: {
        addCart(state, product) {
            //git修改测试二

            state.cartList.find(item => {
                if (item.id === product.id) {
                    item.count++;
                }
                return item.id === product.id
            }) ? null : state.cartList.unshift({ ...product, count: 1 })
            localStorage.setItem('cartList', JSON.stringify(state.cartList))
            console.log(state.cartList);
        },

    },
    actions: {
        addCart({ commit }, { product }) {
            //库存为零时 按钮不能再点击 所以此处不用判断product.inventory
            /* 在此处为什么小马哥只传入了id呢 可不可以这样直接把product传入 在mutations中就获取到了product的全部信息 */
            commit('addCart', product)

            //减少库存 从一个模块提交到另一个模块 必须提交到根节点  添加第三个参数{root:true} 在cart中提交到根节点 根节点根据路径找到products
            commit('products/decreseProductsInventory', product.id, { root: true })
        }
    }
}