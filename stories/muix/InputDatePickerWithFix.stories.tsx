import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputDatePickerWithFix from '../../lib/components/InputDatePickerWithFix';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFnsV3';
import { fr } from 'date-fns/locale';

const meta = {
  title: 'Components/Input Date Picker With Fix',
  component: InputDatePickerWithFix,
  parameters: {
    layout: 'centered',
    docs: {
      canvas: { sourceState: 'shown' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputDatePickerWithFix>;

export default meta;
type Story = StoryObj<typeof InputDatePickerWithFix>;

export const Default: Story = {
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
      <InputDatePickerWithFix />
    </LocalizationProvider>
  ),
};
