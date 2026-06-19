function auth(req,res,next){
console.log("Checking authentication");
next();
}

module.exports = auth;
