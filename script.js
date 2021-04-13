var text = document.getElementById('typeText');
var str = "🚩 मराठी नव वर्षांच्या आणि गुढी-पाडव्याच्या हार्दिक शुभेच्छां... 🚩";
var i = 0;

function typeText() {
    if (i < str.length) {
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeText , 100);
    }
}

typeText();