let submitDistance = document.getElementById('submitdistance');

function hide(div) {
    div.setAttribute("hidden", ""); 
}

function show(div) {
    div.removeAttribute("hidden");
}

window.onload = function(element) {
    let loadingDiv = document.getElementById('loadingdiv');
    let loginDiv = document.getElementById('logindiv');
    let loggedInDiv = document.getElementById('loggedindiv');
    let errorDiv = document.getElementById('errordiv');
    let messageP = document.getElementById('message');
    document.getElementById('submitdistance').addEventListener("click", async () => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4) {
                messageP.textContent = xmlHttp.responseText;
                show(messageP);
                console.log(xmlHttp.responseText);
            }
        }
        xmlHttp.open("POST", "https://wciwalks.herokuapp.com/users/", true);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlHttp.send("distance=".concat(document.getElementById('distance').value).concat("&submit=Submit&extension=1"));
    });
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText)
            if (xmlHttp.responseText=="{'loggedin':true}"){
                hide(loadingDiv);
                show(loggedInDiv);
            } else {
                hide(loadingDiv);
                show(loginDiv);
            }
        } else if (xmlHttp.readyState == 4) {
            hide(loadingDiv);
            show(errorDiv);
        }
    }
    xmlHttp.open("GET", "https://wciwalks.herokuapp.com/users/loggedin", true);
    xmlHttp.send(null);

  };