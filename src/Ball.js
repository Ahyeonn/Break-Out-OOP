import Sprite from './Sprite.js'
import {canvas} from './index.js'

class Ball extends Sprite{
    constructor(x = canvas.width / 2, y = canvas.height - 30, radius = 10, color = 'red') {
        super(x, y, 0 , 0, color)
        this.radius = radius;
        this.dx = 2
        this.dy = -2
        this.move()
    }

    move() {
        this.x += this.dx
        this.y += this.dy
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath;
    }
}
export default Ball
