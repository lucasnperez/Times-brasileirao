function createGame(player1, hour, player2){
    return `
    <li>
    <img src="assets/times/icon-${player1}.png" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="assets/times/icon-${player2}.png" alt="Bandeira do ${player2}"/>
    `
}
    let delay = -0.4;
    function createCard(date, day, games){
        delay = delay + 0.4;
        return `
        <div class="card" style="animation-delay:${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
        ${games}
        </ul>
        </div>
        `
    }

    document.querySelector("#cards").innerHTML = 
    createCard("15/07", "Sábado", createGame("corinthians", "21:00", "palmeiras")) + createCard("20/07", "Quinta-Feira", createGame("sp", "21:00", "santos")) + createCard("18/07", "Domingo", createGame("bahia", "21:00", "atletico")) + createCard("19/07", "Segunda", createGame("bota", "21:00", "vasco")) + createCard("21/07", "Sexta-feira", createGame("mengo", "21:00", "inter")) + createCard("22/07", "Sábado", createGame("cruzeiro", "21:00", "gremio"))