cordova.define("com.malomatia.DropBoxChooser.DropBoxChooser", function(require, exports, module) { /*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback) {


        cordova.exec(successCallback, errorCallback, "DropBoxChooser", "greet", [name]);
    },
	

	SelectFile: function (name, successCallback, errorCallback) {
	
        cordova.exec(successCallback, errorCallback, "DropBoxChooser", "SelectFile", [name]);
    }

};

});
