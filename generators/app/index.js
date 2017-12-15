'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay('Welcome to ' + chalk.red('generator-ddd-aggregate') + ' generator!'));

    const prompts = [
      {
        type: 'prompt',
        name: 'aggregateName',
        message: 'Whats the name of your aggregate',
        validate: function(input) {
          if (!input) {
            return this.async()('You need to provide a name');
          }

          return this.async()(null, true);
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;

      this.props.aggregateName = {
        allLowercase: props.aggregateName.toLowerCase(),
        firstUppercase:
          props.aggregateName.charAt(0).toUpperCase() +
          props.aggregateName.toLowerCase().slice(1)
      };
    });
  }

  createMainClass() {
    this.fs.copyTpl(
      this.templatePath('main-class/main-class.js'),
      this.destinationPath(`classes/${this.props.aggregateName.firstUppercase}/index.js`),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('main-class/test/index.js'),
      this.destinationPath(
        `classes/${this.props.aggregateName.firstUppercase}/test/index.js`
      ),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('main-class/test/main-class.assertion.js'),
      this.destinationPath(
        `classes/${this.props.aggregateName.firstUppercase}/test/${
          this.props.aggregateName.allLowercase
        }.assertion.js`
      ),
      { aggregateName: this.props.aggregateName }
    );
  }

  createServiceClass() {
    this.fs.copyTpl(
      this.templatePath('main-service/index.js'),
      this.destinationPath(`${this.props.aggregateName.allLowercase}-service/index.js`),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('main-service/test/index.js'),
      this.destinationPath(
        `${this.props.aggregateName.allLowercase}-service/test/index.js`
      ),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('main-service/test/main.spec/index.js'),
      this.destinationPath(
        `${this.props.aggregateName.allLowercase}-service/test/${
          this.props.aggregateName.allLowercase
        }-service.spec/index.js`
      ),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('main-service/test/main.spec/setup.js'),
      this.destinationPath(
        `${this.props.aggregateName.allLowercase}-service/test/${
          this.props.aggregateName.allLowercase
        }-service.spec/setup.js`
      ),
      { aggregateName: this.props.aggregateName }
    );
  }

  install() {
    // This.installDependencies()
  }
};
