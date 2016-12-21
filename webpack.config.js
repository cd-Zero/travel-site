module.exports = {
    entry     : './app/assets/scripts/App.js',
    output    :{
    path      :'./app/temp/scripts',
    filename  : 'App.js'
  },

  module:{
    loader:[
      {
        loader:'babel',
        query:{
          preset:['es2015']
        },

        test: /\.js$/,

        exclude: /node_modules/
      }
    ]
  }
}
