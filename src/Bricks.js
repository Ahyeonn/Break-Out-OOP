import Brick from './Brick.js'
class Bricks {
    constructor() {
        this.bricks = [];
        this.brickColumnCount = 7;
        this.brickRowCount = 3;
        this.initBricks()
    }

    initBricks() {
        for (let c = 0; c < this.brickColumnCount; c += 1) {
            this.bricks[c] = [];
            for (let r = 0; r < this.brickRowCount; r += 1) {
              const brickX = (c * (45 + 20)) + 20;
              const brickY = (r * (20 + 20)) + 30;
              if (c % 2 === 0) {
                this.bricks[c][r] = new Brick(brickX, brickY, 50, 20, '#0095DD');
              } else {
                this.bricks[c][r] = new Brick(brickX, brickY, 50, 20, '#0045DD');
              }
            }
          }
        }
        
    render(ctx) {
        for (let c = 0; c < this.brickColumnCount; c += 1) {
            for (let r = 0; r < this.brickRowCount; r += 1) {
                console.log(this.bricks[c][r])
              if (this.bricks[c][r].status === true) {
                const brick = this.bricks[c][r]
                brick.render(ctx);
              }
            }
        }
    }
}
export default Bricks;
// undefined , 0 
// <Comparison>
// == <- values are the same & don't need to be same type
// === <- value on the left & value on the right are same value & same type
// <Assignment>
// collison detection <- = set equal to 