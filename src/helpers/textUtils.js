import numeral from 'numeral';
import moment from 'moment';

export const adjustLable = label =>
  label.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();

export const formatCurrency = value => numeral(value).format('0,0[.]00 $');
export const formatDate = date => moment(date).calendar();
