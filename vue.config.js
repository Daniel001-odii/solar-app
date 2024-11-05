module.exports = {
    devServer: {
      proxy: {
        '/toggle': {
          target: 'http://192.168.4.22',
          changeOrigin: true
        }
      }
    }
  };