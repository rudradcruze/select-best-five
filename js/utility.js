function appendChild(appendId, playerName) {
    const playerPerviousCount = playerCount(appendId);
    if(playerPerviousCount >= 5)
    {
        alert("You have already added 5 player! You can't add more.");
        return false;
    }
    const createNewPlayer = document.createElement('li');
    createNewPlayer.innerText = playerName;
    playerContainer.appendChild(createNewPlayer);

    return true;
}

function playerCount(elementId) {
    const playerContainer = document.getElementById(elementId);
    const playerPerviousCount = playerContainer.childElementCount;
    return playerPerviousCount;
}

function getInputValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.value);
    if (isNaN(elementValue)) {
        alert('Please enter a valid amount');
        return 0;
    }
    element.value = '';
    return elementValue;
}

function getTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.innerText);
    return elementValue;
}

function setTextValueById(elementId, amount) {
    const element = document.getElementById(elementId);
    element.innerText = amount;
}