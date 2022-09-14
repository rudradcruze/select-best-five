const playerList = document.getElementsByClassName('buttonSelectClick');

for (const player of playerList) {
    player.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.previousElementSibling.children[0].innerText;
        appendChild('playerContainer', playerName);
    })
}