export function delay(callback: () => void): void {
    setImmediate(callback);
}
