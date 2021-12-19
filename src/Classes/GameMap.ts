import Units from "../Enums/UnitsEnum";

export default class GameMap {

    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private devMode:boolean = false;
    constructor(canvas: HTMLCanvasElement, devMode?:boolean) {
        this.canvas = canvas;
        this.ctx =  canvas.getContext("2d")!;

        if (devMode || devMode === false ) {
            this.devMode = devMode;
        }
    }

    draw( blocks?:Array<object> ) {
        this.drawBoard();
    }

    drawBoard() {
        this.canvas.classList.remove("hide");
        this.canvas.width = Units.COLS * Units.BOX_SIZE;
        this.canvas.height = Units.ROWS * Units.BOX_SIZE;

        if ( this.devMode ) {
            for (let i = 0; i < Units.COLS; i++) {
                this.ctx.beginPath();
                this.ctx.moveTo(i * Units.BOX_SIZE, 0);
                this.ctx.lineTo(i * Units.BOX_SIZE, Units.ROWS * Units.BOX_SIZE);

                this.ctx.strokeStyle = "#fff";
                this.ctx.stroke();
            }

            for (let i = 0; i < Units.ROWS; i++) {
                this.ctx.beginPath();
                this.ctx.moveTo(0, i * Units.BOX_SIZE);
                this.ctx.lineTo(Units.COLS * Units.BOX_SIZE, i * Units.BOX_SIZE);

                this.ctx.strokeStyle = "#fff";
                this.ctx.stroke();
            }
        }
    }
}