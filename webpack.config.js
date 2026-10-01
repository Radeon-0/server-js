const path = require('path');

module.exports = {
    devServer:{
        hot:true,
        static:{
            directory:'./dist',
            watch:true
        }
    }
}