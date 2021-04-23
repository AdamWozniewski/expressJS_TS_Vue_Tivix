const getCookie = (cname: string) => {
    const cookies = Object.fromEntries(
        document.cookie.split(/; /).map(c => {
            const [key, v] = c.split('=', 2);
            return [key, decodeURIComponent(v)];
        }),
    );
    console.log(cookies)
    return cookies[cname] || '';
}
export default getCookie