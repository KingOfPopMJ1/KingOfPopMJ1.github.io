var ssi = require("ssi");
 
var rootDirectory = "/Users/kotaronobuhara/code/KingOfPopMJ1.github.io"
var inputDirectory = rootDirectory +"/inputFiles";
var outputDirectory = rootDirectory;
var matcher = "**/*.html";
 
console.log("debug 1")
var includes = new ssi(inputDirectory, outputDirectory, matcher);
console.log("debug 2")
includes.compile();
console.log("debug 3")