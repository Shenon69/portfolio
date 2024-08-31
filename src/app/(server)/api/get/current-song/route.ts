import { getNowPlaying } from '@/app/(server)/config/spotify'
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const response = await getNowPlaying()
  console.log(req)

  // Here we handle the request from the API
  if (response.status === 204 || response.status > 400) {
    return NextResponse.json(
      { isPlaying: false },
      {
        status: 200,
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
      }
    );
  }

  const song = await response.json()

  if (song.item === null) {
    return NextResponse.json(
      { isPlaying: false },
      {
        status: 200,
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
      }
    );
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  const newHeaders = new Headers(req.headers)

  newHeaders.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  // obejct containing the information about the currently playing song
  return NextResponse.json(
    {
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    },
    {
      status: 200,
      headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate' },
    }
  )
}
