import { describe, expect, it } from "vitest";
import {fizzbuzz} from "../src/fizzbuzz"



describe('fizzbuzz', (n) => {
    // it('fizzbuzz shold be a function', () => {
    //     expect(typeof fizzbuzz).toBe('function')
    // }) <= redundand test

    it('should throw if not number is provided as params', () => {
        expect(() => fizzbuzz()).toThrow()
    })

    it('should throw specific error if not number is provided as params', () => {
        expect(() => fizzbuzz()).toThrow(/number/)
    })

    it('should throw specific error if not number is provided as params', () => {
        expect(() => fizzbuzz(NaN)).toThrow(/number/)
    })

    it("should return 1 if number is 1", ()=> {
        expect(fizzbuzz(1)).toBe(1)
    })

    it("should return 2 if number is 2", ()=> {
        expect(fizzbuzz(2)).toBe(2)
    })

    it("should return fizz if number is 3", ()=> {
        expect(fizzbuzz(3)).toBe("fizz")
    })

    it("should return fizz if number is multiple of 3", ()=> {
        expect(fizzbuzz(6)).toBe("fizz")
        expect(fizzbuzz(9)).toBe("fizz")
        expect(fizzbuzz(12)).toBe("fizz")
    })

    // it("should return 4 if number is 4", ()=> {
    //     expect(fizzbuzz(4)).toBe(4)
    // }) <= test already covered

    it("should return buzz if number is multiple of 5", ()=> {
        expect(fizzbuzz(5)).toBe("buzz")
        expect(fizzbuzz(10)).toBe("buzz")
        expect(fizzbuzz(20)).toBe("buzz")
    })

    it("should return fizzbuzz if number is multiple of 3 and 5", ()=> {
        expect(fizzbuzz(15)).toBe("fizzbuzz")
    })







})