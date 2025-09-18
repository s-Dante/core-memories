import { socialLinks } from '@/config';

export default function FollowUs() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-4 py-2 rounded-full
          bg-pink-600/80 hover:bg-pink-600
          text-white text-sm md:text-base
          transition-colors
        "
      >
        Instagram
      </a>

      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-4 py-2 rounded-full
          bg-blue-600/80 hover:bg-blue-600
          text-white text-sm md:text-base
          transition-colors
        "
      >
        Facebook
      </a>

      <a
        href={socialLinks.tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-4 py-2 rounded-full
          bg-gray-900/80 hover:bg-gray-900
          text-white text-sm md:text-base
          transition-colors
        "
      >
        TikTok
      </a>

      <a
        href={socialLinks.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-4 py-2 rounded-full
          bg-red-600/80 hover:bg-red-600
          text-white text-sm md:text-base
          transition-colors
        "
      >
        YouTube
      </a>
    </div>
  );
}
