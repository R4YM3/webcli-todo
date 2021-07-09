import { init, programs as defaultPrograms } from 'web-cli-interpreter';
import { Todo, VERSION } from '../index';

const FAKE_INFO = 'FAKE_INFO';

export const interpret = init({
    programs: [Todo],
});

describe('todo', () => {
    it('should return version', () => {
        interpret('todo').then((res) => {
            expect(res).toContain(VERSION);
        });
    });
});

