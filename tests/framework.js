"use strict";

const makeTest = (name, λ) => [name, λ];

const runTests = async tests => {
    let errors = [];

    for (const [name, λ] of tests) {
        const result = await λ();

        if (!result) {
            errors.push(name);
        }
    }

    return errors;
};

module.exports = {
    run:  runTests,
    make: makeTest
};
