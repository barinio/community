import Image from "next/image";

import heroImg from "@/images/hero-img.png";

export default function Benefits() {
  return (
    <div>
      <h1 className="">Benefits</h1>
      <div className="items-center flex mb-[65px]">
        <div className="w-full mr-[90px]">
          <Image
            src={heroImg}
            width={554}
            height={505}
            alt="Picture of the author"
            className="object-fill m-auto"
          />
        </div>
      </div>
    </div>
  );
}
