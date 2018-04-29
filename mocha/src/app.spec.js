import { expect } from 'chai';
import sinon from 'sinon';
import App from './app';

describe('App suite', () => {
    const app = new App();

    it('sum', () => {
        expect(app.sum(1, 2)).to.equal(3);
    });
});