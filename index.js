const swig  = require('swig')

module.exports = function (source) {
    this.cacheable && this.cacheable()
    return ~source.indexOf('<!--swig-->') ? swig.compileFile(this.resourcePath)({}) : source
}