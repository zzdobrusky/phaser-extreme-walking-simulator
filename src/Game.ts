module Game {
    export class ExtremeWalkingSimulator {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload
            });
        }

        preload() {
            // Graphics
            this.game.load.image("title", "/assets/ui/title_screen.png");
            this.game.load.image("title", "/assets/ui/game_over.png");
            this.game.load.image("scene", "/assets/sprites/scene720p.png");

            // Spritesheets
            this.game.load.atlasXML("HERO_WALKING", "/assets/sprites/hero_walking.xml");
            this.game.load.atlasXML("HERO_IDLE", "/assets/sprites/hero_idle.xml");

            // Audio
            this.game.load.audio("TITLE_SONG", ["/assets/sounds/title_song.mp3", "/assets/sounds/title_song.ogg", "/assets/sounds/title_song.wav"]);

        }

        create() {

        }

    }
}