import { createAsyncFn } from "../package/jest-async-fn";
import { delay } from "./tools/delay";

it("case-002", async () => {
    const [resolved, fn] = createAsyncFn((message: string) => {});

    const message = "test";

    delay(() => fn(message));

    await resolved;

    expect(fn).toHaveBeenCalledWith(message);
});
