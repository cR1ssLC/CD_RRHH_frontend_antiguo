import { createTheme } from '@mui/material/styles';

// assets
import colors from 'assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
    const color = colors;

    const themeOption = {
        colors: color,
        // color titulos
        heading: color.successDark,
        // fondo de las cards
        paper: color.paper,
        // fondo del header y side
        backgroundDefault: color.darkBackground,
        // fondo del dashboard
        background: color.secondaryLight,
        // color de la letras del header side y el texto de las cards
        darkTextPrimary: color.darkTextPrimary,
        // color subtitulos
        darkTextSecondary: color.darkTextSecondary,
        // color subtitulo pequeño
        textDark: color.grey900,
        // color de letra cuando el cursor selecciona o esta encima
        menuSelected: color.darkPrimaryLight,
        // fondo de boton seleccionado
        menuSelectedBack: color.darkLevel1,
        // color linea divisora
        divider: color.grey200,
        customization
    };

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
};

export default theme;
