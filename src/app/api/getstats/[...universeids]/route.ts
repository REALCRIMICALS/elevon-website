import { NextRequest, NextResponse } from 'next/server'

/**
 * Removes duplicate strings from an array
 * @param arr Array of strings that may contain duplicates
 * @returns A new array with duplicates removed
 */
function removeDuplicates(arr: string[]): string[] {
    return [...new Set(arr)];
}

export async function GET (
    request: NextRequest,
    { params }: { params: { universeids: string[] } }
) {
    const { universeids } = await params;

    const UniverseIds = removeDuplicates(universeids);

    const res = await fetch('https://games.roblox.com/v1/games?universeIds=' + UniverseIds.join(","))
    const data = await res.json() as { data: {
        favoritedCount: number,
        visits: number,
        playing: number
    }[] }

    const total_playing = data.data.map(game => game.playing).reduce((sum, current) => sum + current, 0);
    const total_visits = data.data.map(game => game.visits).reduce((sum, current) => sum + current, 0);
    const total_favorited = data.data.map(game => game.favoritedCount).reduce((sum, current) => sum + current, 0);

    return NextResponse.json({
        total_favorited,
        total_playing,
        total_visits
    })
}
