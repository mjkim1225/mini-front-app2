import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    realm: 'my_realm',
    url: 'http://localhost:58080/',
    clientId: 'my_client'
})

export default keycloak
