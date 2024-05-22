import {describe, it, expect} from 'bun:test';
import {sayHello} from '../src/hello.ts';

describe('Bun Test Runner', () => {
    it('should support unit test', async () => {
        const response = sayHello('Farhan Huda');
        expect(response).toBe('Hello Farhan Huda');
    })
})