import { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Scale, User, Server, Shield, Cookie, Copyright, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales – Titouan François",
  description: "Mentions légales du portfolio de Titouan François",
};

interface LegalSectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function LegalSection({ icon: Icon, title, children }: LegalSectionProps) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center size-10 rounded-xl bg-blue-light">
          <Icon className="size-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-dark">{title}</h2>
      </div>
      <div className="text-gray leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gray-lighter">
      <Navbar />

      {/* Hero section */}
      <section className="pt-32 pb-12 px-4">
        <div className="w-full max-w-[1040px] mx-auto">
          {/* Bouton retour */}
          <Link href="/" className="inline-flex items-center gap-2 text-gray hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Retour à l&apos;accueil</span>
          </Link>

          {/* Titre */}
          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-dark">Mentions légales</h1>
          <p className="mt-3 text-gray">
            Conformément aux dispositions des articles 6-III et 19 de la loi n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie
            numérique (LCEN), il est porté à la connaissance des utilisateurs du site les présentes mentions légales.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="px-4 pb-16">
        <div className="w-full max-w-[1040px] mx-auto">
          <div className="grid gap-6">
            {/* Éditeur du site */}
            <LegalSection icon={User} title="1. Éditeur du site">
              <p>Le présent site est édité par :</p>
              <div className="bg-gray-lighter rounded-xl p-4 mt-2">
                <p>
                  <strong className="text-dark">Nom :</strong> Titouan François
                </p>
                <p>
                  <strong className="text-dark">Statut :</strong> Particulier
                </p>
                <p>
                  <strong className="text-dark">Adresse :</strong> Le Plessis-Belleville, Oise 60330, France
                </p>
                <p>
                  <strong className="text-dark">Email :</strong> francois.titouan2003@gmail.com
                </p>
              </div>
            </LegalSection>

            {/* Hébergeur */}
            <LegalSection icon={Server} title="2. Hébergement">
              <p>Le site est hébergé par :</p>
              <div className="bg-gray-lighter rounded-xl p-4 mt-2">
                <p>
                  <strong className="text-dark">Raison sociale :</strong> Vercel Inc.
                </p>
                <p>
                  <strong className="text-dark">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                </p>
                <p>
                  <strong className="text-dark">Site web :</strong>{" "}
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://vercel.com
                  </a>
                </p>
              </div>
              <p className="mt-4">Le nom de domaine est enregistré auprès de :</p>
              <div className="bg-gray-lighter rounded-xl p-4 mt-2">
                <p>
                  <strong className="text-dark">Raison sociale :</strong> OVH SAS
                </p>
                <p>
                  <strong className="text-dark">Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France
                </p>
                <p>
                  <strong className="text-dark">Site web :</strong>{" "}
                  <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.ovh.com
                  </a>
                </p>
              </div>
            </LegalSection>

            {/* Propriété intellectuelle */}
            <LegalSection icon={Copyright} title="3. Propriété intellectuelle">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) est protégé par les lois
                françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le
                moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Titouan François.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme
                constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété
                Intellectuelle.
              </p>
            </LegalSection>

            {/* Données personnelles & RGPD */}
            <LegalSection icon={Shield} title="4. Protection des données personnelles (RGPD)">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978
                modifiée, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="mt-3">
                <strong className="text-dark">Données collectées :</strong> Ce site peut collecter des données via le formulaire de contact (nom,
                email). Ces données sont uniquement utilisées pour répondre à vos demandes et ne sont jamais transmises à des tiers.
              </p>
              <p>
                <strong className="text-dark">Durée de conservation :</strong> Les données sont conservées pendant une durée maximale de 3 ans à
                compter du dernier contact.
              </p>
              <p>
                Pour exercer vos droits ou pour toute question relative à la protection de vos données, vous pouvez contacter :{" "}
                <a href="mailto:francois.titouan2003@gmail.com" className="text-primary hover:underline">
                  francois.titouan2003@gmail.com
                </a>
              </p>
              <p className="text-sm italic">
                En cas de litige, vous pouvez également adresser une réclamation à la CNIL (Commission Nationale de l&apos;Informatique et des
                Libertés) : www.cnil.fr
              </p>
            </LegalSection>

            {/* Cookies */}
            <LegalSection icon={Cookie} title="5. Cookies">
              <p>Ce site n&apos;utilise aucun cookie.</p>
              <p>
                Aucune donnée n&apos;est collectée automatiquement lors de votre navigation sur ce site. Aucun cookie de tracking, d&apos;analyse ou
                publicitaire n&apos;est déposé sur votre terminal.
              </p>
            </LegalSection>

            {/* Responsabilité */}
            <LegalSection icon={Scale} title="6. Limitation de responsabilité">
              <p>
                L&apos;éditeur du site s&apos;efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu
                responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des
                tiers partenaires qui lui fournissent ces informations.
              </p>
              <p>
                L&apos;éditeur du site ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur,
                lors de l&apos;accès au site, et résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications
                indiquées, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
              </p>
              <p>
                Le site peut contenir des liens hypertextes vers d&apos;autres sites. L&apos;éditeur n&apos;exerce aucun contrôle sur ces sites et
                décline toute responsabilité quant à leur contenu.
              </p>
            </LegalSection>

            {/* Contact */}
            <LegalSection icon={Mail} title="7. Contact">
              <p>Pour toute question concernant ces mentions légales ou l&apos;utilisation du site, vous pouvez contacter l&apos;éditeur :</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-3">
                <a
                  href="mailto:francois.titouan2003@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:brightness-105 transition"
                >
                  <Mail className="size-4" />
                  Envoyer un email
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-border text-dark px-6 py-3 rounded-full font-medium hover:bg-gray-lighter transition"
                >
                  Formulaire de contact
                </Link>
              </div>
            </LegalSection>

            {/* Date de mise à jour */}
            <div className="text-center text-sm text-gray mt-8">
              <p>Dernière mise à jour : Février 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
