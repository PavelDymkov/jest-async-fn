import { createAsyncFn } from "../package/jest-async-fn";
import { delay } from "./tools/delay";

it("case-001", async () => {
    const [resolved, fn] = createAsyncFn();

    delay(fn);

    await resolved;

    expect(fn).toHaveBeenCalled();
});
