import { Music, Clock } from "lucide-react";
import Link from "next/link";
import SharedLayout, { PageHeader } from "@/components/shared-layout";

export default function LineupPage() {
  return (
    <SharedLayout className="text-center">
      <Music className="w-16 h-16 text-amber-500 mx-auto mb-6" />

      <PageHeader title="Line-up & Programma" />

      <div className="max-w-2xl mx-auto">
        <p className="text-xl text-amber-100/90 mb-8">
          De line-up en het volledige programma worden binnenkort bekendgemaakt!
        </p>

        <div className="bg-white/5 rounded-xl p-8 mb-8">
          <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-amber-100 mb-4">
            Binnenkort Beschikbaar
          </h2>
          <p className="text-amber-100/90">
            We werken hard aan het samenstellen van een geweldige line-up. Houd
            de announcements pagina in de gaten voor de eerste artiesten en
            tijdschema's.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/announcements"
            className="inline-block bg-orange-900 text-white px-8 py-3 rounded-lg hover:bg-orange-800 transition-colors font-medium mr-4"
          >
            Bekijk Announcements
          </Link>
          <a
            href="mailto:steengoedfestival@gmail.com"
            className="inline-block border-2 border-orange-900 text-orange-900 px-8 py-3 rounded-lg hover:bg-orange-900 hover:text-white transition-colors font-medium"
          >
            Stel een Vraag
          </a>
        </div>
      </div>
    </SharedLayout>
  );
}
