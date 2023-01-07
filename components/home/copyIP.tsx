"use client";

import { useState } from "react";
import Copy from "../element/copy";
import Pill from "../element/pill";

export default function CopyIP({ small }: { small?:boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopied = () => {
    if (copied == false) {
      setCopied(true);
      setTimeout(() => setCopied(false), 750);
    }
  };

  return (
    <Copy toCopy="rove.minehut.gg">
      <span onClick={handleCopied}>
        <Pill hover={true} disabled={copied} small={small}>
          {copied ? "Copied!" : "Copy IP"}
        </Pill>
      </span>
    </Copy>
  );
}
