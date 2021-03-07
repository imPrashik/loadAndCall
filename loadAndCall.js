/**
 * @description : Load Css and Js files dynamically and execute callback on completion
 * @author Prashik
 * @date 2019-08-28
 * @function loadAndCall => this can also be improved by removing jQuery dependency.
 * @dependency: jQuery
 * @implementation
 *  loadAndCall({
        files: {
            css: [
                "/Css/file1.css",
                "/Css/file2.css",
            ],
            js: [
                "/Js/file1.js",
                "/Js/file2.js"
            ]
        },
        callBack() {
            console.log("All files loaded successfully, you can use the loaded plugins and their functionalities here including operations like stop loader etc");
        }
    });
 */

const loadAndCall = (function (_opts) {
    var _options = {
        files: {//file paths should start with either /(from root directory) OR http:// OR https:// etc
            css: [],// ["/Css/file.css", "/Css/file.css"]
            js: []// ["/Js/file.js", "/Js/file2.js"]
        },
        callBack() { },//optional callback function that gets called once operation in completed
        win: window//pass optional window parameter where loadAndCall should execute
    }
    $.extend(_options, _opts);
    var _callBackValidator = 0
    var _allFilesLoadedValidator = function (_fileType) {
        if (_fileType == "css" && _options.files[_fileType].length == 0) {
            _fileType = "js";
        }

        if (_fileType && _options.files && _options.files[_fileType] && _options.files[_fileType].length > 0) {
            var filePath = _options.files[_fileType].splice(0, 1);
            var fileFullPath = (filePath[0].indexOf("://") > -1 ? "" : `..`) + filePath;

            if (_fileType == "css") {
                if (!$(`link[href='${fileFullPath}']`).length) {
                    var _link = _options.win.document.createElement("link")
                    _link.rel = "stylesheet";
                    _addFilesAndEvents(_link, fileFullPath, "css");
                } else {
                    _allFilesLoadedValidator(_fileType);
                }
            } else if (_fileType == "js") {
                if (!$(`script[src='${fileFullPath}']`).length) {
                    var _script = _options.win.document.createElement("script")
                    _script.type = "text/javascript";
                    _addFilesAndEvents(_script, fileFullPath, "js");
                } else {
                    _allFilesLoadedValidator(_fileType);
                }
            }
        } else {
            _options.callBack();
        }
    }
    var _addFilesAndEvents = function (_addedFile, _pathUrl, _fileType) {
        _addedFile.onload = function () {
            _allFilesLoadedValidator(_fileType);
        };
        _addedFile.onerror = function () {
            _allFilesLoadedValidator(_fileType);
        };

        if (_fileType == "css") {
            _addedFile.href = _pathUrl;
        } else if (_fileType == "js") {
            _addedFile.src = _pathUrl;
        }
        _options.win.document.getElementsByTagName("head")[0].appendChild(_addedFile);
    }
    var fileTypeToLoad = "";

    if (_options.files.css && _options.files.css.length > 0) {
        fileTypeToLoad = "css";
    } else if (_options.files.js && _options.files.js.length > 0) {
        fileTypeToLoad = "js";
    }

    _allFilesLoadedValidator(fileTypeToLoad);
});