import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputDatePicker from '../../lib/components/InputDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFnsV3';
import { fr } from 'date-fns/locale';

const meta = {
  title: 'Components/Input Date Picker',
  component: InputDatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      canvas: { sourceState: 'shown' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputDatePicker>;

export default meta;
type Story = StoryObj<typeof InputDatePicker>;

export const Default: Story = {
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
      <InputDatePicker />
    </LocalizationProvider>
  ),
};
