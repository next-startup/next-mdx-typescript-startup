const withMDX = require('@next/mdx')({
  extention: /\.(md|mdx)$/
})

module.exports = withMDX({
  pageExtensions: ['js','jsx','ts','tsx','mdx','md']
})