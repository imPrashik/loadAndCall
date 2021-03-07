# loadAndCall
Load Css and Js files dynamically and execute callback on completion

# Example

loadAndCall({\
*Tabspace*    files: {\
*Tabspace**Tabspace*        css: [\
*Tabspace**Tabspace**Tabspace*            "/Css/file1.css",\
*Tabspace**Tabspace**Tabspace*            "/Css/file2.css",\
*Tabspace**Tabspace*        ],\
*Tabspace**Tabspace*        js: [\
*Tabspace**Tabspace**Tabspace*            "/Js/file1.js",\
*Tabspace**Tabspace**Tabspace*            "/Js/file2.js"\
*Tabspace**Tabspace*        ]\
*Tabspace*    },\
*Tabspace*    callBack() {\
*Tabspace**Tabspace*        console.log("All files loaded successfully, you can use the loaded plugins and their functionalities here including operations like stop loader etc");\
*Tabspace*    }\
});\
