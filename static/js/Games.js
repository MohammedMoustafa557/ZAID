let currentLevel = 1;
let attempts = 0;
let timerValue = 30;
let timerInterval;

const challenges = {
    1: {
        title: "Level 1: Basic HTML Box",
        task: "Create a black box using HTML and CSS. /n ",
        solution: '<div class="box"></div>\n\n<style>\n.box {\n    width: 100px;\n    height: 100px;\n    background-color: black;\n}\n</style>',
        hint: "Hint: Use a <div> and apply CSS for width, height, and background-color."
    },
    2: {
        title: "Level 2: Centered Red Box",
        task: "Create a red box centered on the page using HTML and CSS.",
        solution: '<div class="box red-box"></div>\n\n<style>\n.red-box {\n    width: 100px;\n    height: 100px;\n    background-color: red;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n</style>',
        hint: "Hint: Use absolute positioning and transform to center the box."
    },
    3: {
        title: "Level 3: Responsive Box",
        task: "Create a box that is responsive and changes size based on the viewport width.",
        solution: '<div class="box responsive-box"></div>\n\n<style>\n.responsive-box {\n    width: 50vw;\n    height: 50vw;\n    background-color: blue;\n}\n</style>',
        hint: "Hint: Use viewport width (vw) for responsive sizing."
    },
    4: {
        title: "Level 4: Green Circle",
        task: "Create a green circle with a 150px diameter using HTML and CSS.",
        solution: '<div class="circle"></div>\n\n<style>\n.circle {\n    width: 150px;\n    height: 150px;\n    background-color: green;\n    border-radius: 50%;\n}\n</style>',
        hint: "Hint: Use border-radius to make the circle."
    },
    5: {
        title: "Level 5: Animated Square",
        task: "Create a square that changes color on hover using CSS animations.",
        solution: '<div class="animated-square"></div>\n\n<style>\n.animated-square {\n    width: 100px;\n    height: 100px;\n    background-color: orange;\n    transition: background-color 0.5s;\n}\n.animated-square:hover {\n    background-color: purple;\n}\n</style>',
        hint: "Hint: Use the :hover pseudo-class to change color on hover."
    },
    6: {
        title: "Level 6: Gradient Background",
        task: "Create a background with a linear gradient from blue to green.",
        solution: '<div class="gradient-background"></div>\n\n<style>\n.gradient-background {\n    width: 100vw;\n    height: 100vh;\n    background: linear-gradient(to right, blue, green);\n}\n</style>',
        hint: "Hint: Use the linear-gradient function for the background."
    },
    7: {
        title: "Level 7: CSS Grid Layout",
        task: "Create a simple grid layout with 3 columns and 2 rows.",
        solution: '<div class="grid-container">\n    <div class="grid-item">1</div>\n    <div class="grid-item">2</div>\n    <div class="grid-item">3</div>\n    <div class="grid-item">4</div>\n    <div class="grid-item">5</div>\n    <div class="grid-item">6</div>\n</div>\n\n<style>\n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 10px;\n}\n.grid-item {\n    background-color: lightgray;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100px;\n}\n</style>',
        hint: "Hint: Use display: grid; to create the grid layout."
    },
    8: {
        title: "Level 8: Flexbox Centering",
        task: "Center a box both horizontally and vertically using Flexbox.",
        solution: '<div class="flex-container">\n    <div class="centered-box"></div>\n</div>\n\n<style>\n.flex-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n.centered-box {\n    width: 100px;\n    height: 100px;\n    background-color: pink;\n}\n</style>',
        hint: "Hint: Use display: flex; with align-items and justify-content properties."
    },
    9: {
        title: "Level 9: Hover Effect",
        task: "Create a box that scales up when hovered over.",
        solution: '<div class="hover-box"></div>\n\n<style>\n.hover-box {\n    width: 100px;\n    height: 100px;\n    background-color: yellow;\n    transition: transform 0.3s;\n}\n.hover-box:hover {\n    transform: scale(1.2);\n}\n</style>',
        hint: "Hint: Use transform: scale() to scale the box on hover."
    },
    10: {
        title: "Level 10: Keyframe Animation",
        task: "Create a box that animates from left to right using keyframes.",
        solution: '<div class="animated-box"></div>\n\n<style>\n@keyframes moveRight {\n    from { transform: translateX(0); }\n    to { transform: translateX(100px); }\n}\n.animated-box {\n    width: 100px;\n    height: 100px;\n    background-color: orange;\n    animation: moveRight 2s infinite;\n}\n</style>',
        hint: "Hint: Use @keyframes and animation properties to create the movement."
    },
    11: {
        title: "Level 11: JavaScript Event Listener",
        task: "Create a button that shows an alert when clicked.",
        solution: '<button id="alert-button">Click Me!</button>\n\n<script>\ndocument.getElementById("alert-button").addEventListener("click", function() {\n    alert("Button Clicked!");\n});\n</script>',
        hint: "Hint: Use addEventListener to attach a click event to the button."
    },
    12: {
        title: "Level 12: JavaScript DOM Manipulation",
        task: "Create a button that changes the text of a paragraph when clicked.",
        solution: '<button id="change-text">Change Text</button>\n<p id="text">Old Text</p>\n\n<script>\ndocument.getElementById("change-text").addEventListener("click", function() {\n    document.getElementById("text").textContent = "New Text";\n});\n</script>',
        hint: "Hint: Use textContent to change the text of the paragraph."
    },
    13: {
        title: "Level 13: Form Validation",
        task: "Create a form that requires the user to fill in a text field before submitting.",
        solution: '<form id="my-form">\n    <input type="text" id="text-field" required>\n    <button type="submit">Submit</button>\n</form>\n\n<style>\nform {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n}\ninput, button {\n    margin-bottom: 10px;\n}\n</style>',
        hint: "Hint: Use the required attribute to make the text field mandatory."
    },
    14: {
        title: "Level 14: Responsive Design",
        task: "Create a layout that adjusts based on screen size using media queries.",
        solution: '<div class="responsive-layout">\n    <div class="item">Item 1</div>\n    <div class="item">Item 2</div>\n</div>\n\n<style>\n.responsive-layout {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n.item {\n    flex: 1;\n    background-color: lightblue;\n    padding: 10px;\n}\n@media (max-width: 600px) {\n    .responsive-layout {\n        flex-direction: column;\n    }\n}\n</style>',
        hint: "Hint: Use media queries to adjust the layout based on screen size."
    },
    15: {
        title: "Level 15: CSS Variables",
        task: "Use CSS variables to set and change the color of a box.",
        solution: '<div class="box"></div>\n\n<style>\n:root {\n    --box-color: purple;\n}\n.box {\n    width: 100px;\n    height: 100px;\n    background-color: var(--box-color);\n}\n</style>',
        hint: "Hint: Use CSS variables to store and apply colors."
    },
    16: {
        title: "Level 16: CSS Transitions",
        task: "Create a box that smoothly transitions its width on hover.",
        solution: '<div class="transition-box"></div>\n\n<style>\n.transition-box {\n    width: 100px;\n    height: 100px;\n    background-color: teal;\n    transition: width 0.5s;\n}\n.transition-box:hover {\n    width: 200px;\n}\n</style>',
        hint: "Hint: Use the transition property to animate the width change."
    },
    17: {
        title: "Level 17: JavaScript Timer",
        task: "Create a timer that counts down from 10 seconds.",
        solution: '<div id="timer">10</div>\n\n<script>\nlet timeLeft = 10;\nconst timerElement = document.getElementById("timer");\nconst timerInterval = setInterval(function() {\n    timeLeft--;\n    timerElement.textContent = timeLeft;\n    if (timeLeft <= 0) {\n        clearInterval(timerInterval);\n    }\n}, 1000);\n</script>',
        hint: "Hint: Use setInterval to create a countdown timer."
    },
    18: {
        title: "Level 18: JavaScript Array Manipulation",
        task: "Create a script that adds a new item to an array and logs it to the console.",
        solution: '<script>\nlet items = ["Item 1", "Item 2"];\nitems.push("Item 3");\nconsole.log(items);\n</script>',
        hint: "Hint: Use the push method to add items to an array."
    },
    19: {
        title: "Level 19: CSS Flexbox Layout",
        task: "Create a layout with 4 boxes evenly spaced in a row using Flexbox.",
        solution: '<div class="flex-container">\n    <div class="box">1</div>\n    <div class="box">2</div>\n    <div class="box">3</div>\n    <div class="box">4</div>\n</div>\n\n<style>\n.flex-container {\n    display: flex;\n    justify-content: space-between;\n}\n.box {\n    width: 100px;\n    height: 100px;\n    background-color: lightgray;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n</style>',
        hint: "Hint: Use justify-content: space-between to space the boxes evenly."
    },
    20: {
        title: "Level 20: CSS Box Shadow",
        task: "Create a box with a shadow effect.",
        solution: '<div class="shadow-box"></div>\n\n<style>\n.shadow-box {\n    width: 100px;\n    height: 100px;\n    background-color: black;\n    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);\n}\n</style>',
        hint: "Hint: Use box-shadow to add a shadow effect to the box."
    },
    // يمكنك متابعة إضافة مستويات جديدة حتى تصل إلى 100 مستوى
};

