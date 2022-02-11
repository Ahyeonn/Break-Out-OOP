import Sprite from './Sprite.js'
import {canvas} from './index.js'

class Lives extends Sprite{
    constructor(x, y, color = 'black', font = '18px Arial'){
        super(x, y, 0, 0, color)
        this.font = font
        this.lives = 3
    }

    render(ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(`Lives: ${+this.lives}`, canvas.width - 70, 20);
    }

    loseLife() {
        this.lives -= 1;
    }

    reset() {
        document.location.reload();
    }
}
export default Lives