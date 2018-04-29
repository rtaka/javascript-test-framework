import App from "./app";

const app = new App();

test('sum', () => {
    expect(app.sum(1, 2)).toBe(3);
});