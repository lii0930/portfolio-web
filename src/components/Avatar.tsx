import React from "react";
import Image from "next/image";
export default function Avatar() {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/character-2.png"}
        width={453}
        height={550}
        className="translate-z-0 w-full h-full"
        alt={""}
        unoptimized
      />
    </div>
  );
}
