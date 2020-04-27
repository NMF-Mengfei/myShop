export default {
  mutationType(state,payload){
    state.productData=payload.productData
  },
  isLogin(state,payload){
    state.isLogin=payload.mark
  }
}
