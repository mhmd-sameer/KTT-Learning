function authorizeRoles(...roles){
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(401).send("Access Denied");
        }
        next();
    }
}

module.exports = authorizeRoles;