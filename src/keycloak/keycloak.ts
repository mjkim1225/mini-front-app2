import Keycloak from 'keycloak-js'
const KEYCLOAK_REALM_NAME = 'my_realm'
const KEYCLOAK_CLIENT_ID = 'my_client'
const KEYCLOAK_URL = 'http://localhost:58080'

// 위에 설정한 realm, client_id, url 로 keycloak instance 를 생성한다.
const keycloak: Keycloak.KeycloakInstance = new Keycloak({
    realm: KEYCLOAK_REALM_NAME,
    clientId: KEYCLOAK_CLIENT_ID,
    url: KEYCLOAK_URL,
})

// initOption 지정
export const initOptions = {
    onLoad: 'login-required',
    checkLoginIframe: false,
}

// keycloak Event 를 보기 위한 함수 정의
// keycloak provider 의 onEvent 에 넣어준다.
export const onKeycloakEvent = (event: any, error: any) => {
    console.log('keycloak event ', event, error)
    switch (event) {
        case 'onAuthLogout':
            console.log('onAuthLogout')
            // void keycloak.logout()
            break
        case 'onAuthRefreshError':
            console.log('onAuthRefreshError')
            // void keycloak.logout()
            break
        case 'onAuthRefreshSuccess':
            console.log('onAuthRefreshSuccess')
            console.log(`auth token: ${keycloak.token}`)
            console.log(`refresh token: ${keycloak.refreshToken}`)
            break
        default:
            console.log(error)
            console.log(`auth token: ${keycloak.token}`)
            console.log(`refresh token: ${keycloak.refreshToken}`)
            break
    }
}

export default keycloak
