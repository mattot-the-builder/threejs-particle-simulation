import './style.css'
import { BoxGeometry, Camera, Mesh, MeshBasicMaterial, Object3D, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

class ThreeApp {
    private canvas: HTMLElement;
    private renderer!: WebGLRenderer;
    private scene!: Scene;
    private camera!: Camera;
    private cube: Object3D;

    constructor(canvas: HTMLElement) {
        this.canvas = canvas;
        this.init();

        this.cube = this.createCube();
        this.scene.add(this.cube);

        // Bind animate to the current instance
        this.animate = this.animate.bind(this);

        this.renderer.render(this.scene, this.camera);
    }

    init() {
        //Initialization
        this.renderer = new WebGLRenderer({ antialias: true, canvas });
        this.scene = new Scene();

        this.camera = new PerspectiveCamera(75, 2, 0.1, 5);
        this.camera.position.z = 2;
    }

    animate(time: number) {
        time *= 0.001;  // convert time to seconds

        this.cube.rotation.x = time;
        this.cube.rotation.y = time;

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate);
    }

    resize() { }

    createCube() {
        // Objects
        const boxGeometry = new BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({ color: 0x44aa88 });
        const cube = new Mesh(boxGeometry, material);
        return cube;
    }
}

const canvas = document.querySelector('#scene')! as HTMLCanvasElement;

const app = new ThreeApp(canvas);
requestAnimationFrame(app.animate);
