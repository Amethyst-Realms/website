"use client";

import { useState } from "react";
import Copy from "../element/copy";
import Pill from "../element/pill";

export default function CopyIP() {
  const [copied, setCopied] = useState(false);

  const handleCopied = () => {
    if (copied == false) {
      setCopied(true);
      setTimeout(() => setCopied(false), 750);
    }
  };

  return (
    <Copy toCopy="ip of server">
      <span onClick={handleCopied}>
        <Pill hover={true} disabled={copied}>
          {copied ? "Copied!" : "Copy IP"}
        </Pill>
      </span>
    </Copy>
  );
}
