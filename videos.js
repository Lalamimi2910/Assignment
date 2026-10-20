// ============================================================
//  EDIT THIS FILE to add your own videos — no coding needed.
//
//  Each video supports one of:
//    youtube: "VIDEO_ID"         (from youtube.com/watch?v=VIDEO_ID)
//    vimeo:   "VIDEO_ID"         (from vimeo.com/VIDEO_ID)
//    src:     "videos/clip.mp4"  (a file in this repo, or any .mp4 URL)
//
//  thumbnail is optional. YouTube thumbnails are fetched automatically;
//  for mp4 files the video itself is used as a preview on hover.
//
//  The sample clips below are public demo videos — replace them with yours.
// ============================================================

const SITE = {
  // Background video for the hero section (mp4 URL or local file)
  heroVideo: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",

  tools: ["Sora", "Veo", "Runway", "Kling", "Pika", "Luma", "Midjourney", "Higgsfield", "ElevenLabs", "Suno", "Topaz", "DaVinci Resolve"],
};

const VIDEOS = [
  {
    title: "Neon Dreams",
    category: "Short Film",
    description: "A 2-minute sci-fi short about a city that dreams. Fully generated shots, edited and scored by me.",
    tools: ["Sora", "Runway", "Suno"],
    year: 2026,
    duration: "2:04",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    title: "Velocity — Sneaker Spot",
    category: "Commercial",
    description: "15-second product ad concept for a sneaker launch, with consistent product shots across scenes.",
    tools: ["Kling", "Higgsfield", "Topaz"],
    year: 2026,
    duration: "0:15",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    title: "Midnight Echoes",
    category: "Music Video",
    description: "Dreamlike music video synced to the beat, mixing stylised animation with photoreal scenes.",
    tools: ["Veo", "Midjourney", "DaVinci Resolve"],
    year: 2025,
    duration: "3:30",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    title: "Escape",
    category: "Commercial",
    description: "Travel brand spot built around a single prompt-driven visual language.",
    tools: ["Runway", "ElevenLabs"],
    year: 2025,
    duration: "0:30",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    title: "Tears of Steel (Remix)",
    category: "Experimental",
    description: "Style-transfer experiment re-imagining live action footage in a painterly look.",
    tools: ["Luma", "Runway"],
    year: 2025,
    duration: "1:12",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  {
    title: "Sintel Reimagined",
    category: "Short Film",
    description: "Fantasy short exploring character consistency across 40+ generated shots.",
    tools: ["Kling", "Midjourney", "Suno"],
    year: 2024,
    duration: "4:10",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
];
