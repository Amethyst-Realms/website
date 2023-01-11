"use client";

import { CheckCircleIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Copy from "../element/copy";
import Pill from "../element/pill";

export default function CopyIP({ small }: { small?: boolean }) {
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
        <Pill hover={true} small={small}>
          rove.minehut.gg <div className="relative ml-2 overflow-clip">
            <ClipboardIcon className={`w-5 h-5 ${copied && "opacity-0"} transition duration-300`} />
            <CheckCircleIcon className={`w-5 h-5 absolute ${copied && "-translate-y-5 text-purple-400"} transition`} />
            </div>
        </Pill>
      </span>
    </Copy>
  );
}
