# loadAndCall
Load Css and Js files dynamically and execute callback on completion

# Example

loadAndCall({\
&emsp;   files: {\
&emsp;&emsp;        css: [\
&emsp;&emsp;&emsp;            "/Css/file1.css",\
&emsp;&emsp;&emsp;            "/Css/file2.css",\
&emsp;&emsp;        ],\
&emsp;&emsp;        js: [\
&emsp;&emsp;&emsp;            "/Js/file1.js",\
&emsp;&emsp;&emsp;            "/Js/file2.js"\
&emsp;&emsp;        ]\
&emsp;    },\
&emsp;    callBack() {\
&emsp;&emsp;        console.log("All files loaded successfully, you can use the loaded plugins and their functionalities here including operations like stop loader etc");\
&emsp;    }\
});\
