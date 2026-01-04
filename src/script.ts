import { FormattedString, fmt, b, i, u } from '@grammyjs/parse-mode'
import { LoreScriptApi } from 'lore-game-bot-script-api'

export default async function (api: LoreScriptApi): Promise<FormattedString> {
    const roll = Math.random() > 0.5 ? 'TESTA' : 'CROCE'

    const rollLabel: FormattedString = fmt`${api.user.info.fullName}, lanci ${i}${api.item.name}${i}, la riprendi ${u}al volo${u} ed esce: ${b}${roll}${b}!`

    return fmt`${rollLabel}\n\nArgs: ${api.args.content.join(', ')}`
}