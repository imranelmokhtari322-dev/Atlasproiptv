declare function gtag(...args: unknown[]): void;

export function trackWhatsAppConversion() {
  if (typeof gtag !== "undefined") {
    gtag("event", "conversion", { send_to: "AW-18217449957/T780CN2-77ocEOXz4O5D" });
  }
}
