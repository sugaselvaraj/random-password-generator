function generatePass() {
    var form = document.forms.namedItem("passwordGen");
    var passLen = form.passlen.value;
    form.output.value=createRandomPass(passLen);
}

function createRandomPass(len) {
    var res="";
    var keylist = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*';
    for(var i=0; i<len; i++) {
        res += keylist.charAt(Math.floor(Math.random()*keylist.length));
    }
    return res;
}