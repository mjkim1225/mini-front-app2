import React from 'react'
import { Navbar } from './pages/Navbar'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak, { initOptions } from './keycloak/keycloak'

const App = () => {
    return (
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={initOptions}>
            <div className="App">
                <Navbar />
            </div>
        </ReactKeycloakProvider>
    )
}

export default App
