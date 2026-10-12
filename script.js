const passengerInput = document.getElementById("passenger");
const flightInput = document.getElementById("flight");
const ticketInput = document.getElementById("ticket");
const boardingPassInput = document.getElementById("boardingPass");
const currentTimeInput = document.getElementById("currentTime");
const closingTimeInput = document.getElementById("closingTime");
const result = document.getElementById("result");

document.getElementById("checkButton").addEventListener("click", checkEligibility);
document.getElementById("resetButton").addEventListener("click", resetForm);

function checkEligibility() {
    const passenger = passengerInput.value.trim();
    const flight = flightInput.value.trim();
    const currentTimeText = currentTimeInput.value.trim();
    const closingTimeText = closingTimeInput.value.trim();

    if (
        !passenger ||
        !flight ||
        currentTimeText === "" ||
        closingTimeText === ""
    ) {
        showResult("Please fill in all fields.", "denied");
        return;
    }

    const currentTime = Number(currentTimeText);
    const closingTime = Number(closingTimeText);

    if (
        !Number.isFinite(currentTime) ||
        !Number.isFinite(closingTime) ||
        currentTime < 0 ||
        closingTime < 0 ||
        !Number.isInteger(currentTime) ||
        !Number.isInteger(closingTime)
    ) {
        showResult("Enter valid, non-negative whole numbers for time.", "denied");
        return;
    }

    let reasons = [];

    if (ticketInput.value !== "confirmed") {
        reasons.push("Ticket is not confirmed.");
    }

    if (boardingPassInput.value !== "available") {
        reasons.push("Boarding pass is not available.");
    }

    if (currentTime >= closingTime) {
        reasons.push("Boarding time has closed.");
    }

    if (reasons.length > 0) {
        showResult(
            `BOARDING DENIED\nPassenger: ${passenger}\nFlight: ${flight}\n${reasons.join("\n")}`,
            "denied"
        );
    } else {
        showResult(
            `BOARDING ALLOWED\nPassenger: ${passenger}\nFlight: ${flight}\nAll three checks passed.`,
            "allowed"
        );
    }
}

function showResult(message, status) {
    result.textContent = message;
    result.className = status;
    result.style.whiteSpace = "pre-line";
}

function resetForm() {
    passengerInput.value = "";
    flightInput.value = "";
    ticketInput.value = "confirmed";
    boardingPassInput.value = "available";
    currentTimeInput.value = "";
    closingTimeInput.value = "";

    result.textContent = "Boarding status will appear here.";
    result.className = "";
}
