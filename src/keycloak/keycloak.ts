import Keycloak from 'keycloak-js'

const KEYCLOAK_URL = 'http://localhost:58080/'
const KEYCLOAK_REALM = 'my_realm'
const KEYCLOAK_CLIENT_ID = 'my_client'

const keycloak = new Keycloak({
    realm: KEYCLOAK_REALM,
    url: KEYCLOAK_URL,
    clientId: KEYCLOAK_CLIENT_ID,
})

// initOption 지정
export const initOptions = {
    // onLoad: 'login-required',
    checkLoginIframe: false,
}

// keycloak Event 를 보기 위한 함수 정의
// keycloak provider 의 onEvent 에 넣어준다.
export const onKeycloakEvent = (event: any) => {
    console.log('keycloak event ', event)
    switch (event) {
        case 'onAuthLogin':
            void keycloak.login()
            break
        case 'onAuthLogout':
            void keycloak.logout()
            break
        case 'onAuthRefreshError':
            void keycloak.logout()
            break
        case 'onAuthRefreshSuccess':
            (keycloak.refreshToken != null) && console.log(`refreshToken token: ${keycloak.refreshToken}`)
            break
        default:
            break
    }
}

export default keycloak
