#!/usr/bin/env node

(async function () {

    const args = require('yargs').argv

    if (args._[0] === 'init') {
        const { getArgv, createProject } = require('../lib')
        const projectProps = await getArgv()
        createProject(projectProps)
    }

})()