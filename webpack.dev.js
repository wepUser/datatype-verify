/**
 * Created by admin on 2018-12-16.
 */
const merge=require('webpack-merge');
const common=require('./webpack.common');

module.exports=merge(common,{
    devtool:'eval-source-map',
    mode:'development',
    devServer:{
        contentBase:'dist',
        port:8880
    }
});