import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';


type InputDatePickerWithFixProps = {
  dateAdapter?: any;
};

function InputDatePickerWithFix({ dateAdapter }: InputDatePickerWithFixProps) {
  return (
    <LocalizationProvider dateAdapter={dateAdapter}>
      <DatePicker />
    </LocalizationProvider>
  );
}

export default InputDatePickerWithFix;
