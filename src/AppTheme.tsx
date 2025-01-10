import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { theme } from './theme'
import { CssBaseline } from '@mui/material';
import ColorModeSelect from './theme/ColorModeSelect';
interface AppThemeProps {
  children: React.ReactNode;

}
const AppTheme: React.FC<AppThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;