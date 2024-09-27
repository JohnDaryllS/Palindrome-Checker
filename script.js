function isPalindrome(str) {

    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const result = document.getElementById('result');

    if (input.trim() === '') {
        alert('Please input a value');
        return;
    }

    const isPalin = isPalindrome(input);
    if (isPalin) {
        result.textContent = `"${input}" is a palindrome`;
    } else {
        result.textContent = `"${input}" is not a palindrome`;
    }
});
