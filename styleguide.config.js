const path = require('path')
module.exports = {
    components: 'resources/js/components/biodynamic-calendar/**/[A-Z]*.vue',
    require: [path.join(__dirname, 'resources/js/styleguide/global.requires.js')]
}
