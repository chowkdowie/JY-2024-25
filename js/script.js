function copyEmail(){
    navigator.clipboard.writeText('j47yi@uwaterloo.ca')
    .then(() => {alert('Email copied!');})

}



function typeText(elementID, text, speed){
    const element = document.getElementById(elementID);
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type,speed);
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", () => {
    function updateButtonText() {
        const button = document.querySelector('.link.green');
        if (window.innerWidth <= 1493) {
            button.textContent = 'EMAIL';
        } else {
            button.textContent = 'COPY MY EMAIL';
        }
    }

    updateButtonText();
    window.addEventListener('resize', updateButtonText);

    setTimeout(() => {
        typeText("typewriter-1", "HELLO", 150);
    }, 800);

    setTimeout(() => {
        typeText("typewriter-2", "I’m Jennifer, currently studying Systems Design Engineering @UWaterloo and passionate about design + innovation. Let’s connect :)  ", 40);
    }, 2000);

    VanillaTilt.init(document.querySelectorAll('.big-works, .small-works'), {
        max: 6,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
    });

    const folder = document.getElementById('folder');
    const folderTextContainer = document.querySelector('.folder-text');
    let hasAnimated = false;

    function userScroll() {
        const folderRect = folder.getBoundingClientRect();

        if (folderRect.top < window.innerHeight && folderRect.bottom > 0) {
            if (!hasAnimated) {
                folderTextContainer.classList.add('animate');
                hasAnimated = true;
            }
        }
    }

    folderTextContainer.innerHTML = `
        <span class="link yellow">UX DESIGNER</span>
        <span class="link yellow">TREASURY BOARD SECRETARIAT</span>
        <span class="link yellow">SEP - DEC 2024</span>
        <span class="link white">UAV DESIGN ENGINEER</span>
        <span class="link white">AUAV TECH</span>
        <span class="link white">JAN - APR 2024</span>
    `;

    folderTextContainer.addEventListener('animationed', () => {
        folderTextContainer.classList.remove('animate');
    });

    window.addEventListener('scroll', userScroll);
});

function switchTab(tabName) {
    const folder = document.getElementById('folder');
    const folderTextContainer = folder.querySelector('.folder-text');

    if (tabName === 'community') {
        folder.style.backgroundColor = '#4B67E5';
        folderTextContainer.innerHTML = `
            <span class="link yellow">GRAPHIC DESIGNER</span>
            <span class="link yellow">FASHION FOR CHANGE</span>
            <span class="link yellow">OCT 2024 - PRESENT</span>
            <span class="link white">WEB DEVELOPER</span>
            <span class="link white">ELECTRIUM MOBILITY</span>
            <span class="link white">MAY - JUL 2024</span>
        `;
    } else {
        folder.style.backgroundColor = 'black';
        folderTextContainer.innerHTML = `
            <span class="link yellow">UX DESIGNER</span>
            <span class="link yellow">TREASURY BOARD SECRETARIAT</span>
            <span class="link yellow">SEP - DEC 2024</span>
            <span class="link white">UAV DESIGN ENGINEER</span>
            <span class="link white">AUAV TECH</span>
            <span class="link white">JAN - APR 2024</span>
        `;
    }
}
