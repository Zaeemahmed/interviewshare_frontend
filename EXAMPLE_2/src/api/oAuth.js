import ClientOAuth2 from 'client-oauth2';
import jwtDecode from 'jwt-decode';
import * as Sentry from '@sentry/browser';
import config from '@/config/config';

export const AUTH_TOKEN = 'oAuth.token';
export const AUTH_STATE = 'oAuth.state';
export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA8sBK5mFThBo76M9teigb
ooVlEEtxAl3uSJf+XJfan9OyhmwYtb3KIf9Kioi88DnKs100N2NCv7KsKm0hzF5R
xWqJwxI0XlBWSFX02BtK7DHAhXkpby+cAcyBuZI8q4w1arGsbe5X02pZXIDcye9N
zw3d3CWMmlfPYYdi3dGw6PI33Bj0DD7QkKAQaBPtHLSgIoyicfetoWyX6VsZefeR
yleg9ItgufOSvo0MfoSqOCzeORjeXTTfJS2EO4MFozi74/ekxEVtT6NNGnuwEps3
q4qtewOUD1Cn+VcPi7KxhL3XnoqX3zvG1VuQNcQqsFTRKL10niUCmuaAO8Guq7hl
xOtWVUD0PYkx+21fjVNqqyMiQ3BPSs4nyt6Szq74RbvM5trZfF1VArYwdDh18JMV
lEEwrEgkY9FYklJW8B3jlMxkFdhOgfdmb4imFIKnS9kGxGOF65TDBfXJ88j7TirM
YzES8L6oTXCaEkuT1thOS+q9PcIHYeDcjE/h3PHHtwY0hf/NvFNGVkX6AOIemJvP
TSz7VVfAYkdElpI6neXXsJ6u6CELi1mhugjmGBpVcJR+rfPnTBdgOhQYUhx98wF+
uwTAKt3ww6MVqnVzoeTAKeNsKGPGIxEUO1wb4prxuEhT73ZlF6e120m0j5Exxops
eWURTYkBrM60Cusx2XP6sB0CAwEAAQ==
-----END PUBLIC KEY-----`;

//
if (!localStorage.getItem(AUTH_STATE)) {
    localStorage.setItem(
        AUTH_STATE,
        Math.random()
            .toString()
            .replace('0.', '')
    );
}

export function getOAuthClient() {
    return new ClientOAuth2({
        clientId: config.oAuthClientId,
        redirectUri: window.location.origin,
        authorizationUri: config.oAuthAuthorizationUri,
        state: window.localStorage.getItem(AUTH_STATE),
        scopes: ['add-user-to-group', 'remove-user-from-group'],
    });
}

export function isOAuthSuccessPage() {
    return window.location.hash.startsWith('#access_token');
}

export function initiateLogin() {
    // wait for localstorage event triggered by login popup
    window.addEventListener('storage', waitForAuthToken);
    function waitForAuthToken(event) {
        if (event.key === AUTH_TOKEN && event.newValue) {
            document.removeEventListener('storage', waitForAuthToken);
            window.location.href = '/orders'; // reloads page
        }
    }

    // open auth window
    const uri = getOAuthClient().token.getUri();
    window.open(uri, ''); // ... in extra tab
    // window.location = uri; // ... in same tab
}

export function logout() {
    window.localStorage.clear();
    window.location.href = config.oAuthLogoutUri;
}

// only executed in oAuth popup
export function handleOAuthLogin() {
    const tokenData = window.location.href; // e.g. localhost/#access_token=abc
    const oAuthClient = getOAuthClient();

    oAuthClient.token
        .getToken(tokenData)
        .then(data => {
            window.localStorage.setItem(AUTH_TOKEN, data.accessToken); // save token
            window.close(); // close popup
        })
        .catch(err => {
            Sentry.captureException(err);
            console.error(err);
            document.body.innerHTML =
                '<h1 style="padding: 50px; text-align: center">Something went wrong. Please inform the administrator.</h1>';
            document.body.style.backgroundColor = '#fef1f0';
            document.body.style.border = '20px solid #ffa39e';
        });
}

export const getDecodedToken = () =>
    jwtDecode(window.localStorage.getItem(AUTH_TOKEN));
