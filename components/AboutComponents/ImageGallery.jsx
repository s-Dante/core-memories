import { aboutImageGallery} from "@/config";

export default function ImageGallery() {
    return (
        <section>
            {aboutImageGallery.images.map((image, id) => (
                <img key={id} src={image.src} alt={image.alt} />
            ))}
        </section>
    );
}