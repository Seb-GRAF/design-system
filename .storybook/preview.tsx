import React from 'react';
import type { Preview } from '@storybook/react';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFnsV3';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { fr } from 'date-fns/locale';


// @ts-ignore
// const withLocalizationProvider = (Story, context) => {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
//       <Story {...context} />
//    </LocalizationProvider>
//   );
// };

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'figma-light',
      values: [
        {
          name: 'figma-light',
          value: '#f2f2f2',
        },
        {
          name: 'figma-dark',
          value: '#1c1c1e',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: {
        state: 'open',
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  // decorators: [
  //   // (Story) => {
  //   //   return <Story />;
  //   // },
  //   withLocalizationProvider,
  // ],
};

export default preview;
