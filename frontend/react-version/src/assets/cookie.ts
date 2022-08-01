export const getCookie = (cname: string): string => {
  const cookies: { [key: string]: string } = Object.fromEntries(
    document.cookie.split(/; /).map((c) => {
      const [key, v] = c.split('=', 2);
      return [key, decodeURIComponent(v)];
    }),
  );
  return cookies[cname] || '';
};
