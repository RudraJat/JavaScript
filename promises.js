const github_api="https://api.github.com/users/RudraJat";
const user =fetch(github_api);
console.log(user);
user.then(function(data){
    console.log(data);
})