interface BodyPartSectionProps {
    title: string;
    content: string;
}
export function BodyPartSection({ title, content }: BodyPartSectionProps) {
    return (
        <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600">{content}</p>
        </section>
    );
}