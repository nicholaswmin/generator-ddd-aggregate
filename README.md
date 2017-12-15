# generator-ddd-aggregate
Generate [Domain Driven Design][ddd] [Aggregates][aggr] for Node.js

## Install

```bash
$ npm install -g generator-ddd-aggregate
```

## Usage

In the following example we'll create an 'Account' aggregate:

```bash
$ mkdir account
$ cd account
$ yo ddd-aggregate
```

which will generate the following folder structure:

```=
account
├── classes
│   └── Account
│       ├── test
│       │   ├── account.assertion.js
│       │   └── index.js
│       └── index.js
|
└── account-service
    ├── test
    │   ├── account-service.spec
    │   │   ├── index.js
    │   │   └── setup.js
    │   └── index.js
    └── index.js
```


## Test

```bash
$ npm test
```

## License

MIT


## Authors

- [Nicholas Kyriakides, @nicholaswmin][nicholaswmin]

[ddd]: https://en.wikipedia.org/wiki/Domain-driven_design
[aggr]: https://martinfowler.com/bliki/DDD_Aggregate.html
[nicholaswmin]: https://github.com/nicholaswmin
