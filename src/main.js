require("@babel/runtime/regenerator")
require("webpack-hot-middleware/client")
require('./main.css');
alert('Hello World !!!');

var a = async (args) => {
    const {a,b} = args;
    await console.log('Hello from future !!', a, b)
     console.log('Done')
}

a({a:1 , b:2})