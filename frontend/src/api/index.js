import axios from 'axios'

const SERVE = "http://localhost:3001"
export const  getData=()=>{
  return axios({
    url:SERVE+'/products'
  })
  .then(result=>{
    if(result.data.code==0){
      return result.data.data
    }else{
      throw 'no data'
    }
  })
  .catch(err=>{
    console.log(err)
  })
}

export const  getLogin=(username,pwd)=>{

  return axios({
    method:'post',
    url:SERVE+'/login',
    data:{
      username,
      pwd
    }
  })
  .then(result=>{
    if(result.data.code==0){
      return result
    }else{
      throw '登陆失败'
    }
  })
  .catch(err=>{
    console.log(err)
  })
}
