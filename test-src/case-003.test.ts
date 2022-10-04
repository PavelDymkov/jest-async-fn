import { createAsyncFn } from "../package/jest-async-fn";
import { delay } from "./tools/delay";

it("case-003", async () => {
    const [resolved, fn] = createAsyncFn();

    const arg1 = 1;
    const arg2 = 1;

    delay(() => {
        fn(arg1);
        fn(arg2);
    });

    await resolved;

    expect(fn).toHaveBeenCalledTimes(2);

    const [[actual1], [actual2]] = fn.mock.calls;

    expect(actual1).toBe(arg1);
    expect(actual2).toBe(arg2);
});
