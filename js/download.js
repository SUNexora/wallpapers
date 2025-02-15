document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            // Get the download link
            let fileUrl = this.getAttribute("data-src");

            // Show the pop-up
            let popup = document.getElementById("popup-ad");
            let countdownText = document.getElementById("countdown-text");
            let countdown = 3; // Countdown time

            popup.style.display = "block";
            countdownText.innerText = `Your wallpaper is downloading in ${countdown} seconds...`;

            // Load Adsterra ad inside the iframe
            document.getElementById("ad-iframe").srcdoc = `
                <script type='text/javascript' src='https://www.effectiveratecpm.com/yt2emeqsee?key=aa79593cf3c6dd1e5d838a824917cbe5'></script>
            `;

            // Countdown Timer
            let interval = setInterval(() => {
                countdown--;
                countdownText.innerText = `Your wallpaper is downloading in ${countdown} seconds...`;

                if (countdown === 0) {
                    clearInterval(interval);

                    // Trigger the image download
                    let a = document.createElement("a");
                    a.href = fileUrl;
                    a.download = "downloaded-image.jpg"; // Default file name
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);

                    // Hide pop-up after download
                    popup.style.display = "none";
                }
            }, 1000);
        });
    });

    // Close button event
    document.getElementById("close-popup").addEventListener("click", function () {
        document.getElementById("popup-ad").style.display = "none";
    });
});

