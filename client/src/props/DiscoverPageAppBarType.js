import { func, string, shape } from 'prop-types';

const DiscoverPageAppBarType = shape({
  clickEffect: func,
  status: string,
  setSearchItem: func,
  search: string,
});

export default DiscoverPageAppBarType;
