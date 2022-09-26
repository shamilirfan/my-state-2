import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="w-full h-screen mt-11">
            <p className="text-4xl mb-10">{counter}</p>
            <button
                type="button"
                className="w-[25%] h-[25%] border bg-sky-300 text-3xl text-white hover:bg-sky-400 mr-4"
                onClick={() => setCounter(counter + 100)}>
                Donate 100 tk
            </button>
            <button
                type="button"
                className="w-[25%] h-[25%] border bg-green-300 text-3xl text-violet-500 hover:bg-green-400 mr-4"
                onClick={() => setCounter(counter + 200)}>
                Donate 200 tk
            </button>
            <button
                type="button"
                className="w-[25%] h-[25%] border bg-violet-300 text-3xl text-white hover:bg-violet-400 mr-4"
                onClick={() => setCounter(counter - 100)}>
                Spend 100 tk
            </button>
            <button
                type="button"
                className="w-[25%] h-[25%] border bg-rose-300 text-3xl text-white hover:bg-rose-400 mr-4 mt-4"
                onClick={() => setCounter(counter * 10)}>
                Donate 2 * 5
            </button>
            <button
                type="button"
                className="w-[25%] h-[25%] border bg-teal-300 text-3xl text-white hover:bg-teal-400 mr-4"
                onClick={() => setCounter(counter * 10)}>
                Donate * 10
            </button>
            <button
                type="button"
                className="w-[25%] h-[25%] border bg-orange-200 text-3xl text-white hover:bg-orange-300 mr-4"
                onClick={() => setCounter(counter / 10)}>
                Spend / 10
            </button>
        </div>
    );
}
export default Counter;