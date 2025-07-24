"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Home } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

// Member data mapping names to image files and descriptions
const attendingMembers = [
  {
    name: "Max",
    image: "Max.png",
    description:
      "Deze jongen laat geen sporen na als die over drempels hopt. We hebben als organisatie flink in de archieven moeten duiken om een foto te vinden. Maar we hebben hem gevonden. En ja, je gaat hem natuurlijk terugvinden op Steengoed Festival!",
  },
  {
    name: "Pim vH VIP",
    image: "Pim.png",
    description:
      "Je kent hem van de Saloen, je kent hem van Losgelaten. Het is de enige echte! De leipste de gekste! Thisssssssss je boy!",
  },
  {
    name: "Aaron",
    image: "Aaron.png",
    description:
      "Wow wat een lokken, deze gozer is niet alleen een wizard met lichten maar mag ook zeker niet licht genomen worden op zijn stem! Na zijn one take van vorig jaar kijken we zeker uit wat hij dit jaar zal cooken.",
  },
  {
    name: "Arnoud",
    image: "Arnoud.png",
    description:
      "Arrrrrrrrrrnicle. Guitar Master Blaser. Dit jaar gaan we zo hard dat niet alleen Arnoud out gaat, maar jullie allemaal. En wij hebben zo'n vermoeden dat onze lieve Arnoud hier wel een rol in gaan spelen!",
  },
  {
    name: "Indy VIP",
    image: "Indy.png",
    description:
      "Wywy. Wywatronic. Bzz. Bzz! Een ware Saloen legend, sterker nog: Wywa is dé OG Indo die als eerste zijn bootje heeft aangelegd in het Saloen landschap. Nadat hij is uitgestapt is die nooit meer terug gegaan. En ook dit jaar gaat Indy het allemaal aan elkaar knopen!",
  },
  {
    name: "Nino",
    image: "Nino.png",
    description:
      "Onze favoriete halfbloedje! Eerder bekend van zijn debut als PIET Saloen Radio! We spreken als organisatie namens het hele festival dat we enorm uitkijken waar deze vrolijke, positieve jonge legende mee gaat komen!",
  },
  {
    name: "Sebas",
    image: "Sebas.png",
    description:
      "Sebabes, Seboeber, Sebaber, Seboebie, Nipjes, Pepperoni bignip. Hoeveel nicknames kan je wel niet hebben?! Eén ding is zeker. Sebaba is altijd aan het schemen. Wat gaat deze jongeman dit jaar brengen?",
  },
  {
    name: "Vincent VIP",
    image: "Vin.png",
    description:
      "Na een traumatisch ongeluk in Chiny was (V)innawhale down bad. De aankondiging van Steengoed Festival heeft hem weer op de been geholpen! Samen met (I)ndy en (P)im een hoeksteen van de Steengoede organisatie. Op welke manier horen we deze man terug op het festival!?",
  },
  {
    name: "Marcel",
    image: "Marcel.png",
    description:
      "JUJU DA PORRA!!! Een nieuwe aanwinst in de saloen. Wees niet gevreesd door zijn lengte, zijn kindness maakt er volop op goed! Jujuonthebeat is met vlag en wimpel geslaagd voor zijn eerste test: de silent disco. Nu zien we hem terug op Steengoed Festival. Lets go Marcel!",
  },
  {
    name: "Billy",
    image: "Billy.png",
    description:
      '"Daar komt Billy en ik pop hem". \n\nDit is niet Billy zijn eerste rodeo. Ook niet zijn tweede. Uiteraard kon ook dit jaar meneer Garcia niet ontbreken. Na Billy zijn doorbraak in de nazomer van 2024, zijn alle ogen gericht op deze kanjer. Kan hij het waar maken en de fans geven wat ze willen?',
  },
  {
    name: "Marijn",
    image: "Marijn.png",
    description:
      'Van Saba tot Thailand; deze man is niet te vangen. Protector of Reefs. Je hebt het gehoord: "Our Ocean..". De rest hoeven we niet eens te zeggen. Ware legende. Reeds bekend van Merlinerbol.',
  },
  {
    name: "Moira",
    image: "Mo.png",
    description:
      "Zonder Moira was het simpelweg een Sausage Festival. De enige bitta tussen al het testosteron geweld. Chef van de foodtrucks die ons op de been moeten houden. Wat kunnen we naast haar kookkunsten nog meer van Moter verwachten!?",
  },
  {
    name: "Rens",
    image: "Rens.png",
    description:
      "Ontmaagd door de silent disco maakt onze Crxnk een reappearance op het Steengoed Festival! Zal deze professionele shooter ook op 6 september raak schieten? Een ding is zeker, Rens komt het festival verrijken met goede vibes!",
  },
  {
    name: "Kevin",
    image: "Kevin.png",
    description:
      "Kevin Cardoza. Wat zouden we zonder hem moeten? De levende legende met invloeden uit de braziliaanse favelas zal ook dit jaar de ogen op hem gericht hebben. Kan die de druk aan? Waar gaat die meekomen?",
  },
  {
    name: "Gerald",
    image: "Gerald.png",
    description:
      '"Am I right, Guys?" \nGerSquare. Man heeft zoveel Malphite gespeeld dat die zijn bouw heeft gemanifesteerd. Rock solid. De verwachtingen voor deze Filipino uit de Slums zijn torenhoog!',
  },
  {
    name: "Johan",
    image: "Johan.png",
    description:
      '"Jeaannn op de beat" \n\nOnze eigen Sodomeister valt natuurlijk niet te missen. Leipe bars, gekke flows, top tier skits; wat heeft deze man niet in huis? Als je bad gaat kan je je melden bij de EHBO voor een potje met de dokter!',
  },
  {
    name: "Pim D",
    image: "PimD.png",
    description:
      "Debuut! Wie is dat toch, een andere Pim? Meneer Deul zal dit jaar voor het eerst van de partij zijn. Al enige tijd bekend bij de Mansion, heeft hij nu ook een bruggetje geslagen naar de Saloen om zijn openheid en vriendelijkheid met iedereen te delen!",
  },
];

