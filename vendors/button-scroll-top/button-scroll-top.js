window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        if (document.getElementById("buttonScrollTop")) {
            document.getElementById("buttonScrollTop").style.display = "block";
        }    
    } else {
        if (document.getElementById("buttonScrollTop")) {
            document.getElementById("buttonScrollTop").style.display = "none";
        }    
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

