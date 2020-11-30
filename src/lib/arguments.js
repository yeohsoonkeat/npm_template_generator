const inquirer = require('inquirer');

const get_arguments = () => {
    return inquirer
        .prompt([
            {
                name: 'project_name',
                message: 'Project name ?',
                default: 'myProject'
            },
            {
                type: 'list',
                name: 'technology',
                message: 'What kind of technology ?',
                choices: ['No Framework', 'React'],
            },
            {
                type: 'checkbox',
                name: 'config',
                message: 'Additional configuration',
                choices: [
                    'typescript',
                    'Sequelize',
                    'commitizen'
                ]
            }
        ])
}

module.exports = get_arguments