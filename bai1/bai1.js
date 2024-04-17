function calculate(operation) {
    const inputA = parseFloat(document.getElementById('inputA').value);
    const inputB = parseFloat(document.getElementById('inputB').value);
    let result;

    if (isNaN(inputA) || isNaN(inputB)) {
        document.getElementById('result').innerText = 'Vui lòng nhập số hợp lệ!';
        return;
    }

    switch (operation) {
        case 'SUM':
            result = inputA + inputB;
            break;
        case 'SUBTRACT':
            result = inputA - inputB;
            break;
        case 'MULTIPLY':
            result = inputA * inputB;
            break;
        case 'DIVIDE':
            if (inputB === 0) {
                document.getElementById('result').innerText = 'Không thể chia cho 0!';
                return;
            }
            result = inputA / inputB;
            break;
        default:
            break;
    }

    document.getElementById('result').innerText = `Kết quả: ${result}`;
}

function resetInputs() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').innerText = '';
}
