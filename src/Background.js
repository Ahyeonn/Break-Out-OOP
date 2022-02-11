import Sprite from './Sprite.js'

const canvas = document.getElementById('myCanvas');

class Background extends Sprite {
    constructor(x, y, width = canvas.width, height = canvas.height, color = 'orange'){
        super(x, y, width, height, color)
    }
}
export default Background