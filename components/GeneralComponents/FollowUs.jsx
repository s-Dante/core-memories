import { socialLinks } from '@/config';

export default function FollowUs() {
    return (
        <div>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
    );
}