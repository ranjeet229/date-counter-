function calculateDays() {
    const inputDate = new Date(document.getElementById('date-input').value);

    const today = new Date();
    const timeDifference = inputDate - today;

    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (!isNaN(daysRemaining)) {
        if (daysRemaining >= 0) {
            document.getElementById('result').innerText = `Days remaining: ${daysRemaining}`;
        } else {
            document.getElementById('result').innerText = `The selected date is ${Math.abs(daysRemaining)} days in the past.`;
        }
    } else {
        document.getElementById('result').innerText = 'Please select a valid date.';
    }
}