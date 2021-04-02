import { useState } from "react";

const useFlip = (initialVal = true) => {
    const [value, setValue] = useState(initialVal);
    const toggle = () => {
        setValue(val => !val);
    }

    return [value, toggle];
}

export default useFlip;