import { sum } from "../sum "

test("Sum fun should calculate sum of 2 numbers",()=>{
    const result = sum(5,10);
    expect(result).toBe(15);
})