import { Mesh, Object3D, SphereGeometry } from 'three';

import { createMaterial, generateRandomNumber } from '../helpers/HelperFunctions';

class Particle {
    private mass: number;
    private geometry!: SphereGeometry;
    private particle!: Object3D;
    private particles: Object3D[] = [];
    private coordinateRange = 10;

    constructor(mass: number = 1,) {
        this.mass = mass;
    }

    createParticle() {
        this.geometry = new SphereGeometry(generateRandomNumber(0.1, 0.5), 32, 32);
        this.particle = new Mesh(this.geometry, createMaterial());
        this.particle.position.set(this.generateRandomCoordinate(), this.generateRandomCoordinate(), this.generateRandomCoordinate(),);
        this.particles.push(this.particle);
    }

    generateRandomCoordinate() {
        return generateRandomNumber(-this.coordinateRange, this.coordinateRange);
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
