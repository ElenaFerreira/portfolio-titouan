"use client";

import { AtSign, Mail, Linkedin, MapPin, ArrowRight, Send } from "lucide-react";
import { SectionTag } from "./ui/SectionTag";

interface ContactCard {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}

const contactCards: ContactCard[] = [
  {
    icon: Mail,
    label: "Envoyez moi un mail ici",
    value: "francois.titouan2003@gmail.com",
    href: "mailto:francois.titouan2003@gmail.com",
  },
  {
    icon: Linkedin,
    label: "Contactez moi sur Linkedin",
    value: "Titouan François",
    href: "https://www.linkedin.com/in/titouan-fran%C3%A7ois-004724226/",
  },
  {
    icon: MapPin,
    label: "Ma ville",
    value: "Le Plessis-Belleville, Oise, France",
    href: "https://maps.app.goo.gl/te1Qen11M5szZsrz5",
  },
];

export function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Partie gauche */}
          <div className="flex-1">
            <SectionTag icon={AtSign} label="Contact" />

            <h2 className="mt-6 text-3xl font-bold leading-tight text-dark md:text-4xl">Rentrons en contact</h2>

            <p className="mt-3 max-w-md text-sm font-medium text-dark md:text-base">
              Une question ? Un projet ? Remplissez ce formulaire pour rentrer en contact avec moi.
            </p>

            {/* Cartes de contact */}
            <div className="mt-8 flex flex-col gap-3">
              {contactCards.map((card, index) => {
                const CardWrapper = card.href ? "a" : "div";
                const cardProps = card.href ? { href: card.href, target: "_blank", rel: "noopener noreferrer" } : {};

                return (
                  <CardWrapper
                    key={index}
                    {...cardProps}
                    className="group flex items-center gap-4 p-4 bg-white border border-border rounded-xl cursor-pointer"
                  >
                    <div className="flex items-center justify-center size-12 rounded-lg border border-border">
                      <card.icon className="size-5 text-dark" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray">{card.label}</p>
                      <p className="font-semibold text-dark">{card.value}</p>
                    </div>
                    <ArrowRight className="size-6 text-gray transition-transform duration-300 ease-out group-hover:-rotate-45 group-hover:text-dark" />
                  </CardWrapper>
                );
              })}
            </div>
          </div>

          {/* Partie droite - Formulaire */}
          <div className="flex-1">
            <div className="bg-white border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-dark">Envoyez un message</h3>
              <p className="mt-1 text-sm text-gray">
                Utilisez le formulaire de contact ci-dessous pour me faire part de vos questions ou de vos demandes.
              </p>

              <form className="mt-6 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-border rounded-lg text-dark placeholder:text-gray focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 border border-border rounded-lg text-dark placeholder:text-gray focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  placeholder="Votre message"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg text-dark placeholder:text-gray focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="size-4" />
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
