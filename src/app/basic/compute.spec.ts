import { checkPrime,computePrimes } from "./compute";

describe('Check Prime', () => {
    it('should return true if number is prime', () => {
        expect(checkPrime(5)).toBe(true);
    });
    it('should return false if number is prime', () => {
        expect(checkPrime(8)).toBe(false);
    });
});

describe('computePrimeNumbers', () => {
    it('should contain prime numbers only', () => {
        const result = computePrimes(1,10)
        expect(result).toContain(2);
        expect(result).toContain(3);
        expect(result).toContain(5);
        expect(result).toContain(7);
    });
    it('should contain prime numbers only', () => {
        const result = computePrimes(10,1)
    
        expect(result).toContain(2);
        expect(result).toContain(3);
        expect(result).toContain(5);
        expect(result).toContain(7);
        
    });
});


