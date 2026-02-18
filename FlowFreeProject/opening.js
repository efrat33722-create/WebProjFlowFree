function createLevels(containerId, colorClass) {
    const grid = document.getElementById(containerId);
    let cnt=1;

    for (let i = 1; i <= 5; i++) {
        const level = document.createElement("div");
        level.classList.add("level", colorClass);
        level.textContent = i;
        level.id=cnt.toString();
        cnt++;

        level.addEventListener("click", () => {

            console.log("Start level", i);
            goToPage(event.target.id);
        });

        grid.appendChild(level);
    }
}

function goToPage(id) {
    window.location.href = "game.html?level=" + id;
}


createLevels("grid5", "red");
createLevels("grid6", "green");
createLevels("grid7", "blue");
