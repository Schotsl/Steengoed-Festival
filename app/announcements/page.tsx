import { Download } from "lucide-react";
import SharedLayout, {
  PageHeader,
  SecondaryButton,
} from "@/components/shared-layout";

export default function AnnouncementsPage() {
  return (
    <SharedLayout>
      <PageHeader title="Announcements & Info" />

      {/* Latest Updates */}
      <div className="space-y-8">
        <div className="border-l-4 border-orange-500 pl-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-amber-100">
                Ledenlijst Beschikbaar
              </h2>
              <p className="text-sm text-amber-200/70 mt-1">15 december 2024</p>
            </div>
            <span className="text-sm text-amber-900 bg-amber-200 px-3 py-1 rounded-full">
              Nieuw
            </span>
          </div>
          <p className="text-amber-100/90 mb-4">
            De officiële ledenlijst voor Steengoed Festival is nu beschikbaar.
            Download het document hieronder voor alle belangrijke informatie.
          </p>
          <SecondaryButton className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download Ledenlijst PDF</span>
          </SecondaryButton>
        </div>

        <div className="border-l-4 border-purple-500 pl-6">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-amber-100">
              Website Gelanceerd
            </h2>
            <p className="text-sm text-amber-200/70 mt-1">10 december 2024</p>
          </div>
          <p className="text-amber-100/90">
            Welkom op de officiële Steengoed Festival website! Hier vind je alle
            updates, praktische informatie en binnenkort ook de line-up en
            programma details.
          </p>
        </div>

        {/* Placeholder for future announcements */}
        <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center">
          <p className="text-orange-300 font-medium">
            Meer updates volgen binnenkort...
          </p>
        </div>
      </div>
    </SharedLayout>
  );
}
