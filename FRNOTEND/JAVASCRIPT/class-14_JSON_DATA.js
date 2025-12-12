// JSON
// JSON (JavaScript Object Notation) is a text-based data exchange format. It is a collection of key-value pairs where the key must be a string type, and the value can be of any of the following types:

// Number
// String
// Boolean
// Array
// Object
// null
// A couple of important rules to note:

// In the JSON data format, the keys must be enclosed in double quotes.
// The key and value must be separated by a colon (:) symbol.
// There can be multiple key-value pairs. Two key-value pairs must be separated by a comma (,) symbol.
// No comments (// or / /) are allowed in JSON data

// JSON Data Format Examples
// You can save JSON data in a file with the extension of .json. Let's create an employee.json file with attributes (represented by keys and values) of an employee.


const data = {
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}

console.log(data.address.street)