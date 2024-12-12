let matchStatus = document.getElementById("matchStatus")
let currentPlayer = "X"
let arr = Array(9).fill(null)

function checkWinner(){
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        matchStatus.innerText = `The winner is ${currentPlayer}, Refresh the page`
        return;
    }

    if (!arr.some((e) => e === null)) {
        let countdown = 3;
        const interval = setInterval(() => {
            matchStatus.textContent = `Match Draw, Match restarts in ${countdown}...`;
            countdown--; 
            if (countdown < 0) {
                clearInterval(interval);
                location.reload(); 
            }
        }, 1000);
    }
}

function handleClick(e){
    let id = Number(e.id)
    if (arr[id] !== null) return;
    arr[id] = currentPlayer
    e.innerText = currentPlayer
    checkWinner()
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    // console.log(id);
    
}