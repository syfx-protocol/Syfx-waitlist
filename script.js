document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlist-form');
    const emailInput = document.getElementById('email');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = document.getElementById('spinner');
    const statusMsg = document.getElementById('form-status');

    // In production, this would be your deployed API URL
    const API_URL = 'http://localhost:8000/waitlist';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        if (!email) return;

        // UI State: Loading
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        spinner.style.display = 'block';
        statusMsg.textContent = '';
        statusMsg.className = 'form-status';

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                if (data.status === 'already_joined') {
                    statusMsg.textContent = "You're already on the list! We'll be in touch.";
                    statusMsg.classList.add('success');
                } else {
                    statusMsg.textContent = "Welcome to the era of verified finance. You're in!";
                    statusMsg.classList.add('success');
                    emailInput.value = '';
                }
            } else {
                throw new Error(data.detail || 'Failed to join waitlist');
            }
        } catch (error) {
            console.error('Waitlist Error:', error);
            statusMsg.textContent = error.message || "Connection error. Please try again later.";
            statusMsg.classList.add('error');
        } finally {
            // UI State: Reset
            submitBtn.disabled = false;
            btnText.style.display = 'block';
            spinner.style.display = 'none';
        }
    });
});
