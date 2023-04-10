import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ReactKeycloakProvider } from '@react-keycloak/web'
// 따로 정의한 파일이다. keycloak instance, option 들을 가져온다.
import keycloak, { initOptions, onKeycloakEvent } from './keycloak/keycloak'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={initOptions}
            onEvent={onKeycloakEvent}
        >
            <App/>
        </ReactKeycloakProvider>
    </React.StrictMode>,
)
