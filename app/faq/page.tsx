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
            Wanneer begint het festival?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-0">
            Het festival vindt plaats op zaterdag 6 september en begint rond
            15:00 uur.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="where-2"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Waar is het festival?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-0">
            Steengoed Festival vindt plaats in de tuin van Steengoed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="sleep"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Hoe ziet het verblijf eruit?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-0">
            We hebben plek voor 13-14 mensen binnen (huis + bungalow). In totaal
            zijn we met zo'n 18 mensen, dus 4-5 mensen slapen in een tent. Indy,
            Vincent en Pim hebben al aangeboden in een tent te slapen — dus dat
            helpt. Wil je graag een binnenplek? Stuur ons dan even een mailtje:
            steengoedfestival@gmail.com.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="bring"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Moet ik iets meenemen?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-0">
            In principe niet. Alles is geregeld — van eten tot drank, enhancers
            en ganja. Als je een eigen headphone + AUX-kabel hebt, neem die dan
            mee. Heb je die niet? Geen probleem, dan fixen wij eentje voor je.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="transport"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Hoe kom ik er?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-0">
            We vertrekken op vrijdag 5 september met de boot van 19:55 vanaf
            Harlingen. Aanwezig om 19:30 sharp.
            <br />
            <br />
            Je kunt er komen met de auto (carpoolen encouraged!) of het OV.
            Reken bij 3 personen in een auto op max €15 p.p. voor tanken +
            parkeren. Parkeren kan bij Harlingen Haven.
            <br />
            <br />
            Let op: de bootkosten van Harlingen naar Terschelling zijn
            inbegrepen, maar je betaalt wel nog zelf de bus van
            West-Terschelling naar het huisje in Formerum (€3 - €4, enkele
            reis).
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="food"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Is er eten en drinken beschikbaar?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-0">
            Zeker. Alles is inbegrepen: ontbijt, lunch, diner, snacks, drankjes
            (alcohol + non- alcohol), en andere verantwoorde ondeugendheden.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="tickets"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Hoe krijg ik tickets?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-0">
            Tickets kosten €200 all-in. Aanmelden kan onderstaand.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="included"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Wat is inbegrepen in die €200?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-0">
            <ul className="list-disc pl-5 space-y-1">
              <li>Verblijf (huis, tent of bungalow)</li>
              <li>Boottickets vanaf Harlingen (heen en terug)</li>
              <li>Eten & drinken (alles!)</li>
              <li>Silent Disco gear</li>
              <li>Ganja, drankj, cigs, pills</li>
              <li>Productiekosten: flyers, website, props & techniek</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="not-included"
          className="border border-white/20 bg-white/5 rounded-lg px-6"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-amber-100 hover:text-orange-300">
            Wat is niet inbegrepen?
          </AccordionTrigger>
          <AccordionContent className="text-amber-100/90 pt-0">
            <ul className="list-disc pl-5 space-y-1">
              <li>Parkeren & tanken (reken op €10-€15 p.p.)</li>
              <li>Bus van West-Terschelling naar Steengoed</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-12">
        <p className="text-amber-100/80 mb-4">Heb je nog een andere vraag?</p>
        <SecondaryButton href="mailto:steengoedfestival@gmail.com">
          Mail ons gerust
        </SecondaryButton>
      </div>
    </SharedLayout>
  );
}
