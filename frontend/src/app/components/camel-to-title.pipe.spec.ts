import { CamelToTitlePipe } from './camel-to-title.pipe';

describe('CamelToTitlePipe', () => {
    const pipe = new CamelToTitlePipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('turns camel case to title case with spaces', () => {
        expect(pipe.transform('revatureTestSuite')).toBe('Revature Test Suite');
    });

});
