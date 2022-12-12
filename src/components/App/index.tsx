import { useCallback, useEffect, useRef, useState } from "react";
import { AppContainer } from "./styles";

export function App() {
  const valorA = useRef<HTMLInputElement>(null);
  const valorB = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<number>(0);

  const clearInputs = (): void => {
    valorA!.current!.value = "";
    valorB!.current!.value = "";
  };

  const handleCalc = useCallback(() => {
    setResult(0);
    const total =
      Number(valorA?.current?.value) + Number(valorB?.current?.value);
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
            <input ref={valorA} type="number" />
            <input ref={valorB} type="number" />
            <div className="group-buttons">
              <button onClick={handleCalc}>Somar</button>
              <button type="reset">Limpar Campos</button>
            </div>
            <p>Result: {result}</p>
          </form>
        </div>
      </>
    </AppContainer>
  );
}
