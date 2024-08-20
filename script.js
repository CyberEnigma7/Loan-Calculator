function calculateLoan() {
  const loanAmountEl = document.getElementById('loan-amount').value;
  const interestRateEl = document.getElementById('interest-rate').value;
  const monthsToPayEl = document.getElementById('months-to-pay').value;
  const paymentEl = document.querySelector('.payment');

    interest = (loanAmountEl * (interestRateEl * 0.01)) / monthsToPayEl;
   
    monthlyPayment = (loanAmountEl / monthsToPayEl + interest).toFixed(2);

   paymentEl.innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
