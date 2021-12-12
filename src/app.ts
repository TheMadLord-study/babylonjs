import {
	Engine,
	Scene,
	ArcRotateCamera,
	HemisphericLight,
	Vector3,
	MeshBuilder,
	Mesh,
} from 'babylonjs';

class App {
	constructor() {
		const createScene = function () {
			const scene = new Scene(engine);

			const camera = new ArcRotateCamera(
				'camera',
				-Math.PI / 2,
				Math.PI / 2.5,
				3,
				new Vector3(0, 0, 0),
				scene
			);
			camera.attachControl(canvas, true);

			const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

			const box = MeshBuilder.CreateBox('box', {});

			return scene;
		};

		const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement; // Get the canvas element
		const engine = new Engine(canvas, true); // Generate the BABYLON 3D engine

		// Add your code here matching the playground format

		const scene = createScene(); //Call the createScene function

		// Register a render loop to repeatedly render the scene
		engine.runRenderLoop(function () {
			scene.render();
		});

		// Watch for browser/canvas resize events
		window.addEventListener('resize', function () {
			engine.resize();
		});
	}
}
new App();
