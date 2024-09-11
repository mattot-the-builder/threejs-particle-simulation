import './style.css'

import { BoxGeometry, DoubleSide, GridHelper, Mesh, MeshPhongMaterial, Object3D, Points, Scene, SphereGeometry } from 'three';

import ThreeApp from './libs/ThreeApp';
import Particle from './libs/Particle';
import { makeAxisGrid } from './helpers/HelperFunctions';

class Gravity {
    private instance: Gravity;
    private GRAVITY_ACCELERATION: number = 9.80665; // in m/s^2

    private constructor() {
        this.instance = new Gravity();
    }

    getInstance() {
        if (!this.instance) {
            this.instance = new Gravity();
        }

        return this.instance;
    }
}

function main() {
    const canvas = document.querySelector('#scene')! as HTMLCanvasElement;
    const app = new ThreeApp(canvas);

    let particle = new Particle(0.2, 0, 0, 0, 1);
    particle.createParticle();

    particle.getParticles().forEach((p) => {
        app.addToScene(p);
    })

    makeAxisGrid(app.getScene(), 'scene');
}

main();
