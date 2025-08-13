import { SSI } from '@ln-e/node-ssi';
var ssi = new SSI({
    baseDir: './html/',
    encoding: 'utf-8',
    payload: {
        v: 5
    }
});

// handle a file
ssi.compileFile('index.html', { payload: { title: 'Index' } }, function (err, content) {

});

//handle a content
ssi.compile('<!--# echo var="v" default="default" -->', function (err, content) {

});