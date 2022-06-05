
const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"James",
        password:"password"
    },
    {
        username:"Angeline",
        password:"Shrimp"
    },
]

const blogs = [
    {
        title:"Harry Potter The boy who lived",
        body:"Yer a wizard Harry." ,
        UserId:1
    },
    {
        title:"Harry Potter and the Chamber of Secrets",
        body:"It is our choices, Harry, that show what we truly are, far more than our abilities.",
        UserId:1
    },
    {
        title:"Harry Potter and the Goblet of Fire",
        body:"Differences of habit and language are nothing at all if our aims are identical and our hearts are open." ,
        UserId:2
    },
]

const filler = async () => {
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

filler();