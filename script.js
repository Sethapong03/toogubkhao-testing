document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        const loginButton = document.querySelector(".login-button");
        const signupButton = document.querySelector(".signup-button");

        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            // Perform login validation and actions here
            window.location.href = "dashboard.html";
        });

        signupButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "signup.html";
        });
    }

    if (window.location.pathname.endsWith("signup.html")) {
        const signupButton = document.querySelector(".signup-button");

        signupButton.addEventListener("click", (e) => {
            e.preventDefault();
            // Perform signup validation and actions here
            window.location.href = "dashboard.html";
        });
    }

    if (window.location.pathname.endsWith("dashboard.html")) {
        fetchQRCode();

        // Fetch QR code from the API and display it
        function fetchQRCode() {
            const qrCodeContainer = document.getElementById('qr-code');

            // Replace with your actual API endpoint
            const apiEndpoint = 'https://api.example.com/get-qr-code';

            fetch(apiEndpoint)
                .then(response => response.json())
                .then(data => {
                    const qrCodeImage = document.createElement('img');
                    qrCodeImage.src = data.qrCodeUrl; // Assuming the API returns a URL to the QR code image
                    qrCodeImage.alt = 'QR Code';
                    qrCodeContainer.appendChild(qrCodeImage);
                })
                .catch(error => {
                    console.error('Error fetching QR code:', error);
                });
        }
    }
});
