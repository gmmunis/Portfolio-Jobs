import moment from 'moment';

export const formatDate = date => moment.unix(date / 1000).format('DD/MM/YYYY');
export const fromNow = date => moment.unix(date / 1000).fromNow();

export const shortify = (text, maxLengh = 50) => {
  if (!text) { return ''; }
  if (text.length <= maxLengh ) { return text; }

  return text.substr(0, maxLengh) + '...';
}