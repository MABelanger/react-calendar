var fs = require('fs')
var sys = require('sys')
var exec = require('child_process').exec;


function puts(error, stdout, stderr) { 
	sys.puts(stdout)
}


fs.readdir(__dirname, function(err, files) {
    if (err) return;
    files.forEach(function(file) {
    	if (file.indexOf(".svg")>=0) {
            console.log('Files: ' + file);
            var newFile = file.replace(".svg", ".min.svg");
            exec("svgo " + file + " " + newFile, puts);
        };
        
    });
});


