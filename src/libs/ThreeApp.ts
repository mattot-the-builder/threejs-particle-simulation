import { Camera, DirectionalLight, Light, Object3D, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

class ThreeApp {
    private canvas: HTMLElement;
    private renderer!: WebGLRenderer;
    private scene!: Scene;
    private camera!: PerspectiveCamera;

    private light!: Light;

    private objects: Object3D[] = [];

    constructor(canvas: HTMLElement) {
        this.canvas = canvas;
        this.init();

        // Bind animate to the current instance
        this.animate = this.animate.bind(this);

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate);
    }

    init() {
        //Initialization
        this.renderer = new WebGLRenderer({ antialias: true, canvas: this.canvas });
        this.scene = new Scene();

        // Camera
        this.camera = new PerspectiveCamera(75, 2, 1, 100);
        this.camera.position.set(20, 20, 20);
        this.camera.lookAt(0, 10, 0);

        // Light
        this.light = new DirectionalLight(0xffffff, 1);
        this.light.position.set(-1, 2, 4);
        this.scene.add(this.light);
    }

    animate(time: number) {
        time *= 0.001;  // convert time to seconds

        if (this.resize.call(this)) {
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
        }

        this.objects.forEach((object) => {
            if (object.position.y >= 0) {
                object.position.y -= 0.2;
            } else {
                object.position.y = 30;
            }
        });

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
        this.objects.push(object);
        this.scene.add(object);
    }

    getScene() {
        return this.scene;
    }
}

export default ThreeApp;
