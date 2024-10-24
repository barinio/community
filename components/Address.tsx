import React from "react";
import { Link } from "@nextui-org/link";

interface AddressProps {
  addressStyle?: string;
  textStyle?: string;
}

const Address = ({ addressStyle, textStyle }: AddressProps) => {
  return (
    <address className={`not-italic ${addressStyle}`}>
      <ul className="flex flex-col gap-2.5">
        <li>
          <Link
            href="https://maps.app.goo.gl/4mVECxi4PApCbU8V6"
            className={`text-[31px] leading-[0.98] ${textStyle}`}
            isExternal
          >
            6435 26e Avenue Montréal, QC H1T 3K7
          </Link>
        </li>
        <li>
          <Link
            href="mailto:info@communite.ca"
            className={`text-[31px] leading-[0.98] underline ${textStyle}`}
          >
            info@communite.ca
          </Link>
        </li>
        <li>
          <Link
            href="tel:+15148977216"
            className={`text-[31px] leading-[0.98] underline ${textStyle}`}
          >
            15148977216
          </Link>
        </li>
      </ul>
    </address>
  );
};

export default Address;
