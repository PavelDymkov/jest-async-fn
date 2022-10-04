# jest-async-fn

![test: passed](https://raw.githubusercontent.com/PavelDymkov/jest-async-fn/main/badges/test.svg)
![license: ISC](https://raw.githubusercontent.com/PavelDymkov/jest-async-fn/main/badges/license.svg)

## Usage

```ts
import { createAsyncFn } from "jest-async-fn";

it("test", async () => {
    const [resolved, callback] = createAsyncFn();

    someAsyncFunctionWithCallback(callback);

    await resolved;

    expect(callback).toHaveBeenCalled();
});
```
