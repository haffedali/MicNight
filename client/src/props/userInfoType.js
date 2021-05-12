import { shape, string, arrayOf } from 'prop-types';

const userInfoType = shape({
  displayName: string,
  tagLine: string,
  photoURL: string,
  socialLinks: arrayOf(string),
});

export default userInfoType;
