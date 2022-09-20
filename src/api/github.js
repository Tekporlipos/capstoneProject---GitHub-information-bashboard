

const API =  (function() {
    const github = "https://api.github.com/users/"

    async function __auth(code) {
      const data = await fetch(`https://github-auth-node.herokuapp.com/api/v1/auth/?clientSecret=ebb8333c474ef8431195505fd05e0911ffff5118&clientID=6ff44d9eaede1e4fe33d&code=${code}`);
      const result = await data.json();
      return result;
    }



    async function __getInfo(token) {
     const data = await fetch("https://api.github.com/user", {
       headers: {
         Accept: "application/vnd.github+json",
         Authorization: "Bearer " + token,
       },
     });
     const result = await data.json();
     return result;
    }

    async function __getOrg(token,name,page) {
      const data = await fetch(
        `https://api.github.com/user/orgs?per_page=9&page=${page}`,
        {
       headers: {
         Accept: "application/vnd.github+json",
         Authorization: "Bearer " + token,
       },
     });
     const result = await data.json();
     return result;
  }
  
  async function __getData(token,path) {
      const data = await fetch(
        // `https://api.github.com/users/${name}/orgs`
        path,
        {
       headers: {
         Accept: "application/vnd.github+json",
         Authorization: "Bearer " + token,
       },
     });
     const result = await data.json();
     return result;
    }

    async function __getRep(token,userName,page) {
      const data = await fetch(
        `https://api.github.com/users/${userName}/repos?per_page=6&page=${page}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: "Bearer " + token,
          },
        }
      );  
      const result = await data.json();
      return result;
    }

    async function __getContr(token,username,repos) {
      const data = await fetch(`https://api.github.com/repos/${username}/${repos}/contributors`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer " + token,
        },
      });
      const result = await data.json();
      return result;
    }


    async function __getBraches(token,ower,rep) {
      const data = await fetch(`https://api.github.com/repos/${ower}/${rep}/branches`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer " + token,
        },
      });
      const result = await data.json();
      return result;
    }


    async function __getLanguages(token,ower,rep) {
      const data = await fetch(`https://api.github.com/repos/${ower}/${rep}/languages`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer " + token,
        },
      });
      const result = await data.json();
      return result;
    }

    async function __getPull(token,owner,rep,state) {
      const data = await fetch(`https://api.github.com/repos/${owner}/${rep}/pulls?state=${state}&per_page=100`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: "Bearer " + token,
        },
      });
      const result = await data.json();
      return result;
    }


    // async function __getRep(token) {
    //   const data = await fetch("https://api.github.com/user", {
    //     headers: {
    //       Accept: "application/vnd.github+json",
    //       Authorization: "Bearer " + token,
    //     },
    //   });
    //   const result = await data.json();
    //   return result;
    // }

    // async function __getRep(token) {
    //   const data = await fetch("https://api.github.com/user", {
    //     headers: {
    //       Accept: "application/vnd.github+json",
    //       Authorization: "Bearer " + token,
    //     },
    //   });
    //   const result = await data.json();
    //   return result;
    // }

    // async function __getRep(token) {
    //   const data = await fetch("https://api.github.com/user", {
    //     headers: {
    //       Accept: "application/vnd.github+json",
    //       Authorization: "Bearer " + token,
    //     },
    //   });
    //   const result = await data.json();
    //   return result;
    // }

    // async function __getRep(token) {
    //   const data = await fetch("https://api.github.com/user", {
    //     headers: {
    //       Accept: "application/vnd.github+json",
    //       Authorization: "Bearer " + token,
    //     },
    //   });
    //   const result = await data.json();
    //   return result;
    // }


    return {
      auth(code) {
        return __auth(code);
      },
      getInfo(token) {
        return __getInfo(token);
      },
      getOrg(token,userName,page) {
        return __getOrg(token, userName,page);
      },
      getRep(token,userName,page) {
        return __getRep(token, userName,page);
      },
      getData(token,page) {
        return __getData(token,page);
      },
      getContr(token,name,rep) {
        return __getContr(token,name,rep);
      },
      getBranch(token,ower,rep) {
        return __getBraches(token,ower,rep);
      },
      getLanguages(token,ower,rep) {
        return __getLanguages(token,ower,rep);
      },
       getPull(token,ower,rep,state) {
        return __getPull(token,ower,rep,state);
      },
       
    };
})();

export default API;