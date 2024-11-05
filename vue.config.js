module.exports = {
    devServer: {
        // proxy: "http://192.168.4.22",
      proxy: {
        '/toggle': {
          target: 'http://192.168.4.22',
          changeOrigin: true
        }
      }
    }
  };