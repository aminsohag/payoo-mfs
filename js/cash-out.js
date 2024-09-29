document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('cash out button clicked')

        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut);
        const pinOut = document.getElementById('input-cash-out-pin').value;
        
        console.log(cashOut, pinOut);
        // wrong way to verify pin number
        if(pinOut === '1234'){
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);

            // reduce the balance
            const newBalance = balanceNumber - cashOutNumber;

            // update the UI
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Failed to cash out. Please try again later')
        }
    })