function updatePreview() {
    let code = document.getElementById('code').value;
    document.getElementById('output').innerHTML = code;

    checkSolution(code);
}

function checkSolution(userCode) {
    const correctSolution = challenges[currentLevel].solution.trim();
    
    const cleanUserCode = userCode.replace(/\s+/g, '').toLowerCase();
    const cleanSolution = correctSolution.replace(/\s+/g, '').toLowerCase();

    if (cleanUserCode === cleanSolution) {
        showWinMessage();
        playWinSound();
        startFireworks();
        attempts = 0;
        clearInterval(timerInterval);
        document.getElementById('timer').classList.add('hidden');
        document.querySelector('.solution-btn').style.display = "none";
    } else {
        attempts++;
        if (attempts >= 3) {
            document.querySelector('.solution-btn').style.display = "inline";
        }
    }
}

function showHint() {
    const hintMessage = challenges[currentLevel].hint;
    showTemporaryMessage(hintMessage);
}

function showSolution() {
    const solutionMessage = "Solution:\n" + challenges[currentLevel].solution;
    showTemporaryMessage(solutionMessage);
}

function showTemporaryMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.querySelector('p').textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 5000); // رسالة الخطأ تظهر لمدة 5 ثوانٍ
}

function showWinMessage() {
    const winMessage = document.getElementById('win-message');
    winMessage.classList.remove('hidden');
    setTimeout(() => {
        winMessage.classList.add('hidden');
    }, 7000); // الرسالة ستظهر لمدة 7 ثوانٍ
}