const memoryMembers = [
  {
    name: "Deibeato ♰",
    image: "David.png",
    description:
      "Silent Disco & Saloen Legend Deibeato Wienk zal helaas toch niet vlammen op het Steengoed Festival. Wel zal hij in spirit aanwezig zijn. David voorziet ons van een heerlijke set zodat we toch nog een beetje van zijn soesoe kunnen genieten!",
  },
  {
    name: "Florian ♰",
    image: "Florian.png",
    description:
      "Voor de de gezellige Florian stonden alle signalen op groen om dit jaar te debuteren op Steengoed Festival. Helaas mocht het toch niet zo zijn. Hoewel het hem super leuk leek om erbij te zijn had hij helaas al andere plannen. Next time!",
  },
  {
    name: "Yiannis ♰",
    image: "Yiannis.png",
    description:
      "Kers verse Papa Yiannis heeft de organisatie laten weten dat hij helaas niet aanwezig kan zijn op de festiviteiten. * Fart reference *",
  },
  {
    name: "Taran ♰",
    image: "Taran.png",
    description:
      "Titty Blaster Taran heeft dit jaar helaas precies wat staan in het weekend van Steengoed Festival. We wensen je veel plezier en hopen dat je er volgende keer er gewoon weer bij bent, zoals het hoort!",
  },
  {
    name: "Jaimy ♰",
    image: "Jaimy.png",
    description:
      "Bombooooopussyrasclat\nWe hopen dat Jaimy evenals de rest van ons over de teleurstelling kan stappen van zijn afwezigheid dit jaar. Geen Tanojo.. Wel gaan we onze Indonesische/Chinese beer voorzien van een livestream zodat die lekker in de Ardennen kan meegenieten!",
  },
  {
    name: "Ryan ♰",
    image: "Ryan.png",
    description:
      "Jullie lezen het goed, de enige echte DJ Onko heeft een officiële uitnodiging ontvangen voor het Steengoed Festival! Helaas komt het voor Ryan niet helemaal lekker uit (of we betalen te weinig).\nWie weet debuteert deze man op een latere editie!?",
  },
  {
    name: "Jeremy ♰",
    image: "Jeremy.png",
    description:
      "Mr Hype. Jeremaya. Onze Jonge God - altijd vol van energie. Het gemis zal voelbaar zijn! Onderstaand een inzicht in de 180 die deze jongen op ons gooide:\n\n[21:34, 09-07-2025] Jeremy: LETS FUCKING GOOOOOO BROOOOOOOOO\n[21:34, 09-07-2025] Jeremy: FIREEEEEEEEE 🔥🔥🔥🔥\n[21:34, 09-07-2025] Jeremy: Ik kan dat weekend niet 😭",
  },
];

