import './style.css'
import { BoxGeometry, Camera, DirectionalLight, Light, Mesh, MeshBasicMaterial, MeshPhongMaterial, Object3D, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

class ThreeApp {
    private canvas: HTMLElement;
    private renderer!: WebGLRenderer;
    private scene!: Scene;
    private camera!: Camera;

    private light!: Light;

    private cube: Object3D;

    constructor(canvas: HTMLElement) {
        this.canvas = canvas;
        this.init();

        this.cube = this.createCube();
        this.scene.add(this.cube);

        // Bind animate to the current instance
        this.animate = this.animate.bind(this);

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate);
    }

    init() {
        //Initialization
        this.renderer = new WebGLRenderer({ antialias: true, canvas });
        this.scene = new Scene();

        // Camera
        this.camera = new PerspectiveCamera(75, 2, 0.1, 5);
        this.camera.position.z = 2;

        // Light
        this.light = new DirectionalLight(0xffffff, 1);
        this.light.position.set(-1, 2, 4);
        this.addToScene(this.light);
    }

    animate(time: number) {
        time *= 0.001;  // convert time to seconds

        if (this.resize.call(this)) {
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
        }

        this.cube.rotation.x = time;
        this.cube.rotation.y = time;

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate);
    }

    resize() {
        const canvas = this.renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width = Math.floor(canvas.clientWidth * pixelRatio);
        const height = Math.floor(canvas.clientHeight * pixelRatio);
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            this.renderer.setSize(width, height, false);
        }
        return needResize;
    }

    addToScene(object: Object3D) {
        this.scene.add(object);
    }

    createCube() {
        // Objects
        const boxGeometry = new BoxGeometry(1, 1, 1);
        const material = new MeshPhongMaterial({ color: 0x44aa88 });
        const cube = new Mesh(boxGeometry, material);
        return cube;
    }
}

const canvas = document.querySelector('#scene')! as HTMLCanvasElement;

const app = new ThreeApp(canvas);
