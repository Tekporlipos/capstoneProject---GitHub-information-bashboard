

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

    async function __getOrg(token,userNmae) {
     const data = await fetch(`https://api.github.com/users/${userNmae}/orgs`, {
       headers: {
         Accept: "application/vnd.github+json",
         Authorization: "Bearer " + token,
       },
     });
     const result = await data.json();
     return result;
    }

    async function __getRep(token,userName) {
      const data = await fetch(
        `https://api.github.com/users/${userName}/repos`,
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
      getOrg(token,userName) {
        return __getOrg(token, userName);
      },
      getRep(token,userName) {
        return __getRep(token, userName);
      },
    };
})();

export default API;