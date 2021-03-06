"use strict";

/**
 * Takes a function that expects an object as its first parameter
 * and returns a version that passes `this` in lieu of this parameter,
 * so that the function can be called like a method.
 *
 * `this` gets bound to null when the method is called.
 *
 * @see demethodify
 *
 * @function methodify
 *
 * @example
 * const { methodify } = require("helpbox");
 *
 * const tellAge = person => console.log(person.age);
 *
 * function Person(age) {
 *     this.age = age;
 * }
 *
 * Person.prototype.tellMyAge = methodify(tellAge);
 *
 * // Prints 3.
 * (new Person(3)).tellMyAge();
 *
 * @param λ {Function} The function to methodify.
 *
 * @return {Function} The function in its methodified form.
 */
module.exports = λ => {
    return function () {
        return λ.apply(null, [this].concat(arguments));
    };
};
