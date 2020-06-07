import Frontend from "./models/frontend.model"
import Bff from "./models/bff.model"

export const start = () => {
    const ios: Frontend = new Frontend({ frontendName: 'ios', bff: Bff.getInstance({ version: 'v2', stack: 'node' }) })

    const android: Frontend = new Frontend({ frontendName: 'android', bff: Bff.getInstance() })

    const web: Frontend = new Frontend({ frontendName: 'web', bff: Bff.getInstance() })

    console.log({ ios, android, web })
}

start()