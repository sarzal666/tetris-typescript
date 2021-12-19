import './styles/style.scss';
import Game from "./Classes/Game";
import GameMap from "./Classes/GameMap";
import GameUI from "./Classes/GameUI";
import GameScore from "./Classes/GameScore";
//create simple ui
const uiPanel: HTMLElement | null = document.querySelector('#ui-panel');
const playBtn: HTMLElement | null = document.querySelector('#start-game');
const canvas: HTMLCanvasElement | null =document.querySelector('#board');

if (uiPanel && playBtn && canvas) {
    const gameUI = new GameUI(uiPanel, playBtn);

    const game: Game = new Game(
        new GameMap(canvas, true),
        gameUI,
        new GameScore(),
    );

    game.init();

} else throw new Error("can not start game");


