import useLocalStorage from './useLocalStorage';

export default function useCalculator(): {
  calculator: string;
  addCalculator: (calculator: string) => void;
} {
  const [calculator, setCalculator] = useLocalStorage<string>('calculator', '');
  function addCalculator(calculator: string) {
    setCalculator(calculator);
  }

  return {
    calculator,
    addCalculator,
  };
}
