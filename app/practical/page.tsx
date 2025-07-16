import {
  MapPin,
  Car,
  Train,
  ParkingCircle,
  Utensils,
  ShowerHeadIcon as Shower,
  BedDouble,
} from "lucide-react";
import SharedLayout, {
  PageHeader,
  SecondaryButton,
} from "@/components/shared-layout";

export default function PracticalPage() {
  return (
    <SharedLayout>
      <PageHeader title="Praktische Informatie" />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Location */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Locatie
              </h2>
              <p className="text-amber-100/90">
                Dirkmansweg 9, Formerum – Terschelling
                <br />
                Het is buiten. Het is groen. Het is Steengoed.
              </p>
              <p className="text-amber-100/90 mt-4">
                <strong>Let op:</strong> de boot vertrekt vanaf
                <br />
                Harlingen Haven – 8861 XA Harlingen
                <br />
                Zorg dat je vrijdag 5 september om 19:30 aanwezig bent — de boot
                gaat om 19:55 sharp.
              </p>
              <p className="text-amber-100/80 mt-2 italic">
                Tip: kom op tijd als je nog zin hebt in een kibbelingetje
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Car className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Met de Auto
              </h2>
              <p className="text-amber-100/90">
                Parkeren kan bij Langparkeren Harlingen (P1/P2/P3)
                <br />
                De kosten voor parkeren + tanken deel je met je medepassagiers:
                <br />
                Reken op ± €10–15 per persoon bij volle auto.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Train className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Openbaar Vervoer
              </h2>
              <p className="text-amber-100/90">
                Als je kiest voor het OV, check zelf je trein/bus naar Harlingen
                Haven.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <ParkingCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Parkeren
              </h2>
              <p className="text-amber-100/90">
                Zie hierboven: Harlingen Haven – P1/P2/P3.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Utensils className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Eten & Drinken
              </h2>
              <p className="text-amber-100/90">
                Het is all-in, dus: eten, drinken, snacks, toebehoren — alles
                wat je nodig hebt voor het weekend is geregeld.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <BedDouble className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Slapen & Verblijf
              </h2>
              <p className="text-amber-100/90">
                Er zijn 13–14 plekken binnen (Steengoed + bungalow).
                <br />
                We zijn met z'n 18en, dus: 5 mensen slapen in tenten.
              </p>
              <p className="text-amber-100/90 mt-2">
                Pim, Indy en Vincent slapen sowieso buiten.
                <br />
                Wil je per se binnen slapen? Mail ons op
                steengoedfestival@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Shower className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Faciliteiten
              </h2>
              <ul className="text-amber-100/90 space-y-1">
                <li>• In Steengoed: 1 toilet</li>
                <li>
                  • Extra toilet in de bungalow (alleen voor de mensen die daar
                  slapen)
                </li>
                <li>• 1 douche beschikbaar voor algemeen gebruik</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="mt-12 p-6 bg-white/5 rounded-lg border-l-4 border-white/20">
        <h3 className="text-lg font-semibold text-amber-100 mb-3">
          Belangrijke Opmerkingen
        </h3>
        <ul className="space-y-2 text-amber-100/90">
          <li>• Volg de Announcements-pagina voor updates</li>
          <li>• Check je mail en deze website regelmatig</li>
        </ul>
      </div>

      <div className="mt-8">
        <p className="text-amber-100/80 mb-4">Specifieke vragen?</p>
        <SecondaryButton href="mailto:steengoedfestival@gmail.com">
          Contact voor meer info
        </SecondaryButton>
      </div>
    </SharedLayout>
  );
}
