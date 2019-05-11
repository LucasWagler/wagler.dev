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

window.onload = function() {
    openInNewTab('navlink');
    document.getElementById('wavetoggle').addEventListener('click', function() {toggle_visibility('wave');}, false);
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