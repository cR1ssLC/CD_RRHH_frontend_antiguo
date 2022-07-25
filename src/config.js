const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: '',
    defaultPath: '/main/main-page',
    fontFamily: `'Poppins', sans-serif`,
    borderRadius: 12,
    API_SERVER: 'http://127.0.0.1:8000/api/'
    /* jwt: {
        secret: 'SECRET-KEY',
        timeout: '1 days'
    } */
};

export default config;
