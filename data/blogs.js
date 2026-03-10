export const blogs = [
    {
        id: "wp-dev-log-1",
        gameId: "world-park",
        type: "Written",
        title: "DEV-LOG: MAP DESIGN",
        summary: "First iterations of the World Park map. Building the core layout and importing the primary textures...",
        date: "2023-10-15",
        author: "Lead Architect",
        tags: ["LOG", "DESIGN"],
        blocks: [
            { type: "heading", content: "Laying the Mathematical Groundwork" },
            { type: "paragraph", content: "Building a theme park of this scale isn't just about placing assets; it's about defining the spatial reality in which they exist. For World Park, we needed a coordinate system that could handle massive scale without floating-point precision loss at the edges." },
            { type: "quote", content: "The beauty of a digital world lies in its invisible grid. If the grid is flawed, the world crumbles." },
            { type: "heading", content: "The Grid Implementation" },
            { type: "paragraph", content: "We started by abandoning standard Cartesian coordinates in favor of a chunk-based hexagonal mapping system. Here's a glimpse of the initial node generation algorithm:" },
            { type: "code", language: "typescript", content: `class HexGrid {\n  size: number;\n  chunks: Map<string, Chunk>;\n\n  constructor(size: number) {\n    this.size = size;\n    this.chunks = new Map();\n  }\n\n  getChunk(x: number, y: number): Chunk {\n    const key = \`\${x},\${y}\`;\n    if (!this.chunks.has(key)) {\n      this.chunks.set(key, new Chunk(x, y));\n    }\n    return this.chunks.get(key);\n  }\n}` },
            { type: "paragraph", content: "This approach allows us to load and unload massive sections of the park seamlessly, guaranteeing a smooth 60fps experience regardless of how many rollercoasters the player builds." }
        ]
    },
    {
        id: "wp-dev-log-2",
        gameId: "world-park",
        type: "Written",
        title: "ART-LOG: CONCEPT & TEXTURES",
        summary: "Diving into the visual identity of World Park. From brutalist concrete paths to vibrant, dream-like neon attractions.",
        date: "2023-11-02",
        author: "Art Director",
        tags: ["ART", "TEXTURES"],
        blocks: [
            { type: "heading", content: "Visualizing the Impossible" },
            { type: "paragraph", content: "The original brief for World Park was 'Nostalgia meets brutalism'. We wanted the foundational structures—the paths, the employee zones, the boundaries—to feel heavy and grounded. Contrast this with the rides themselves, which should feel light, colorful, and almost excessively saturated." },
            { type: "image", url: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=2670&auto=format&fit=crop" },
            { type: "paragraph", content: "Notice the concrete texture mapping above. We spent weeks ensuring the light bounces off the imperfections of the cement just right. This grounds the player in reality before they step onto a rollercoaster that defies physics." },
            { type: "quote", content: "Color is structurally load-bearing. Without it, the concrete crushes the soul. With it, the concrete frames the joy." },
            { type: "heading", content: "Shader Optimization" },
            { type: "paragraph", content: "To pull off this contrast without melting GPUs, we wrote custom shaders that selectively boost saturation only on emissive materials, allowing the concrete to remain naturally muted regardless of the global lighting conditions." }
        ]
    },
    {
        id: "wp-video-log-1",
        gameId: "world-park",
        type: "Video",
        title: "Gameplay Trailer 1",
        summary: "First look at the park in motion.",
        date: "2023-12-01",
        duration: "02:15",
        tracks: [
            { id: "track-1", title: "Gameplay Reveal Trailer", duration: "01:45", videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ" },
            { id: "track-2", title: "Physics Engine Deep Dive (Unlisted)", duration: "04:20", videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
            { id: "track-3", title: "Developer Walkthrough", duration: "10:12", videoUrl: "https://www.youtube.com/embed/S_f2qV2_U00" }
        ]
    }
];

export const getBlogById = (id) => blogs.find((blog) => blog.id === id);
export const getBlogsByGameId = (gameId) => blogs.filter((blog) => blog.gameId === gameId);
export const getAllBlogs = () => blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
