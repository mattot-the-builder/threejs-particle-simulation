import { AxesHelper, GridHelper, Object3D } from 'three';

class AxisGridHelper {
    private units: number;
    private axes: AxesHelper;
    private grid: GridHelper;
    private _visible: boolean = false;

    constructor(node: Object3D, units: number = 10) {
        this.units = units;

        const axes = new AxesHelper();
        // axes.material.depthTest = false;
        axes.renderOrder = 2;  // after the grid
        node.add(axes);

        const grid = new GridHelper(this.units, this.units);
        grid.material.depthTest = false;
        grid.renderOrder = 1;
        node.add(grid);

        this.grid = grid;
        this.axes = axes;
        this.visible = false;
    }

    get visible() {
        return this._visible;
    }

    set visible(v: boolean) {
        this._visible = v;
        this.grid.visible = v;
        this.axes.visible = v;
    }
}

export default AxisGridHelper;
