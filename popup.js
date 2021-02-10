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

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText)
            if (xmlHttp.responseText=="{'loggedin':true}"){
                let loggedin = true;
                hide(loadingDiv);
                show(loggedInDiv);
            } else {
                let loggedin = false;
                hide(loadingDiv);
                show(loginDiv);
            }
        } else if (xmlHttp.readyState == 4) {
            hide(loadingDiv);
            show(errorDiv);
        }
    }
    xmlHttp.open("GET", "https://wciwalks.herokuapp.com/users/loggedin", true); // true for asynchronous 
    xmlHttp.send(null);

  };
