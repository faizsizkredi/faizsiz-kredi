
const BASE_URL = 'https://faizsizkrediverenbankalar.com';

export const getCanonicalUrl = (path: string = '') => {
  return `${BASE_URL}${path}`;
};

export const getAlternateUrls = () => {
  return {
    homepage: getCanonicalUrl('/'),
    current: getCanonicalUrl(window.location.pathname)
  };
};
