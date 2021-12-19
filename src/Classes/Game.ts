import GameMap from "./GameMap";
import GameScore from "./GameScore";
import GameUI from "./GameUI";

export default class Game {
    private readonly gameMap: GameMap;
    private readonly gameUI: GameUI;
    private readonly gameScore: GameScore;
    isPaused: boolean = false;
    hasStarted:boolean = false

    constructor(gameMap: GameMap, gameUI: GameUI, gameScore: GameScore) {
        this.gameMap = gameMap;
        this.gameUI = gameUI;
        this.gameScore = gameScore;
    }

    init() {
        //show basic UI
        this.displayUI();

        //handle stat game button
        this.gameUI.handlePlayBtn( () => {
            this.gameUI.hideUIPanel();
            this.gameMap.draw();
        });
    }


    private displayUI() {
        this.gameUI.showUIPanel();
    }
}