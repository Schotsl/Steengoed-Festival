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
        <div className="border-l-4 border-purple-500 pl-6">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-amber-100">
              Flyer 2 – Praktische Follow-Up
            </h2>
            <p className="text-sm text-amber-200/70 mt-1">16-07-2025</p>
          </div>
          <p className="text-amber-100/90 mb-4">
            De praktische follow-up met o.a. ticketprijs, datum, website en
            eerste DJ-announcement (DEIBEATO!). Ideaal om te delen of nog even
            terug te lezen.
          </p>
          <SecondaryButton
            href="/files/Steengoed Festival Praktische Follow up Flyer.pdf"
            className="flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Flyer 2 – Praktische Info (PDF)</span>
          </SecondaryButton>
        </div>

        <div className="border-l-4 border-blue-500 pl-6">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-amber-100">
              Flyer 1 – Eerste Aankondiging
            </h2>
            <p className="text-sm text-amber-200/70 mt-1">16-07-2025</p>
          </div>
          <p className="text-amber-100/90 mb-4">
            Onze eerste officiële festivalflyer! De kickoff van het Steengoed
            Festival, met alle basisinfo en uitnodiging voor aanmelding.
          </p>
          <SecondaryButton
            href="/files/Steengoed Festival Announcement Flyer.pdf"
            className="flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Flyer 1 – Announcement (PDF)</span>
          </SecondaryButton>
        </div>
      </div>
    </SharedLayout>
  );
}
