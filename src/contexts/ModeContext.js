import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const ModeContext = createContext('light');
export default ModeContext;

export function useModeContext() {
  return useContext(ModeContext);
}

export function ModeContextProvider({children}) {
  const [mode, setMode] = useState('light');

  const toggleMode = useCallback(function () {
    setMode(m => (m === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(
    () => ({
      mode,
      toggleMode,
    }),
    [mode, toggleMode],
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}
