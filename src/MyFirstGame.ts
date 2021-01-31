import Phaser from "phaser";
import MyFirstScene from "./MyFirstScene";

export default class MyFirstGame extends Phaser.Game {
	constructor() {
		super({
			width: 640,
			height: 480,
			dom: {
				createContainer: true,
			},
			scene: MyFirstScene,
		});
	}
}
