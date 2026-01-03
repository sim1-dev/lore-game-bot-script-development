import { describe, it, expect } from 'vitest'
import script from '../script'
import { FormattedString } from '@grammyjs/parse-mode'
import { LoreScriptApi, LoreScriptUserNoClan } from 'lore-game-bot-script-api'

describe('script', () => {
    it('exports a default function', () => {
        expect(script).toBeDefined()
        expect(typeof script).toBe('function')
    })
    
    it('runs with no arguments', async () => {
        const api: LoreScriptApi = new LoreScriptApi({
            name: 'una moneta',
        }, 
        { 
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
        },
        {
            args: []
        })

        const result: FormattedString = await script(api)

        expect(result).toBeInstanceOf(FormattedString)
        expect(result.text).toBeDefined()
        expect(result.entities).toBeDefined()
    })

    it('runs with arguments', async () => {
        const api: LoreScriptApi = new LoreScriptApi({
            name: 'una moneta',
        }, 
        { 
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
        },
        {
            args: ['arg1', 'arg2']
        })

        const result: FormattedString = await script(api)

        expect(result).toBeInstanceOf(FormattedString)
        expect(result.text).toBeDefined()
        expect(result.entities).toBeDefined()
    })

    it('runs with undefined arguments', async () => {
        const api: LoreScriptApi = new LoreScriptApi({
            name: 'una moneta',
        }, 
        { 
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
        },
        {
            args: [undefined, undefined, undefined, undefined, undefined, undefined]
        })

        const result: FormattedString = await script(api)

        expect(result).toBeInstanceOf(FormattedString)
        expect(result.text).toBeDefined()
        expect(result.entities).toBeDefined()
    })

    it('runs for clanless user', async () => {
        const api: LoreScriptApi = new LoreScriptApi({
            name: 'una moneta',
        }, 
        { 
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
            clan: new LoreScriptUserNoClan()
        },
        {
            args: ['arg1', 'arg2']
        })
        
        const result: FormattedString = await script(api)

        expect(result).toBeInstanceOf(FormattedString)
        expect(result.text).toBeDefined()
        expect(result.entities).toBeDefined()
    })

    it('runs for banned user', async () => {
        const api: LoreScriptApi = new LoreScriptApi({
            name: 'una moneta',
        }, 
        { 
            info: {
                username: 'username123',
                fullName: 'Mario Rossi',
                registeredAt: new Date(),
                bannedUntil: new Date(),
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
        },
        {
            args: ['arg1', 'arg2']
        })

        const result: FormattedString = await script(api)

        expect(result).toBeInstanceOf(FormattedString)
        expect(result.text).toBeDefined()
        expect(result.entities).toBeDefined()
    })

    it('runs for user with no lore history', async () => {
        const api: LoreScriptApi = new LoreScriptApi({
            name: 'una moneta',
        }, 
        { 
            info: {
                username: 'username123',
                fullName: 'Mario Rossi',
                registeredAt: new Date(),
                bannedUntil: null,
                lastLoreAt: null
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
        },
        {
            args: ['arg1', 'arg2']
        })

        const result: FormattedString = await script(api)

        expect(result).toBeInstanceOf(FormattedString)
        expect(result.text).toBeDefined()
        expect(result.entities).toBeDefined()
    })
})
