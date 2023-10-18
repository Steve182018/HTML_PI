function Obstacles(obs) {
    obs.sort((a, b) => a - b);
    const maxObs = Math.max(...obs);

    for (let jump = 1; jump <= maxObs + 1; jump++) {
        let canJump = true;

        for (let i = 0; i < obs.length; i++) {
            if (obs[i] % jump === 0) {
                canJump = false;
                break;
            }
        }

        if (canJump) {
            return jump;
        }
    }
}

const obss = [2,3,4,5,7,9,10,12,13,16];   // Output: 8
console.log(Obstacles(obss));

