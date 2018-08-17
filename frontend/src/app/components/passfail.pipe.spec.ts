import { PassfailPipe } from './passfail.pipe';

describe('PassfailPipe', () => {
    const pipe = new PassfailPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('makes a 0 into "Failed"', () => {
        expect(pipe.transform(0)).toBe('Failed');
    });

    it('makes a 1 into "Passed"', () => {
        expect(pipe.transform(1)).toBe('Passed');
    });

    it('makes a 2 into "Skipped"', () => {
        expect(pipe.transform(2)).toBe('Skipped');
    });
});
