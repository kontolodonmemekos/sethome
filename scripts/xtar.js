/// => {import} <= \\\
import { world, system } from '@minecraft/server'
import { PHx } from './server/custom/conf/xtar.js'
import { sHome } from './server/xtar.js'

/// => {Data} <= \\\
world.events.beforeChat.subscribe(msg => {
    if (msg.message.startsWith(PHx)) {
        sHome(msg)
    }
})
system.events.beforeWatchdogTerminate.subscribe(data => {
    data.cancel = true
})