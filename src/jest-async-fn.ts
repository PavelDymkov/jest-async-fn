export function createAsyncFn<Fn extends (...args: any[]) => any>(
    fn?: Fn,
): Fn extends (...args: infer Args) => infer T
    ? [Promise<T>, jest.Mock<T, Args>]
    : [Promise<void>, jest.Mock] {
    let mockFn: jest.Mock;

    const promise = new Promise<unknown>(resolve => {
        mockFn = jest.fn((...args: unknown[]): unknown => {
            const value = fn?.(...args) as unknown;

            resolve(value);

            return value;
        });
    });

    return [promise, mockFn!] as any;
}
