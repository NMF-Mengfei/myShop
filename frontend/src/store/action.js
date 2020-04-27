import {getData} from '../api'
export default {
  async getProducts({commit}){
    let data = await getData();
    commit('mutationType',{productData:data})
  },
  loginMark({commit},param){
      commit('isLogin',{mark:param.mark})
  }
}
