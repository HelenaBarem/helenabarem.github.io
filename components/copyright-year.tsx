"use client";

import { useState } from "react";

export default function CopyrightYear() {
  const [year] = useState(() => new Date().getFullYear());
  return <>{year}</>;
}
