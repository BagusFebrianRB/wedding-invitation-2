import Image from "next/image";

export default function SaveTheDate({
    akadTime = "08.00",
  }: {
    akadTime?: string;
  }) {
  return (
    <section className="relative min-h-screen w-full">
      <Image
        src="/save-the-date-3.png"
        alt="Save the date"
        fill
        className="object-cover object-center"
      />

      <div className="absolute top-[79%] left-1/2 grid w-[84%] -translate-x-1/2 grid-cols-[1fr_auto_1fr] items-stretch text-center">
        <div className="px-1">
          <h3 className="font-serif text-base uppercase tracking-[0.2em] text-burgundy-900">
            Akad
          </h3>
          <p className="mt-2 font-serif text-xs italic text-[#6b6a45]">
            Rabu, 28 Oktober 2026
          </p>
          <p className="mt-1.5 font-serif text-xs italic text-[#6b6a45]">
            {akadTime} WIB
          </p>
        </div>

        <div className="w-px bg-burgundy-900/80" />

        <div className="px-1">
          <h3 className="font-serif text-base uppercase tracking-[0.2em] text-burgundy-900">
            Resepsi
          </h3>
          <p className="mt-2 font-serif text-xs italic text-[#6b6a45]">
            Sabtu, 31 Oktober 2026
          </p>
          <p className="mt-1.5 font-serif text-xs italic text-[#6b6a45]">
            10.00 WIB
          </p>
        </div>
      </div>
    </section>
  );
}