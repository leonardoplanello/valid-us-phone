function telephoneCheck(str) {
    const digits = str.replace(/\D/g, '');

    if (digits.length === 10 || (digits.length === 11 && digits[0] === '1')) {
        const patterns = [
            /^\d{3}-\d{3}-\d{4}$/,
            /^\(\d{3}\)\d{3}-\d{4}$/,
            /^\(\d{3}\) \d{3}-\d{4}$/,
            /^\d{3} \d{3} \d{4}$/,
            /^\d{10}$/,
            /^1 \d{3}-\d{3}-\d{4}$/,
            /^1 \(\d{3}\) \d{3}-\d{4}$/,
            /^1\(\d{3}\)\d{3}-\d{4}$/,
            /^1 \d{3} \d{3} \d{4}$/
        ];

        return patterns.some(pattern => pattern.test(str));
    }

    return false;
}