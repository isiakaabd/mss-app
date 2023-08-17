import { PaletteMode } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const red = '#F44336';
const lightTextColor = '#333';
const lightSecondaryTextColor = '#757575';
const lightBgColor = '#F5F5F5';

const darkPrimary = '#1C2458';
const darkSecondary = '#1C2458';
const darkTextColor = '#FFF';
const darkSecondaryTextColor = '#B0BEC5';
const darkBgColor = '#121212 ';
const info = '#4051BF';
const secondaryPrimary = '#B78B23';
const secondarySeconadry = '#5A430C';
const getDesignTokens = (mode: PaletteMode) => ({
  // Define the color palette
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: darkPrimary,
            secondary: secondaryPrimary,
          },
          secondary: {
            main: darkSecondary,
            secondary: secondarySeconadry,
          },
          error: {
            main: red,
          },
          info: {
            main: info,
          },
        }
      : {
          primary: {
            main: darkPrimary,
            secondary: secondaryPrimary,
          },
          secondary: {
            main: darkSecondary,
            secondary: secondarySeconadry,
          },
          error: {
            main: red,
          },
          info: {
            main: info,
          },
        }),
    ...(mode === 'dark'
      ? {
          background: {
            default: darkBgColor,
            paper: deepOrange[900],
          },
        }
      : {
          background: {
            default: lightBgColor,
            // paper: yellow[900],
          },
        }),
    text: {
      ...(mode === 'light'
        ? {
            primary: lightTextColor,
            secondary: lightSecondaryTextColor,
          }
        : {
            primary: darkTextColor,
            secondary: darkSecondaryTextColor,
          }),
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(', '),
    fontSize: 10,
    htmlFontSize: 10,

    h1: {
      fontSize: 'clamp(2rem, 8vw, 2.275rem)',
      fontWeight: 700,
    },
    h2: {
      fontSize: 'clamp(1.8rem, 8vw, 2.7rem)',
      fontWeight: 700,
    },
    h3: {
      fontSize: 'clamp(1.8rem, 8vw, 2.25rem)',
      fontWeight: 500,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: 'clamp(1.3rem, 2vw, 1.5rem)',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.7,
    },
    body2: {
      fontSize: 'clamp(1.3rem, 2vw, 1.5rem)',
      fontWeight: 500,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'h3',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
export default getDesignTokens;
