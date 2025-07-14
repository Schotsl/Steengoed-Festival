import {
  MapPin,
  Car,
  Train,
  ParkingCircle,
  Utensils,
  ShowerHeadIcon as Shower,
} from "lucide-react";
import SharedLayout, { PageHeader } from "@/components/shared-layout";

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
                [Adres wordt binnenkort bekendgemaakt]
                <br />
                [Plaats], Nederland
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
                Routebeschrijving volgt zodra de locatie bekend is. GPS
                coördinaten worden ook beschikbaar gesteld.
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
                Informatie over het dichtstbijzijnde trein- en busstation volgt
                binnenkort.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <ParkingCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Parkeren
              </h2>
              <p className="text-amber-100/90">
                Er is parkeergelegenheid beschikbaar. Fietsenstalling is ook
                aanwezig voor wie op de fiets komt.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Utensils className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Eten & Drinken
              </h2>
              <p className="text-amber-100/90">
                Er zal catering aanwezig zijn op het festival. Eigen eten en
                drinken meenemen is ook toegestaan.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Shower className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-amber-100 mb-2">
                Faciliteiten
              </h2>
              <p className="text-amber-100/90">
                Toiletten en douchefaciliteiten zijn beschikbaar. Voor
                kampeerders zijn er extra voorzieningen.
              </p>
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
          <li>
            • Meer gedetailleerde informatie volgt zodra de locatie definitief
            is
          </li>
          <li>• Houd de announcements pagina in de gaten voor updates</li>
          <li>• Voor specifieke vragen, neem contact op via email</li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <a
          href="mailto:steengoedfestival@gmail.com"
          className="inline-block bg-orange-900 text-white px-8 py-3 rounded-lg hover:bg-orange-800 transition-colors font-medium"
        >
          Contact voor meer info
        </a>
      </div>
    </SharedLayout>
  );
}
