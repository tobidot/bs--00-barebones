import { Game } from "./game/base/Game";
import * as tgt from "./library/index";

(async () => {
    const app = tgt.getElementById('app', HTMLDivElement);
    tgt.prevent_default(app);
    let game: Game = new Game(app);
    game.run();
})();