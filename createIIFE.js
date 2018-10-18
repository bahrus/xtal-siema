const jiife = require('jiife');
const xl = 'node_modules/xtal-latx/';
jiife.processFiles([xl + 'define.js', xl + 'xtal-latx.js', 'siema.js', 'xtal-siema.js'], 'xtal-siema.iife.js');



