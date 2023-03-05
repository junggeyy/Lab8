// Import required modules
const fs = require('fs');
const request = require('request');

// Function to check whether the string is a palindrome
function check_palindrom(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Function to list all files in a directory
function file_list(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(files);
    });
}

// Function to read the contents of a file asynchronously
function readFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

// Function to make an HTTP request asynchronously and log the status and response
function makeRequest(url) {
    request(url, (err, res, body) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(`Response: ${body}`);
    });
}

// Testing the functions
console.log(isPalindrome('kayak')); //returns true
console.log(isPalindrome('random')); //  returns false

listFiles('./'); // lists all files in the current directory

readFile('./test.txt'); // reading contents of test.txt inside current directory

makeRequest('https://www.nku.edu/');    //request to NKU's webpage
