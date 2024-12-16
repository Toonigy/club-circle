// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Create a penguin and add it to the game container
    function createPenguin(x, y) {
        const penguin = document.createElement('div');
        penguin.classList.add('penguin');
        penguin.style.left = `${x}px`;
        penguin.style.top = `${y}px`;

        document.getElementById('gameContainer').appendChild(penguin);

        return penguin;
    }

    // Start by creating one penguin
    const penguin = createPenguin(100, 100);

    // Movement logic for the penguin
    let penguinX = 100;
    let penguinY = 100;
    const moveDistance = 10;

    function movePenguin(direction) {
        switch (direction) {
            case 'up':
                penguinY -= moveDistance;
                break;
            case 'down':
                penguinY += moveDistance;
                break;
            case 'left':
                penguinX -= moveDistance;
                break;
            case 'right':
                penguinX += moveDistance;
                break;
        }
        // Update the position of the penguin
        penguin.style.left = `${penguinX}px`;
        penguin.style.top = `${penguinY}px`;
    }

    // Listen for arrow key presses to move the penguin
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowUp') {
            movePenguin('up');
        } else if (e.key === 'ArrowDown') {
            movePenguin('down');
        } else if (e.key === 'ArrowLeft') {
            movePenguin('left');
        } else if (e.key === 'ArrowRight') {
            movePenguin('right');
        }
    });
});
