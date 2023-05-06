import { GameModel } from "../models/GameModel";
import { View } from "../../library/abstract/mvc/View";

export class GameView implements View {

    public constructor(
        public context: CanvasRenderingContext2D,
    ) {

    }

    public update(delta_ms: number) : void{
        // do nothing
    }

    public render(model: GameModel): void {
        this.reset_canvas_state();
        this.context.fillText("Example", 400, 300);
    }

    /**
     * Reset default canvas state and paint the background
     */
    protected reset_canvas_state() {
        this.context.fillStyle = "#000";
        this.context.fillRect(0, 0, 800, 600);
        this.context.fillStyle = "#fff";
        this.context.font = "16px monospace";
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.imageSmoothingEnabled = false;
    }
}