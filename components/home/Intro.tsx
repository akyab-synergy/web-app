export default function Intro() {
  return (
    <section className="animate-bounce-once px-6 lg:pt-0 lg:px-20 pb-20 min-h-[700px] lg:min-h-[calc(100dvh-200px)] flex flex-col gap-6 items-start justify-start lg:justify-center bg-delivery bg-no-repeat bg-[200%_95%] lg:bg-[200%_10%] lg:bg-80">
      <h1 className="text-xl lg:text-5xl leading-snug font-bold lg:max-w-[48%]">
        The new era of Air Ticket Sales & Delivery Service in your town
      </h1>
      <p className="lg:max-w-[56%] text-base lg:text-2xl">
        Enjoy competitive prices, extensive airline options, secure
        transactions, and 24/7 customer support. Experience hassle-free travel
        booking and delivery with Akyab Synerygy.
      </p>
      <a
        href="tel:09422755012"
        className="px-6 py-4 bg-primary text-base w-full lg:w-auto text-center lg:text-lg text-white font-bold"
      >
        CALL FOR SERVICE NOW
      </a>
    </section>
  );
}
