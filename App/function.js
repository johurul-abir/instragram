
/**
 * set data from post form
 */

 const setData = (key, value) => {
   return localStorage.setItem(key, JSON.stringify(value));

 };


 /**
  * get data form ls
  */

 const getData = (key) => {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key))
        
    }
    return [];
 };
