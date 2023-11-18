import axios from 'axios';

const apiUrl = "http://localhost:5168"

axios.interceptors.request.use(function(config){
  console.log(config);
  return config;
  },function(error){
   console.log(error);
  return Promise.reject(error);
})
;

export default {
  getTasks: async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
    console.log('url=',`${process.env.REACT_APP_API_URL}/items`)
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name);
    const result=await axios.post(`${process.env.REACT_APP_API_URL}/addTodo`,{name,isComplete:false});
    return result.data;
  },

  setCompleted:async(id,isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result=await axios.put(`${process.env.REACT_APP_API_URL}/addTodo/${id}?isComplete=${isComplete}`,id,isComplete);
    return result;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result=await axios.delete(`${process.env.REACT_APP_API_URL}/deleteTodo/${id}`,id);
    return result.data;
  }
};
