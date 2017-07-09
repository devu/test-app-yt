
import { VIDEO_LIKE, VIDEO_DISLIKE } from '../constants/index'

export function rateVideo(rating){
    return {
        type: rating
    }
}
