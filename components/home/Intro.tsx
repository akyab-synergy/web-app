export default function Intro() {
  return (
    <section className="px-20 pb-20 min-h-[calc(100dvh-200px)] flex flex-col gap-6 items-start justify-center bg-delivery bg-no-repeat bg-[200%_10%] bg-80">
      <h1 className="text-5xl leading-snug font-bold max-w-[48%]">
        The new era of Air Ticket Sales & Delivery Service in your town
      </h1>
      <p className="max-w-[56%] text-xl">
        Enjoy competitive prices, extensive airline options, secure
        transactions, and 24/7 customer support. Experience hassle-free travel
        booking and delivery with Akyab Synerygy.
      </p>
      <a
        href="tel:09422755012"
        className="px-6 py-4 bg-primary text-lg text-white font-bold"
      >
        CALL FOR SERVICE NOW
      </a>
    </section>
  );
}
