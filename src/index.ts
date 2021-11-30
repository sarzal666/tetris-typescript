import './styles/style.scss';

//create simple ui
const uiPanel: HTMLElement | null = document.querySelector('#ui-panel');
const playBtn: HTMLElement | null = document.querySelector('#start-game');
const canvas: HTMLCanvasElement | null =document.querySelector('#board');

enum Units {
    ROWS = 20,
    COLS = 10,
    BOX_SIZE = 30,
}

playBtn?.addEventListener("click", ():void => {
    //hide ui

    if (uiPanel) {
        uiPanel.style.display = "none";
    } else throw new Error("can not start game");

    //draw map
    if (canvas) {
        canvas.style.display = "block";
        canvas.width = Units.COLS * Units.BOX_SIZE;
        canvas.height = Units.ROWS * Units.BOX_SIZE;

    } else throw new Error("can not start game");

    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    for (let i = 0; i < Units.COLS; i++) {
        ctx.beginPath();
        ctx.moveTo(i * Units.BOX_SIZE, 0);
        ctx.lineTo(i * Units.BOX_SIZE, Units.ROWS * Units.BOX_SIZE);

        ctx.strokeStyle = "#fff";
        ctx.stroke();
    }

    for (let i = 0; i < Units.ROWS; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * Units.BOX_SIZE);
        ctx.lineTo(Units.COLS * Units.BOX_SIZE, i * Units.BOX_SIZE);

        ctx.strokeStyle = "#fff";
        ctx.stroke();
    }



});
