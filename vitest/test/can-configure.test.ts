import { describe, expect, it } from "vitest";


const canConfigure = (from): void => {
    if (from === undefined) throw new Error('from is required')
    if (typeof from!=='string') throw new Error('from must be a string')
}
describe("canReconfigure", (): void => {
    it('should be a fuction', (): void => {
     expect(canConfigure).toBeTypeOf('function')
    })

    it('should trow if first parameter is missing', (): void => {
        expect((): void => canConfigure()).toThrow()
    })

    it('should trow if first parameter is not a string', (): void => {
        expect((): void => canConfigure(2)).toThrow()
    })
})