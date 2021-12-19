export default class GameUI {
    uiPanel: HTMLElement;
    playBtn: HTMLElement;


    constructor( uiPanel: HTMLElement, playBtn: HTMLElement ) {
        this.uiPanel = uiPanel;
        this.playBtn = playBtn;
    }

    hideUIPanel() {
        this.uiPanel.classList.add("hide");
    }

    showUIPanel() {
        this.uiPanel.classList.remove("hide");
    }

    handlePlayBtn(func:Function) {
        this.playBtn.addEventListener( "click", event => func(event) );
    }
}