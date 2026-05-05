import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Zenifai",
  description:
    "Mentions légales de Zenifai, agence GEO française. Identification de l'éditeur, hébergeur et conditions d'utilisation du site zenifai.ai.",
  alternates: { canonical: "https://zenifai.ai/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <Nav />
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-tight mb-12">
            Mentions <span className="gradient-text">légales</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-10 text-text-secondary leading-relaxed">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-semibold text-text-primary">
                Éditeur du site
              </h2>
              <p>
                Le site <strong>zenifai.ai</strong> est édité par <strong>Zenifai</strong>,
                société par actions simplifiée (SAS) au capital de 500 €.
                <br />
                Siège social : 16 Rue Cuvier, 69006 Lyon, France
                <br />
                SIREN : 943 532 093
                <br />
                SIRET (siège) : 943 532 093 00011
                <br />
                RCS Lyon : 943 532 093 (immatriculée le 23/04/2025)
                <br />
                Numéro de TVA intracommunautaire : FR06943532093
                <br />
                Co-fondateurs : Robin Clerc et Louis Chabert
                <br />
                Directeur de la publication : Robin Clerc
                <br />
                Email : <a href="mailto:robin@zenifai.ai" className="text-accent-violet hover:underline">robin@zenifai.ai</a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-semibold text-text-primary">
                Hébergeur
              </h2>
              <p>
                Le site est hébergé par <strong>Hostinger International Ltd.</strong>
                <br />
                Adresse : 61 Lordou Vironos Street, 6023 Larnaca, Chypre
                <br />
                Site web : <a href="https://www.hostinger.fr" className="text-accent-violet hover:underline" target="_blank" rel="noopener noreferrer">https://www.hostinger.fr</a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-semibold text-text-primary">
                Propriété intellectuelle
              </h2>
              <p>
                L’ensemble des éléments présents sur le site zenifai.ai (textes, graphismes,
                logos, icônes, images, code) sont la propriété exclusive de Zenifai, sauf
                mentions contraires. Toute reproduction, représentation, modification ou
                exploitation, totale ou partielle, sans autorisation écrite préalable est
                interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et
                suivants du Code de la propriété intellectuelle.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-semibold text-text-primary">
                Données personnelles
              </h2>
              <p>
                Conformément au RGPD (Règlement (UE) 2016/679) et à la loi Informatique et
                Libertés du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès, de
                rectification, d’effacement, de portabilité et d’opposition concernant vos
                données personnelles. Pour exercer ces droits, écrivez à{" "}
                <a href="mailto:robin@zenifai.ai" className="text-accent-violet hover:underline">
                  robin@zenifai.ai
                </a>.
              </p>
              <p>
                Les données collectées via le formulaire de prise de rendez-vous (Calendly)
                sont utilisées uniquement pour traiter votre demande et ne sont pas cédées à
                des tiers à des fins commerciales.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-semibold text-text-primary">
                Cookies
              </h2>
              <p>
                Le site zenifai.ai utilise un nombre minimal de cookies nécessaires à son
                fonctionnement. Aucun cookie tiers à des fins publicitaires n’est déposé sans
                votre consentement explicite.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-semibold text-text-primary">
                Responsabilité
              </h2>
              <p>
                Zenifai s’efforce d’assurer l’exactitude et la mise à jour des informations
                diffusées sur ce site, mais ne peut garantir l’absence d’erreurs ou
                d’omissions. L’utilisateur reconnaît utiliser ces informations sous sa
                responsabilité exclusive.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-semibold text-text-primary">
                Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de
                litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <p className="pt-8 text-sm text-text-tertiary">
              Dernière mise à jour : mai 2026.{" "}
              <Link href="/" className="text-accent-violet hover:underline">
                Retour à l&apos;accueil
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
