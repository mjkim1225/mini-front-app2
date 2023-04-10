import React from 'react'
import { Navbar } from './pages/Navbar'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak/keycloak'

const App = () => {
    return (
        <div className="App">
            <ReactKeycloakProvider authClient={keycloak}>
                <Navbar />
            </ReactKeycloakProvider>
        </div>
    )
}

export default App
