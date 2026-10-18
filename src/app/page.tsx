import HomeClient from "@/components/HomeClient";

export default async function Home({ searchParams }: { searchParams: Promise<{ to?: string; akad?: string }> }) {
  const params = await searchParams;
  const guestName = params.to ? params.to.replace(/-/g, " ") : "Tamu Undangan";
  return <HomeClient guestName={guestName} akadTime={params.akad} />;
}