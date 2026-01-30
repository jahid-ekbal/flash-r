import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About this tool",
  description: "OS bootable pendrive creation tool",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <div className="space-y-2 text-center">
        <h1 className="text-5xl font-semibold">Nextjs Starter Frontend</h1>
        <h2 className="text-3xl">Production grade Next.js starter template</h2>
      </div>
    </section>
  );
};

export default page;
