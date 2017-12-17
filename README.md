# generator-ddd-aggregate

[![Build Status](https://travis-ci.org/nicholaswmin/generator-ddd-aggregate.svg?branch=master)](https://travis-ci.org/nicholaswmin/generator-ddd-aggregate)

Generate [Domain Driven Design][ddd] [Aggregates][aggr] for Node.js.

The generated Aggregate contains:

- The Base Class.
- A [Repo][generic-repo] that uses [knex.js][knex] for persisting your
  Aggregate.
- A Service Class.
- Boilerplate tests for the Class and the Service.

## Install

```bash
$ npm i -g yo
$ npm i -g generator-ddd-aggregate
```

## Usage

The generated Aggregate is assuming the following are already installed in your
parent project:

```
$ npm i --save guid generic-repo http-errors
$ npm i --save-dev chai mock-repo
```

then, the following example creates an *Account* Aggregate:

```bash
$ yo ddd-aggregate
# You will be asked to type the name of your aggregate, we
# are assuming you typed 'account'.
```

then the generator will generate the following folder structure:

```
account
├── classes
│   └── account
│       ├── test
│       │   ├── account.assertion.js
│       │   └── index.js
│       └── index.js
├── repo
│   └── index.js
├── account-service
│   ├── test
│   │   ├── account-service.spec
│   │   │   └── index.js
│   │   ├── setup.js
│   │   └── index.js
│   └── index.js
└── test
    └── index.js
```

## Composite Aggregates

Aggregates, by definition, contain more than 1 child Class. To expand
to a composite Aggregate:

- Add all the relevant child classes in `classes`.
- Modify your Base Class to include the relevant child classes.
- Checkout the relevant comment in `repo/index.js` on how to rewire the
  generated Repository to save/retrieve composite Aggregates.

## Aggregate tests

Run the generated Aggregate's tests:

```
$ mocha account/test
```

## Generator Test

Run this generator's tests:

```bash
$ npm test
```

## Authors

- Nicholas Kyriakides, [@nicholaswmin][nicholaswmin]

## License

MIT

[ddd]: https://en.wikipedia.org/wiki/Domain-driven_design
[aggr]: https://martinfowler.com/bliki/DDD_Aggregate.html
[nicholaswmin]: https://github.com/nicholaswmin
[generic-repo]: https://www.npmjs.com/package/generic-repo
[knex]: http://knexjs.org/
