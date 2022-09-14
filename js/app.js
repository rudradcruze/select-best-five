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
    console.log(getPlayerCost);
})