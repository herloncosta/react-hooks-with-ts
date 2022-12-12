import { useCallback, useEffect, useRef, useState } from "react";
import { AppContainer } from "./styles";

export function App() {
  const valueX = useRef<HTMLInputElement>(null);
  const valueY = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<number>(0);

  const clearInputs = (): void => {
    valueX!.current!.value = "";
    valueY!.current!.value = "";
  };

  const handleCalc = useCallback((e: any) => {
    e.preventDefault();
    setResult(0);
    const total =
      Number(valueX?.current?.value) + Number(valueY?.current?.value);
    setResult((prev) => prev + total);
    clearInputs();
  }, []);

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <AppContainer>
      <>
        <div className="container">
          <h1>Hooks</h1>
          <form action="#">
            <input ref={valueX} type="number" />
            <input ref={valueY} type="number" />
            <div className="group-buttons">
              <button onClick={handleCalc}>Sum</button>
              <button type="reset">Clear</button>
            </div>
            <p>Result: {result}</p>
          </form>
        </div>
      </>
    </AppContainer>
  );
}
