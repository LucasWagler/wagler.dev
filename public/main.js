console.log("    ______\n   /~/|/\\~\\\n   \\/ || \\/\n     //\n    ||\n     \\\\\n   ___\\\\_o____\n _/ ' .  .  . \\__\n/ .  .  '  . ' . \\", "_,--``--,_".repeat(3),"\n ");
console.log("🌊🌊🌊 keep it wavy 🌊🌊🌊");
console.log("\nCopyright " + new Date().getFullYear() + " Lucas Wagler" + `

Made with 🐛🐛🐛 & Icons by Font Awesome
`);

function toggle_visibility(id) {
    var element = document.getElementById(id).style;
    if (element.display == 'block') {
        element.display = 'none';
    } else {
        element.display = 'block';
    }
}

function openInNewTab(classname) {
    var elements = document.getElementsByClassName(classname);
    var i;
    for (i = 0; i < elements.length; i++) {
        elements[i].target = "_blank";
    }
}

function clickedTitleG() {
    if (typeof arguments.callee.CLICKSREQUIRED == 'undefined') {
        arguments.callee.CLICKSREQUIRED = 8;
    }
    if (typeof arguments.callee.count == 'undefined') {
        arguments.callee.count = 1;
    }
    var CLICKSREQUIRED = arguments.callee.CLICKSREQUIRED;
    var count = arguments.callee.count;

    if (count <= CLICKSREQUIRED) {
        toggle_visibility('githublink');
        toggle_visibility('gitlablink');
    }
    if (count == CLICKSREQUIRED) {
        document.getElementById('titleG').innerHTML = "v";
        document.getElementById('titleL2').innerHTML = "i";
        document.getElementById('titleFirst').style.display = "none";
    }
    if (count == 2 * CLICKSREQUIRED) {
        document.getElementById('titleG').innerHTML = "g";
        document.getElementById('titleL2').innerHTML = "l";
        document.getElementById('titleFirst').style.display = "initial";
    }

    
    count = (count >= 2 * CLICKSREQUIRED) ? 0 : count;
    count++;
    arguments.callee.count = count;
}

window.onload = function() {
    openInNewTab('navlink');
    document.getElementById('wavetoggle').addEventListener('click', function() {toggle_visibility('wave');}, false);
    document.getElementById('titleW').addEventListener('click', function() {
        if (clickedTitleG.count > clickedTitleG.CLICKSREQUIRED) {
            toggle_visibility('wave');
        }
    }, false);
    document.getElementById('titleG').addEventListener('click', function() {
        clickedTitleG();
    }, false);
}

window.onkeyup = function(e) {
    if (e.key !== undefined) {
        var key = e.key;
        if (key == 'g') {
            toggle_visibility('githublink');
            toggle_visibility('gitlablink');
        }
    } else if (e.keyIdentifier !== undefined) {
        var key = e.keyIdentifier;
    } else if (e.keyCode !== undefined) {
        var key = e.keyCode;
    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 