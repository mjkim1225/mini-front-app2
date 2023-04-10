import './App.css'
import React from 'react'
import { useKeycloak } from '@react-keycloak/web'

const App = () => {
    const { keycloak, initialized } = useKeycloak()

    if (!initialized) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div>{`User is ${
                !keycloak.authenticated ? 'NOT ' : ''
            }authenticated`}</div>

            // usekeycloak 에서 authenticated 는 idToken 과 token 여부로 결정된다.
            {!!keycloak.authenticated && (
                <button type="button" onClick={async () => { await keycloak.logout() }}>
                    Logout
                </button>
            )}
        </div>
    )
}

export default App
