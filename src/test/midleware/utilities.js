
let Add = (num1, num2) => num1 + num2;

export const TestMiddleware = (assert) => {
    describe("test middleware...", () => {
        it("add 2 number", () => {
            assert.equal(Add(1, 3), 4);
        })
    })
}


