import { FormattedString } from '@grammyjs/parse-mode'
import script from './script'
import { LoreScriptApi, LoreScriptArgs, LoreScriptItem, LoreScriptUser } from 'lore-game-bot-script-api'

const item: LoreScriptItem = {
    name: 'una moneta',
}
const args: LoreScriptArgs = new LoreScriptArgs(['arg1', 'arg2'])
const user: LoreScriptUser = { 
    info: {
        username: 'username123',
        fullName: 'Mario Rossi',
        registeredAt: new Date(),
        bannedUntil: null,
        lastLoreAt: new Date()
    },
    progression: {
        level: 4,
        powerLevel: 10
    },
    faction: {
        name: 'Il Male 👿',
    },
    travel: {
        currentSeasonName: `L'inferno 🔥`,  
    },
    clan: {
        name: 'la FRODE sviluppata della galassia',  
    }
}

const api: LoreScriptApi = new LoreScriptApi(item, user, args)
const result: FormattedString = await script(api)

console.log(result)