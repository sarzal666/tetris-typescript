export default class GameScore {
    score:number = 0;

    constructor( score?:number ) {
        if ( score && isFinite(score) ) {
            this.score = score;
        }
    }
}