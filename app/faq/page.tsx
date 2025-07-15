import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SharedLayout, {
  PageHeader,
  SecondaryButton,
} from "@/components/shared-layout";

export default function FAQPage() {
  return (
    <SharedLayout>
      <PageHeader title="Veelgestelde Vragen" />

      <Accordion
        type="single"
        collapsible
        className="space-y-4 [&>div]:!duration-0"
      >
        <AccordionItem
          value="time"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Hoe laat begint het festival?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-4">
            Het festival begint op [datum] om [tijd]. Houd de announcements
            pagina in de gaten voor de exacte tijden en het volledige programma.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="bring"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Moet ik iets meenemen?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-4">
            Breng je eigen drankje, een goede stemming en eventueel een kleedje
            mee om op te zitten. Verdere details volgen in de praktische
            informatie.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="sleep"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Kan ik blijven slapen?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-4">
            Er zijn mogelijkheden om te kamperen. Neem contact op via
            steengoedfestival@gmail.com voor meer informatie over
            overnachtingsmogelijkheden.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="transport"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Hoe kom ik er?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-4">
            Bekijk de 'Praktische Info' pagina voor gedetailleerde
            routebeschrijvingen met de auto en het openbaar vervoer, plus
            informatie over parkeren.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="food"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Is er eten en drinken beschikbaar?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-4">
            Er zal eten en drinken beschikbaar zijn op het festival. Meer
            details over de catering en prijzen volgen binnenkort.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="tickets"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Hoe krijg ik tickets?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-4">
            Ticket informatie wordt binnenkort bekendgemaakt. Houd de
            announcements pagina in de gaten of neem contact op via
            steengoedfestival@gmail.com.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-12">
        <p className="text-amber-100/80 mb-4">Heb je nog andere vragen?</p>
        <SecondaryButton href="mailto:steengoedfestival@gmail.com">
          Stuur ons een email
        </SecondaryButton>
      </div>
    </SharedLayout>
  );
}
