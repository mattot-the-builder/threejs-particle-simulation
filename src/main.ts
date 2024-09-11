import './style.css'

import { BoxGeometry, GridHelper, Mesh, MeshPhongMaterial, Object3D } from 'three';
import GUI from 'lil-gui';

import ThreeApp from './libs/ThreeApp';
import AxisGridHelper from './helpers/AxisGridHelper';

function main() {
    const canvas = document.querySelector('#scene')! as HTMLCanvasElement;
    const app = new ThreeApp(canvas);
    const gui = new GUI();

    let cube: Object3D;

    // Objects
    {
        const boxGeometry = new BoxGeometry(1, 1, 1);
        const material = new MeshPhongMaterial({ color: 0x44aa88 });
        cube = new Mesh(boxGeometry, material);
        app.addToScene(cube);
    }

    function makeAxisGrid(node: Object3D, label: string, units: number = 10) {
        const helper = new AxisGridHelper(node, units);
        gui.add(helper, 'visible').name(label);
    }

    makeAxisGrid(app.getScene(), 'scene');
    makeAxisGrid(cube, 'cube', 10);
}

main();
