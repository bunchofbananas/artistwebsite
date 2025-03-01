document.addEventListener("DOMContentLoaded", function () {
    let scrollingText = document.getElementById("scrollingText");
    let adminIcon = document.getElementById("adminIcon");
    let messageForm = document.getElementById("messageForm");
    let userMessageInput = document.getElementById("userMessage");

    let savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    let isAdmin = localStorage.getItem("isAdmin") === "true";

    console.log("Admin mode at start:", isAdmin); // Debugging

    function renderMessages() {
        scrollingText.innerHTML = ""; // Clear messages

        savedMessages.forEach((msg, index) => {
            let span = document.createElement("span");
            span.innerHTML = msg + " • ";

            // Create delete button (only visible in admin mode)
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.classList.add("remove-btn");
            removeBtn.style.display = isAdmin ? "inline" : "none";

            removeBtn.onclick = function () {
                removeMessage(index);
            };

            span.appendChild(removeBtn);
            scrollingText.appendChild(span);
        });

        // ✅ Toggle admin mode styling
        document.body.classList.toggle("admin-active", isAdmin);
        console.log("Admin mode updated in renderMessages():", isAdmin);
    }

    function removeMessage(index) {
        savedMessages.splice(index, 1);
        localStorage.setItem("messages", JSON.stringify(savedMessages));
        renderMessages();
    }

    // ✅ Handle message submission
    messageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let input = userMessageInput.value.trim();
        if (!input) return;

        let sanitizedInput = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        savedMessages.push(sanitizedInput);
        localStorage.setItem("messages", JSON.stringify(savedMessages));

        renderMessages();
        userMessageInput.value = "";
    });

    // ✅ Admin Mode Toggle (Click Icon to Turn ON/OFF)
    adminIcon.addEventListener("click", function () {
        console.log("Admin icon clicked!"); // Debugging

        if (isAdmin) {
            console.log("Disabling admin mode.");
            localStorage.setItem("isAdmin", "false");
            isAdmin = false;
        } else {
            let password = prompt("Magic word?");
            if (password === "lemmein") { // CHANGE THIS
                console.log("Admin mode activated!");
                localStorage.setItem("isAdmin", "true");
                isAdmin = true;
            } else {
                console.log("Wrong password entered"); // Debugging
                alert("Wrong. Too bad.");
                return; // Don't refresh messages if password is wrong
            }
        }

        renderMessages();
    });

    renderMessages();
});








document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");

    // Dynamically generate 30 images
    for (let i = 1; i <= 30; i++) {
        let container = document.createElement("div");
        container.classList.add("gallery-item"); // Wrapper for hover effect

        let img = document.createElement("img");
        img.src = `candlepics/candlepics${i}.jpg`; // ✅ Make sure path matches your folder
        img.alt = `Candle Picture ${i}`;

        container.appendChild(img);
        gallery.appendChild(container);
    }
});

















const imageFolder = "./articipics/"; 

const images = [
    `${imageFolder}image1.jpg`,
    `${imageFolder}image2.jpg`,
    `${imageFolder}image3.jpg`,
    `${imageFolder}image4.jpg`,
    `${imageFolder}image5.jpg`,
    `${imageFolder}image6.jpg`,
    `${imageFolder}image7.jpg`,
    `${imageFolder}image8.jpg`,
    `${imageFolder}image9.jpg`,
    `${imageFolder}image10.jpg`,
    `${imageFolder}image11.jpg`,
    `${imageFolder}image12.jpg`,
    `${imageFolder}image13.jpg`,
    `${imageFolder}image14.jpg`,
    `${imageFolder}image15.jpg`,
    `${imageFolder}image16.jpg`,
    `${imageFolder}image17.jpg`,
    `${imageFolder}image18.jpg`,
    `${imageFolder}image19.jpg`,
    `${imageFolder}image20.jpg`,
    `${imageFolder}image21.jpg`,
    `${imageFolder}image22.jpg`,
    `${imageFolder}image23.jpg`,
    `${imageFolder}image24.jpg`,
    `${imageFolder}image25.jpg`,
    `${imageFolder}image26.jpg`,
    `${imageFolder}image27.jpg`,
    `${imageFolder}image28.jpg`,
    `${imageFolder}image29.jpg`,
    `${imageFolder}image30.jpg`,
];

let currentIndex = 0;
let slideshowImg;

document.addEventListener("DOMContentLoaded", function () {
    slideshowImg = document.getElementById("slideshow-img");

    function showSlide(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const newImage = new Image();
        newImage.src = images[currentIndex];

        newImage.onload = function () {
            slideshowImg.src = images[currentIndex];
        };
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // ** Fix: Load first image on page load **
    showSlide(0); 

    // Auto-slide every 5 seconds
    setInterval(() => {
        nextSlide();
    }, 5000);

    // Attach click events to buttons
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
});
