import Sprite from './Sprite.js'

class Score extends Sprite{
    constructor(x, y, color = 'black', font = '18px Arial'){
        super(x, y, 0, 0, color)
        this.font = font
        this.score = 0
    }

    render(ctx) {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(`Score: ${+this.score}`, 8, 20);
    }

    update(points) {
        this.score += points;
    }

    reset() {
        document.location.reload();
    }

}
export default Score