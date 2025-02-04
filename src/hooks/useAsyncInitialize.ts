import { useEffect, useState } from "react";
import {TonClient} from "ton";

export function useAsyncInitialize<T>(
    func: () => Promise<T>,
    deps?: (TonClient | undefined)[]
) {
    const [state, setState] = useState<T | undefined>();
    useEffect(() => {
        (async () => {
            setState(await func());
        })();
    }, deps);

    return state;
}