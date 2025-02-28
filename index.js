// Countdown Timer
function countdownTimer() {
    const matchDate = new Date("2025-03-20T00:00:00").getTime();
    const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = matchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `MATCH START IN: ${days}D ${hours}H ${minutes}M ${seconds}s`;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Match has started!";
        }
    }, 1000);
}

countdownTimer();
