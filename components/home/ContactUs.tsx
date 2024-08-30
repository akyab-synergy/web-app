import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="flex">
      <div className="w-full h-full relative rounded-full">
        <Image
          src={"/world_map.svg"}
          alt="immage"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <h3>Get In Touch With Us</h3>
        <form action="">
          <input type="text" placeholder="Your Name" />
        </form>
      </div>
    </section>
  );
}
