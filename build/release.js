module.exports = function( Release ) {

var shell = require( "shelljs" );

Release.define({
	issueTracker: "github",
	changelogShell: function() {
		return "# Changelog for QUnit v" + Release.newVersion + "\n";
	},

	generateArtifacts: function( done ) {
		Release.exec( "grunt" );
		shell.mkdir( "-p", "qunit" );
		shell.cp( "-r", "dist/*", "qunit/" );
		shell.mkdir( "-p", "dist/cdn" );
		shell.cp( "dist/qunit.js", "dist/cdn/qunit-" + Release.newVersion + ".js" );
		shell.cp( "dist/qunit.css", "dist/cdn/qunit-" + Release.newVersion + ".css" );
		done([ "qunit/qunit.js", "qunit/qunit.css" ]);
	},
});

};