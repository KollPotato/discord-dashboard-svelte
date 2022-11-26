export interface Language {
    index: {
        description: string
    }
    dashboard: {
        select: string
    }
}

export const EN_US: Language = {
    index: {
        description: "Super duper mega ultra cool Discord bot"
    },
    dashboard: {
        select: "Select a guild to continue"
    }
}