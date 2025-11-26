import { createRoot } from 'react-dom/client'
import MyApp from './_app'

const container = document.createElement('div')
document.body.appendChild(container)
createRoot(container).render(<MyApp />)
