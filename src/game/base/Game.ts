import { GameController } from "../controllers/GameController";
import { GameModel } from "../models/GameModel";
import { GameView } from "../views/GameView";
import * as tgt from "../../library/index";

export class Game {

    public controller: GameController;
    public view: GameView;
    public model: GameModel;

    public constructor(app: HTMLElement) {
        const canvas = tgt.getElementByQuerySelector(app, "canvas", HTMLCanvasElement);
        const context = canvas.getContext("2d");
        if (context === null) throw new Error("No 2d context found");
        this.view = new GameView(context);
        this.model = new GameModel();
        this.controller = new GameController(this.model);
    }

    protected update(delta_ms: number) {
        this.controller.update(delta_ms);
        this.view.update(delta_ms);
        this.view.render(this.model);
    }

    public async run() {
        return new Promise<void>((resolve, reject) => {
            this.controller.newGame();
            let last_time_ms = 0;
            const frame = (timestamp_ms: number) => {
                this.update(timestamp_ms - last_time_ms);
                last_time_ms = timestamp_ms;
                if (this.controller.isGameOver()) {
                    resolve();
                } else {
                    requestAnimationFrame(frame);
                }
            }
            requestAnimationFrame(frame);
        });
    }
}