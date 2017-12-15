'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');

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
      this.props = Object.assign(props, {
        name: props.aggregateName.split('-').join(' ')
      });

      this.props.aggregateName = {
        paramCase: changeCase.paramCase(props.aggregateName),
        camelCase: changeCase.camelCase(props.aggregateName),
        pascalCase: changeCase.pascalCase(props.aggregateName)
      };
    });
  }

  createClass() {
    this.fs.copyTpl(
      this.templatePath('class/index.js'),
      this.destinationPath(`classes/${this.props.aggregateName.paramCase}/index.js`),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('class/test/index.js'),
      this.destinationPath(`classes/${this.props.aggregateName.paramCase}/test/index.js`),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('class/test/class.assertion.js'),
      this.destinationPath(
        `classes/${this.props.aggregateName.paramCase}/test/${
          this.props.aggregateName.paramCase
        }.assertion.js`
      ),
      { aggregateName: this.props.aggregateName }
    );
  }

  createServiceClass() {
    this.fs.copyTpl(
      this.templatePath('service/index.js'),
      this.destinationPath(`${this.props.aggregateName.paramCase}-service/index.js`),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('service/test/index.js'),
      this.destinationPath(`${this.props.aggregateName.paramCase}-service/test/index.js`),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('service/test/service.spec/index.js'),
      this.destinationPath(
        `${this.props.aggregateName.paramCase}-service/test/${
          this.props.aggregateName.paramCase
        }-service.spec/index.js`
      ),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('service/test/setup.js'),
      this.destinationPath(`${this.props.aggregateName.paramCase}-service/test/setup.js`),
      { aggregateName: this.props.aggregateName }
    );
  }

  createPersistenceMechanisms() {
    // DTGs

    this.fs.copyTpl(
      this.templatePath('repos/dtgs/dtg/index.js'),
      this.destinationPath(
        `repos/dtgs/${this.props.aggregateName.paramCase}-dtg/index.js`
      ),
      { aggregateName: this.props.aggregateName }
    );

    // Repo

    this.fs.copyTpl(
      this.templatePath('repos/repo/index.js'),
      this.destinationPath(`repos/${this.props.aggregateName.paramCase}-repo/index.js`),
      { aggregateName: this.props.aggregateName }
    );

    this.fs.copyTpl(
      this.templatePath('repos/repo/test/index.js'),
      this.destinationPath(
        `repos/${this.props.aggregateName.paramCase}-repo/test/index.js`
      ),
      { aggregateName: this.props.aggregateName }
    );
  }

  install() {
    // This.installDependencies()
  }
};
