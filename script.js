function convertText() {
    let input = document.getElementById("inputText").value;
    let converted = convertToFancy(input);
    document.getElementById("outputText").value = converted;
}

function convertToFancy(text) {
    let normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let fancy  = "ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇՏTᑌᐯᗯ᙭Yᘔ" +
                 "ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇՏTᑌᐯᗯ᙭Yᘔ";

    let result = "";
    for (let i = 0; i < text.length; i++) {
        let index = normal.indexOf(text[i]);
        result += index !== -1 ? fancy[index] : text[i];
    }
    return result;
}

function copyText() {
    let copyText = document.getElementById("outputText");
    copyText.select();
    document.execCommand("copy");

    let copyMsg = document.getElementById("copyMsg");
    copyMsg.style.display = "inline";  
    setTimeout(() => { copyMsg.style.display = "none"; }, 1500);  
}