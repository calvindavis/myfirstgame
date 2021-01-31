import Phaser from "phaser";

export default class MyFirstScene extends Phaser.Scene {
	private _sprite: Phaser.GameObjects.Sprite;

	public preload(): void {
		this.load.image({
			key: "blob",
			url: "blob.png",
		});
	}

	public create(): void {
		this._sprite = this.add.sprite(
			Number(this.game.config.width) / 2,
			Number(this.game.config.height) / 2,
			"blob"
		);
	}

	public update(): void {
		this._sprite.rotation += 0.01;
	}
}
