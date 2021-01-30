import Phaser from "phaser";

export default class MyFirstGame extends Phaser.Game {
	constructor() {
		super({
			width: 320,
			height: 240,
			dom: {
				createContainer: true,
			},
		});
	}
}
