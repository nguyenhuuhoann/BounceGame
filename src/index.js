import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import bomb from './assets/bomb.png';
import dude from './assets/dude.png';
import star from './assets/star.png';
import ground from './assets/platform.png';
import sky from './assets/sky.png';

class MyGame extends Phaser.Scene {
    constructor() {
        super();

    }


    preload() {
        this.load.image('logo', logoImg);
        this.load.image('sky', sky);
        this.load.image('ground', ground);
        this.load.image('star', star);
        this.load.image('bomb', bomb);
        this.load.spritesheet('dude', dude, {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create() {
        var player;
        var stars;
        var bombs;
        var platforms;
        var cursors;
        var score = 0;
        var gameOver = false;
        var scoreText;
        var gameOverText;
        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        //  Now let's create some ledges
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: MyGame
};

const game = new Phaser.Game(config);