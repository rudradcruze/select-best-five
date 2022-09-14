function appendChild(appendId, playerName) {
    const playerContainer = document.getElementById(appendId);
    const playerPerviousCount = playerContainer.childElementCount;

    if(playerPerviousCount >= 5)
    {
        alert("You have already added 5 player! You can't add more.");
        return;
    }
    const createNewPlayer = document.createElement('li');
    createNewPlayer.innerText = playerName;
    playerContainer.appendChild(createNewPlayer);
}