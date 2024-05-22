import {describe, it, expect} from 'bun:test';
import { User } from '../packages/user/user';

describe('User Package', () => {
    it('should accessed from main package', async () => {
        const user = new User(1, 'Farhan');
        expect(user.id).toBe(1);
        expect(user.name).toBe('Farhan');
    })
})