import { DatesPipe } from './dates.pipe';

describe('DatesPipe', () => {
    it('create an instance', () => {
        const pipe = new DatesPipe();
        expect(pipe).toBeTruthy();
    });

    it('returns a formatted string', () => {
        const pipe = new DatesPipe();
        expect(pipe.transform(new Date('2015-03-10T15:41:58.000'))).toBe('Mar 10 2015, 03:41:58');
    });
});