function playWinSound() {
    const winSound = document.getElementById('win-sound');
    winSound.play();
}

function startFireworks() {
    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        document.body.appendChild(firework);
        firework.style.top = `${Math.random() * window.innerHeight}px`;
        firework.style.left = `${Math.random() * window.innerWidth}px`;

        setTimeout(() => {
            firework.remove();
        }, 1500);
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel > Object.keys(challenges).length) {
        alert("Congratulations! You have completed all levels.");
        return;
    }
    document.querySelector('.level-title').innerText = challenges[currentLevel].title;
    document.querySelector('.challenge').innerText = "Challenge: " + challenges[currentLevel].task;
    document.getElementById('code').value = '';
    document.getElementById('output').innerHTML = '';
    document.querySelector('.solution-btn').style.display = "none";
    attempts = 0;
    startTimer();
}

function retryLevel() {
    document.getElementById('error-message').classList.add('hidden');
    document.getElementById('code').value = '';
    document.getElementById('output').innerHTML = '';
    startTimer();
}

function startTimer() {
    timerValue = 90;
    document.getElementById('timer-value').textContent = timerValue;
    document.getElementById('timer').classList.remove('hidden');

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timerValue--;
        document.getElementById('timer-value').textContent = timerValue;

        if (timerValue <= 0) {
            clearInterval(timerInterval);
            showTemporaryMessage("Time's up! Please try again.");
            document.getElementById('code').value = '';
            document.getElementById('output').innerHTML = '';
            document.getElementById('timer').classList.add('hidden');
        }
    }, 1000);
}

// بدء المؤقت عند تحميل الصفحة
window.onload = () => {
    startTimer();
};
