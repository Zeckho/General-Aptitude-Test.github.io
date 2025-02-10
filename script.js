function validatePhoneNumber(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
}

document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Validate phone number format
    if (!validatePhoneNumber(data.phone_number)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    try {
        await fetch('https://script.google.com/macros/s/AKfycbwMLPbSWbnCLm45lS9oXdimBLzxcv-AowrRtPAyfFvnyDoSeR-scrIcw-fgB2HzYQxfvA/exec', {
            method: 'POST',
            mode: 'no-cors', // Using no-cors mode as requested
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        alert("Form submitted successfully! You will now be redirected to the test.");

        // Redirect to test link
        window.location.href = "https://online-test.classplusapp.com/?testId=67aa26c1b197a1843b9690ae&defaultLanguage=en-US";

        e.target.reset(); // Reset the form after submission
    } catch (error) {
        alert("Error submitting form. Please check your network connection.");
        console.error("Submission error:", error);
    }
});
