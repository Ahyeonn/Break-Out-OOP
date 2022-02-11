import Sprite from './Sprite.js'
import {canvas} from './index.js'

class Paddle extends Sprite{
    constructor(x = (canvas.width - 75) /2, y = canvas.height - 10, width = 75, height = 10, color = 'red'){
        super(x, y, width, height, color)
    }
}
export default Paddle