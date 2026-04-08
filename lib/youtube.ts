const CHANNEL_ID = "UCW6ZMMUn4pSkheCDGx9eZ5Q";

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  published: string;
}

export async function getLatestVideos(limit = 3): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    const xml = await res.text();

    const entries = xml.split("<entry>").slice(1);
    const videos: YouTubeVideo[] = entries.slice(0, limit).map((entry) => {
      const id = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? "";
      const title = entry.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
      const published = entry.match(/<published>(.*?)<\/published>/)?.[1] ?? "";
      return {
        id,
        title: title.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
        thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${id}`,
        published: new Date(published).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      };
    });

    return videos.filter((v) => v.id);
  } catch {
    return [];
  }
}
