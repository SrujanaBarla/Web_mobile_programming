let result = 0;
let machine_result = 0;

const onclick = ({currentTarget}) => {
    // picks a random choice for the machine
    const machine = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    document.getElementById(`machine_turn`).src = `Images/${machine}.jpg`;

    // updates results
    const winsAgainst = {rock: "scissors", paper: "rock", scissors: "paper"};
    const human = currentTarget.id;
    if (human === machine) {
    } else if (winsAgainst[human] === machine) {
        result++;
    } else {
        machine_result++;
    }

    document.getElementById("human_turn").src = `Images/${human}.jpg`;
    document.getElementById("result").innerText = result.toString();
    document.getElementById("machine_result").innerText = machine_result.toString();

    // reset
    setTimeout(() => {
        document.getElementById("human_turn").src = "Images/rock.gif";
        document.getElementById("machine_turn").src = "Images/rock.gif";
    }, 1500);
};

["rock", "paper", "scissors"].forEach(id => document.getElementById(id).addEventListener("click", onclick));