class Grimpan {
    static instance;
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('canvas is not found');
        }
    }
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Grimpan(document.querySelector('#canvas'));
        }
        return this.instance;
    }
}
export default Grimpan;
