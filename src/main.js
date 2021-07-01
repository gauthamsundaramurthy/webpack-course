require("./app")

var a = async (args) => {
    const {a,b} = args;
    await console.log('Hello from future !!', a, b)
     console.log('Done')
}

a({a:1 , b:2})

console.log(`Environment is ${process.env.NODE_ENV}`)