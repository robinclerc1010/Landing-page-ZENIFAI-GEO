// Diviseur de section — reprend le « • » de la marque (Zenifai•) entre deux
// hairlines. Signature discrète, utilisée à un pivot narratif de la home.

export default function SectionDivider() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center gap-5 max-w-md mx-auto">
        <span className="h-px flex-1 bg-border-default" />
        <span
          className="font-serif text-2xl leading-none text-accent-violet select-none"
          aria-hidden="true"
        >
          •
        </span>
        <span className="h-px flex-1 bg-border-default" />
      </div>
    </div>
  );
}
