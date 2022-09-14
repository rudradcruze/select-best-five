const playerList = document.getElementsByClassName('buttonSelectClick');

for (const player of playerList) {
    player.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.previousElementSibling.children[0].innerText;
        const append = appendChild('playerContainer', playerName);
        if(append === true)
            event.target.disabled = 'true';
    })
}

document.getElementById('playerBudgetCalculation').addEventListener('click', function (){
    const getPlayerCost = getInputValueById('playerBudget');
    const getPlayers = playerCount('playerContainer');

    if (getPlayers < 1) {
        alert('Please select at least 1 player');
        return;
    }

    const playerExpenses = getPlayerCost * getPlayers;
    setTextValueById('playerExpences', playerExpenses)
})

document.getElementById('calculateTotal').addEventListener('click', function (){
    const managerCost = getInputValueById('managerCost');
    const coachCost = getInputValueById('coachCost');
    const playerExpenses = getTextValueById('playerExpences');

    const calculateTotal = managerCost + coachCost + playerExpenses;
    setTextValueById('playerTotal', calculateTotal);
})