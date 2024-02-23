import { getSections } from "@/sanity/sanity-utils"
import { Section } from "./components/section";

export default async function Home() {
  const sections = await getSections();

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      { sections.map((section) => (
          <Section section={section} />
        )
      )}
    </div>
  );
}
