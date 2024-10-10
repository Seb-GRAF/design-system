import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { fr } from 'date-fns/locale';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFnsV3';


function InputDatePicker() {
  return (
    <DatePicker label="Basic date picker" />
  );
}

export default InputDatePicker;
