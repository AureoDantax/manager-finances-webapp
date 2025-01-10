import { createTheme } from '@mui/material/styles';
import { colorSchemes, typography, shadows, shape } from './themePrimitives';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';
import { inputsCustomizations } from './customizations/inputs';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: 'template',
    },
    colorSchemes,
    typography,
    shadows,
    shape,
    components: {
        ...navigationCustomizations,
        ...surfacesCustomizations,
        ...inputsCustomizations,
        ...dataDisplayCustomizations,
        ...feedbackCustomizations,
    },
});

export default theme;