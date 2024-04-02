function calculateVacation() {
    const salary = parseFloat(document.getElementById('salary').value);
    const extraHour = parseFloat(document.getElementById('extra-hour').value) || 0;
    const dependents = parseInt(document.getElementById('dependents').value) || 0;
    const vacationDays = parseInt(document.getElementById('vacation-days').value);
    const abono = document.getElementById('abono').checked;
    const advance13th = document.getElementById('advance-13th').checked;

    const baseSalary = salary + (extraHour * 0.2); // Considerando 20% do valor da hora extra no salário base
    const vacationPayment = (baseSalary / 30) * vacationDays;

    let totalPayment = vacationPayment;

    if (abono) {
        totalPayment += vacationPayment / 3;
    }

    if (advance13th) {
        totalPayment += salary / 2; // Considerando adiantamento de 50% do 13º salário
    }

    // Adicionando benefício por dependentes (R$100 por dependente)
    totalPayment += dependents * 100;

    document.getElementById('result').innerHTML = `<p>O valor total a ser pago nas férias é R$ ${totalPayment.toFixed(2)}</p>`;
}
