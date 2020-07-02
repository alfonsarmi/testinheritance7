import * as test from '/modules/file.js';

test.getUsefulContents('http://www.example.com',
    data => { doSomethingUseful(data); });