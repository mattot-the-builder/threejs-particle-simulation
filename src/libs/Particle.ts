import { Mesh, Object3D, SphereGeometry } from 'three';

import { createMaterial } from '../helpers/HelperFunctions';

class Particle {
    private mass: number;
    private geometry!: SphereGeometry;
    private particle!: Object3D;
    private particles: Object3D[] = [];

    constructor(radius: number, x: number, y: number, z: number, mass: number = 1,) {
        this.mass = mass;
        this.createParticle(radius, x, y, z);
    }

    createParticle(radius: number, x: number, y: number, z: number) {
        this.geometry = new SphereGeometry(radius, 32, 32);
        this.particle = new Mesh(this.geometry, createMaterial());
        this.particle.position.set(x, y, z);
        this.particles.push(this.particle);
    }

    getMass() {
        return this.mass;
    }

    setMass(mass: number) {
        this.mass = mass;
    }

    getParticles() {
        return this.particles;
    }
}

export default Particle;
