import App from "./app";

describe('App suite', () => {
    const app = new App();

    it('sum', () => {
        expect(app.sum(1, 2)).toEqual(3);
    });
});