var ssi = require("ssi");
 
var inputDirectory = "inputFiles";
var outputDirectory = "../";
var matcher = "/**/*.shtml";
 
var includes = new ssi(inputDirectory, outputDirectory, matcher);
includes.compile();