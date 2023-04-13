import react from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { onKeycloakEvent } from '../keycloak/keycloak'

export const Navbar = () => {
    const { keycloak, initialized } = useKeycloak()
    return (
        <>
            <div>
                <h1 >
                    Keycloak React AUTH.
                </h1>
                <ul>
                    <li>
                        <a>
                            Home
                        </a>
                    </li>
                </ul>
                <div>
                    <div>
                        {keycloak.authenticated === false && (
                            <button
                                type="button"
                                className="text-blue-800"
                                onClick={() => { onKeycloakEvent('onAuthLogin') }}>
                                Login
                            </button>
                        )}

                        {(keycloak.authenticated === true) && (
                            <button
                                type="button"
                                className="text-blue-800"
                                onClick={() => { onKeycloakEvent('onAuthLogout') }}>
                                Logout ({ keycloak?.tokenParsed?.preferred_username})
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
