import Image from "next/image";

export default function Services() {
  const images = ["/profile.png", "/profile.png", "/profile.png"];
  return (
    <>
      <div className="bg-red-600 min-h-[25dvh] flex justify-around items-center">
        <div>icon && text</div>
        <div>icon && text</div>
        <div>icon && text</div>
      </div>
      <div className="min-h-[75dvh] flex flex-col gap-10 items-center py-10 px-20">
        <h2 className="font-bold text-3xl">Our Services</h2>
        <div className="flex justify-around items-center w-full">
          {images.map((image) => (
            <div className="space-y-5 text-center">
              <div className="border-[3px] border-transparent hover:border-red-600 rounded-2xl">
                <Image
                  src={image}
                  alt="hello"
                  width={300}
                  height={200}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <h3 className="font-semibold text-xl">Lorem Ipsum</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
