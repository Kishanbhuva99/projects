document.addEventListener("DOMContentLoaded", function () {
    // ---------------- HOME / INDEX PAGE JS ----------------
    let btnTabs = document.querySelectorAll(".tabs");

    if (btnTabs.length) {
        btnTabs.forEach(function (tab) {
            tab.addEventListener("click", function () {
                let isActive = document.getElementById("newArrive")?.classList.contains("is-active");
                if (isActive) {
                    document.getElementById("bestSell")?.classList.add("is-active");
                    document.getElementById("newArrive")?.classList.remove("is-active");
                    console.log(`switch to best seller`);
                } else {
                    document.getElementById("newArrive")?.classList.add("is-active");
                    document.getElementById("bestSell")?.classList.remove("is-active");
                    console.log(`switch to new arrivals`);
                }
            });
        });
    }

    // ---------------- LOG IN PAGE JS ----------------
    const loginOtp = document.getElementById("logInBtn");
    const otpInput = document.getElementById("logIn_otp");
    const verifyBtn = document.getElementById("signInVerifyBtn");
    const otpTimer = document.getElementById("otpTimer");
    const resendOtpBtn = document.getElementById("resendOtpBtn");

    let countdown;
    let resendUsed = false;

    function startOtpTimer(duration) {
        let timeLeft = duration;
        otpTimer.style.display = "block";
        resendOtpBtn.style.display = "inline-block";
        resendOtpBtn.disabled = true;

        countdown = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            otpTimer.textContent = `Resend available in ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

            if (--timeLeft < 0) {
                clearInterval(countdown);
                otpTimer.style.display = "none";
                if (!resendUsed) {
                    resendOtpBtn.disabled = false;
                }
            }
        }, 1000);
    }

    if (loginOtp && otpInput && verifyBtn && otpTimer && resendOtpBtn) {
        loginOtp.addEventListener("click", function () {
            otpInput.style.display = "block";
            verifyBtn.style.display = "block";
            loginOtp.style.display = "none";
            startOtpTimer(120);
        });

        resendOtpBtn.addEventListener("click", () => {
            if (!resendUsed) {
                resendUsed = true;
                alert("OTP resent!");
                startOtpTimer(120);
                resendOtpBtn.style.display = "none";
            }
        });

        otpInput.style.display = "none";
        verifyBtn.style.display = "none";
        otpTimer.style.display = "none";
        resendOtpBtn.style.display = "none";
    }

    // ---------------- SIGN UP PAGE JS ----------------
    const signUpOtp = document.getElementById("signUpBtn");
    const signUpInput = document.getElementById("signUp_otp");
    const signUpVerifyBtn = document.getElementById("signUpVerifyBtn");

    if (signUpOtp && signUpInput && signUpVerifyBtn) {
        signUpOtp.addEventListener("click", function () {
            signUpInput.style.display = "block";
            signUpVerifyBtn.style.display = "block";
            signUpOtp.style.display = "none";
        });

        signUpInput.style.display = "none";
        signUpVerifyBtn.style.display = "none";
    }

    // ---------------- PRODUCT PAGE JS ----------------
    const colorButtons = document.querySelectorAll(".details-colors .colors");
    if (colorButtons.length) {
        colorButtons.forEach((button) => {
            button.addEventListener("click", () => {
                colorButtons.forEach((btn) => btn.classList.remove("colors-active"));
                button.classList.add("colors-active");
            });
        });
    }

    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const quantityDisplay = document.getElementById("quantity");

    let quantity = 1;
    const minQty = 1;
    const maxQty = 5;

    if (decreaseBtn && increaseBtn && quantityDisplay) {
        decreaseBtn.addEventListener("click", () => {
            if (quantity > minQty) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });

        increaseBtn.addEventListener("click", () => {
            if (quantity < maxQty) {
                quantity++;
                quantityDisplay.textContent = quantity;
            }
        });
    }

    // ---------------- USER SEARCH BAR ENTER KEY ----------------
    const searchBox = document.getElementById("searchBox");
    if (searchBox) {
        searchBox.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                const userQuery = searchBox.value.trim();
                if (userQuery) {
                    console.log("User is searching for:", userQuery);
                }
            }
        });
    }
});
