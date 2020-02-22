const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(`Welcome to the superb ${chalk.red('generator-node-express-fast-progress')} generator!`),
        );

        const prompts = [{
            type: 'confirm',
            name: 'someAnswer',
            message: 'Would you like to enable this option?',
            default: true,
        }];

        return this.prompt(prompts).then((props) => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('_nodemon.json'),
            this.destinationPath(`${this.name}/nodemon.json`),
        );

        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath(`${this.name}/package.json`),
        );

        this.fs.copyTpl(
            this.templatePath('src/'),
            this.destinationPath(`${this.name}/src/`), {
                name: this.name,
            },
        );

        this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath(`${this.name}/README.md`),
        );

        this.fs.copyTpl(
            this.templatePath('LICENSE'),
            this.destinationPath(`${this.name}/LICENSE`),
        );

        this.fs.copyTpl(
            this.templatePath('_.eslintrc'),
            this.destinationPath(`${this.name}/.eslintrc`),
        );
    }

    install() {
        this.installDependencies();
    }
};
