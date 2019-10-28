'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://139.155.36.35:7300/mock/5db59d7c9ac1ad2548aa3106"',
    MOCK: 'true',
})