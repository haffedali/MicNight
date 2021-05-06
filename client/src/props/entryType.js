import {
  arrayOf,
  shape, number, string,
} from 'prop-types';

const entryType = shape({
  uid: number,
  photoURL: string,
  name: string,
  displayName: string,
  tagLine: string,
  socialLinks: arrayOf(string),
});

export default entryType;
