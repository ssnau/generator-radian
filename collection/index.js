'use strict';
var _ = require('_');
var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function CollectionGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the collection subgenerator with the argument ' + this.name + '.');
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.files = function files() {
  this.copy('template.coffee', 'assets/js/collection/' + _.slugify(this.name) + '-collection.coffee');
};
