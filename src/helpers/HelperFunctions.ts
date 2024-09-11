import { DoubleSide, MeshPhongMaterial, Object3D, } from 'three';
import GUI from 'lil-gui';
import AxisGridHelper from './AxisGridHelper';

const gui = new GUI();

function makeAxisGrid(node: Object3D, label: string, units: number = 10) {
    const helper = new AxisGridHelper(node, units);
    gui.add(helper, 'visible').name(label);
}

function createMaterial() {
    const material = new MeshPhongMaterial({
        side: DoubleSide,
    });

    const hue = Math.random();
    const saturation = 1;
    const luminance = .5;
    material.color.setHSL(hue, saturation, luminance);

    return material;
}

function generateRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export { makeAxisGrid, createMaterial, generateRandomNumber };
