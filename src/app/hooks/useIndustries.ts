import useLocalStorage from './useLocalStorage';

export default function useIndustries(): {
  industries: string[];
  addIndustrie: (industrie: string) => void;
} {
  const [industries, setIndustries] = useLocalStorage<string[]>(
    'industries',
    []
  );
  function addIndustrie(industrie: string) {
    setIndustries([...industries, industrie]);
  }

  return {
    industries,
    addIndustrie,
  };
}
