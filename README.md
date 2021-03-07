# loadAndCall
Load Css and Js files dynamically and execute callback on completion

# Example

loadAndCall({
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
