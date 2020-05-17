const { 
    addWebpackAlias, 
    addLessLoader, 
    fixBabelImports, 
    override, 
    addDecoratorsLegacy 
  } = require('customize-cra')
  const path = require('path')
  
  module.exports = override(
    addDecoratorsLegacy(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      '@@': path.resolve(__dirname, 'src/page'),
      '@@@': path.resolve(__dirname, 'src/components'),
      '@@@@': path.resolve(__dirname, 'public'),
    })
  )