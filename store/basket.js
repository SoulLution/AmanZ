export const state = () => ({
  data: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket")) || []
    : [],
})

export const mutations = {
  addProduct(state, product) {
    let products = localStorage.getItem("basket")
        ? JSON.parse(localStorage.getItem("basket")) || []
        : [],
      find = false
    products.forEach((x) => {
      if (x.id == product.id) {
        x.current = product.current
        find = true
      }
    })
    if (!find) products.push(product)
    state.data = products
    localStorage.setItem("basket", JSON.stringify(products))
  },
  removeProduct(state, id) {
    state.data.splice(
      state.data.findIndex((x) => x.id == id),
      1
    )
    localStorage.setItem("basket", JSON.stringify(state.data))
  },
}
