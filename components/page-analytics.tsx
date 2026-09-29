"use client";

import { useEffect } from "react";

function emit(name: string) {
  window.dispatchEvent(new CustomEvent("helena:analytics", { detail: { name } }));
}

export default function PageAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest<HTMLElement>("[data-analytics]");
      const name = trigger?.dataset.analytics;
      if (name) emit(name);
    };

    document.addEventListener("click", onClick);

    const viewed = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = (entry.target as HTMLElement).id;
          const eventName = id === "procedimentos" ? "view_service" : id === "resultados" ? "view_portfolio" : "";
          if (eventName && !viewed.has(eventName)) {
            viewed.add(eventName);
            emit(eventName);
          }
        }
      },
      { threshold: 0.25 },
    );

    for (const id of ["procedimentos", "resultados"]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    let sent50 = false;
    let sent90 = false;
    const checkScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = window.scrollY / scrollable;
      if (progress >= 0.5 && !sent50) {
        sent50 = true;
        emit("scroll_50");
      }
      if (progress >= 0.9 && !sent90) {
        sent90 = true;
        emit("scroll_90");
      }
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", checkScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