export default function LedenlijstPage() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/banner-concept.png"
          alt="Steengoed Festival Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="px-8 md:px-12 py-8 md:py-6 flex-shrink-0">
          <div className="flex justify-between items-center">
            {/* Desktop Logo */}
            <Link href="/" className="hidden md:block drop-shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Steengoed Festival"
                width={80}
                height={60}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-amber-100 hover:text-orange-300 transition-colors p-2"
            >
              <Menu className="w-10 h-10" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/announcements"
                className="text-amber-100 hover:text-orange-300 transition-colors font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                Announcements
              </Link>
              <Link
                href="/faq"
                className="text-amber-100 hover:text-orange-300 transition-colors font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                FAQ
              </Link>
              <Link
                href="/practical"
                className="text-amber-100 hover:text-orange-300 transition-colors font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                Praktische Info
              </Link>
              <Link
                href="/ledenlijst"
                className="text-orange-300 transition-colors font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-300/40"
              >
                Ledenlijst
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-white">
              <div className="flex justify-between items-center px-8 py-8">
                <Image
                  src="/images/logo.png"
                  alt="Steengoed Festival"
                  width={60}
                  height={45}
                />
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-800 hover:text-orange-600 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="px-8 space-y-6">
                <Link
                  href="/"
                  className="flex items-center text-xl font-semibold text-gray-800 hover:text-orange-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <Home className="w-6 h-6 mr-3" />
                  Home
                </Link>
                <Link
                  href="/announcements"
                  className="block text-xl font-semibold text-gray-800 hover:text-orange-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Announcements
                </Link>
                <Link
                  href="/faq"
                  className="block text-xl font-semibold text-gray-800 hover:text-orange-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </Link>
                <Link
                  href="/practical"
                  className="block text-xl font-semibold text-gray-800 hover:text-orange-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Praktische Info
                </Link>
                <Link
                  href="/ledenlijst"
                  className="block text-xl font-semibold text-orange-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Ledenlijst
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 px-8 md:px-12 py-6 pt-20 pb-40 md:pb-20 text-white">
          <div
            className="max-w-7xl mx-auto"
            style={{ marginTop: isDesktop ? "-64px" : "-60px" }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-100 mb-4 drop-shadow-lg">
                Ledenlijst
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 drop-shadow-lg">
                Ontmoet de legends van Steengoed Festival
              </p>
            </div>

            {/* Attending Members Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-amber-100 drop-shadow-lg">
                Aanwezig op het Festival
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {attendingMembers.map((member) => (
                  <HoverCard key={member.name} openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <button className="group relative">
                        <div className="aspect-square rounded-xl overflow-hidden border-2 border-white/20 group-hover:border-orange-300/60 transition-all duration-300 group-hover:scale-105 shadow-lg">
                          <Image
                            src={`/profiles/${member.image}`}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <p className="font-semibold text-sm drop-shadow-lg group-hover:text-orange-300 transition-colors">
                            {member.name}
                          </p>
                        </div>
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                      sideOffset={12}
                      className="w-80 p-4 bg-black/80 backdrop-blur-sm border-orange-300/20 text-white"
                    >
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-orange-300">
                          {member.name}
                        </h4>
                        <p className="text-sm leading-relaxed whitespace-pre-line pt-1">
                          {member.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </section>

            {/* In Memoriam Section */}
            <section>
              <h2 className="text-3xl font-bold mb-4 text-center text-amber-100 drop-shadow-lg">
                In Memoriam
              </h2>
              <p className="text-center text-amber-100/80 mb-8 drop-shadow-lg">
                Deze sectie is voor onze gevallen broeders die er helaas niet
                bij zijn dit jaar.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
                {memoryMembers.map((member) => (
                  <HoverCard key={member.name} openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <button className="group relative">
                        <div className="aspect-square rounded-xl overflow-hidden border-2 border-white/20 group-hover:border-orange-300/60 transition-all duration-300 group-hover:scale-105 shadow-lg filter grayscale group-hover:grayscale-0">
                          <Image
                            src={`/profiles/memory/${member.image}`}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <p className="font-semibold text-sm drop-shadow-lg group-hover:text-orange-300 transition-colors">
                            {member.name}
                          </p>
                        </div>
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent
                      sideOffset={12}
                      className="w-80 p-4 bg-black/80 backdrop-blur-sm border-orange-300/20 text-white"
                    >
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-orange-300">
                          {member.name}
                        </h4>
                        <p className="text-sm leading-relaxed whitespace-pre-line pt-1">
                          {member.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
