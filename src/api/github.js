const API =  (function() {
    const github = "https://api.github.com/users/"
   async function __getInfo(username) {
     const data = await fetch(github+username);
     const result = data.json();
     return result;
    }
    
    return{
        getInfo(username){
            return __getInfo(username)
        }
    }
})();

export default API;