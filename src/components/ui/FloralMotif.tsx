import React from "react";

/**
 * Delicate Royal Symmetrical Divider with a central blooming lotus & vine fleuron.
 * Designed to gracefully segment sections and anchor vertical whitespace in luminous gold.
 */
export function FloralDivider({
  className = "",
  variant = "center",
}: {
  className?: string;
  variant?: "center" | "compact";
}) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center justify-center gap-3 my-4 opacity-95 ${className}`}>
        <span className="h-[1px] w-14 bg-gradient-to-r from-transparent via-gold/50 to-gold" />
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gold shrink-0 drop-shadow-xs"
        >
          <path
            d="M12 3C12 3 14 7 14 10C14 11.5 13 13 12 14C11 13 10 11.5 10 10C10 7 12 3 12 3Z"
            fill="currentColor"
            fillOpacity="0.75"
          />
          <path
            d="M12 14C12 14 16 11 18 13C19.5 14.5 19 16.5 17.5 17C15.5 17.5 13 15.5 12 14Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <path
            d="M12 14C12 14 8 11 6 13C4.5 14.5 5 16.5 6.5 17C8.5 17.5 11 15.5 12 14Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <circle cx="12" cy="14" r="1.5" fill="currentColor" />
        </svg>
        <span className="h-[1px] w-14 bg-gradient-to-l from-transparent via-gold/50 to-gold" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center gap-4 my-6 opacity-95 select-none ${className}`}>
      <span className="h-[1px] flex-1 max-w-[140px] bg-gradient-to-r from-transparent via-gold/50 to-gold" />
      <svg
        viewBox="0 0 120 24"
        width="100"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold shrink-0 drop-shadow-xs"
      >
        {/* Left scrolling tendril */}
        <path
          d="M15 12C25 12 28 8 36 8C44 8 46 15 54 13"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="16" cy="12" r="1.3" fill="currentColor" />
        <path
          d="M28 8C27 5 30 4 32 5C33 6 32 8 28 8Z"
          fill="currentColor"
          fillOpacity="0.7"
        />

        {/* Central Lotus Bloom */}
        <path
          d="M60 4C60 4 63 9 63 12C63 14 61.5 15.5 60 16.5C58.5 15.5 57 14 57 12C57 9 60 4 60 4Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <path
          d="M60 16.5C60 16.5 66 12 69 14.5C71 16 70.5 18 68.5 18.5C66 19 62 17.5 60 16.5Z"
          fill="currentColor"
          fillOpacity="0.65"
        />
        <path
          d="M60 16.5C60 16.5 54 12 51 14.5C49 16 49.5 18 51.5 18.5C54 19 58 17.5 60 16.5Z"
          fill="currentColor"
          fillOpacity="0.65"
        />
        <circle cx="60" cy="16.5" r="1.6" fill="currentColor" />

        {/* Right scrolling tendril */}
        <path
          d="M105 12C95 12 92 8 84 8C76 8 74 15 66 13"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="104" cy="12" r="1.3" fill="currentColor" />
        <path
          d="M92 8C93 5 90 4 88 5C87 6 88 8 92 8Z"
          fill="currentColor"
          fillOpacity="0.7"
        />
      </svg>
      <span className="h-[1px] flex-1 max-w-[140px] bg-gradient-to-l from-transparent via-gold/50 to-gold" />
    </div>
  );
}

/**
 * Royal Corner Flourish for framing luxury cards & panels.
 * Solves excess whitespace inside cards with rich royal gold filigree.
 */
export function FloralCorner({
  position = "top-left",
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const getTransform = () => {
    switch (position) {
      case "top-right":
        return "scale-x-[-1]";
      case "bottom-left":
        return "scale-y-[-1]";
      case "bottom-right":
        return "scale-[-1]";
      default:
        return "";
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case "top-right":
        return "top-3 right-3";
      case "bottom-left":
        return "bottom-3 left-3";
      case "bottom-right":
        return "bottom-3 right-3";
      default:
        return "top-3 left-3";
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none text-gold/75 ${getPositionClasses()} ${getTransform()} ${className}`}
      aria-hidden="true"
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Right-angle frame lines */}
        <path d="M1 32V6C1 3.23858 3.23858 1 6 1H32" stroke="currentColor" strokeWidth="1" />
        {/* Inner botanical petal curve */}
        <path
          d="M6 16C6 10.4772 10.4772 6 16 6"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 1.5"
        />
        <circle cx="6" cy="6" r="1.6" fill="currentColor" fillOpacity="0.85" />
        {/* Floral leaf bud */}
        <path
          d="M8 8C11 5 14 6 15 8C15 10 12 12 8 8Z"
          fill="currentColor"
          fillOpacity="0.65"
        />
      </svg>
    </div>
  );
}

/**
 * Full 4-corner luxury framing wrapper for featured cards.
 */
export function RoyalCardFrame({
  children,
  className = "",
  innerClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl border border-gold/30 bg-white p-2 sm:p-3 shadow-xl ${className}`}
    >
      <div
        className={`relative rounded-2xl border border-gold/20 p-6 sm:p-10 lg:p-12 h-full overflow-hidden ${innerClassName}`}
      >
        <FloralCorner position="top-left" />
        <FloralCorner position="top-right" />
        <FloralCorner position="bottom-left" />
        <FloralCorner position="bottom-right" />
        {children}
      </div>
    </div>
  );
}

/**
 * Rich Botanical Vine Watermark for wide background margins.
 * Warm royal gold at high visibility to turn empty space into bespoke stationery.
 */
export function BotanicalWatermark({
  className = "",
  orientation = "left",
}: {
  className?: string;
  orientation?: "left" | "right";
}) {
  return (
    <div
      className={`absolute pointer-events-none select-none text-gold/[0.14] -z-0 ${
        orientation === "right"
          ? "right-0 top-1/2 -translate-y-1/2 scale-x-[-1]"
          : "left-0 top-1/2 -translate-y-1/2"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        width="300"
        height="500"
        viewBox="0 0 280 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 40C40 100 80 160 50 240C20 320 90 390 140 450"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Leaves */}
        <path
          d="M32 90C45 80 65 85 70 100C65 115 45 118 32 90Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M58 150C75 140 98 148 102 165C96 182 72 184 58 150Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M45 220C30 210 15 218 10 232C15 248 35 248 45 220Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M55 280C75 270 100 280 105 298C98 315 72 318 55 280Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M85 350C105 340 130 350 134 368C126 385 100 388 85 350Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        <path
          d="M110 410C132 400 158 410 162 428C154 445 125 448 110 410Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
        {/* Buds & Tendrils */}
        <circle cx="70" cy="100" r="3.5" fill="currentColor" />
        <circle cx="102" cy="165" r="4" fill="currentColor" />
        <circle cx="105" cy="298" r="4" fill="currentColor" />
      </svg>
    </div>
  );
}

/**
 * Petite Mughal Royal Blossom Medallion for section crowns.
 */
export function RoyalBlossomMedallion({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center text-gold mb-3 drop-shadow-xs ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1.5" />
        <circle cx="14" cy="14" r="2.2" fill="currentColor" />
        {/* 8-Petal Royal Lotus rosette */}
        <path d="M14 5.5C14 8.5 12 11 14 14C16 11 14 8.5 14 5.5Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M14 22.5C14 19.5 12 17 14 14C16 17 14 19.5 14 22.5Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M5.5 14C8.5 14 11 12 14 14C11 16 8.5 14 5.5 14Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M22.5 14C19.5 14 17 12 14 14C17 16 19.5 14 22.5 14Z" fill="currentColor" fillOpacity="0.8" />
      </svg>
    </div>
  );
}

/**
 * Minimalist Floral Sprig for inline badge accents or subtle decorative endpoints.
 */
export function FloralSprig({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-gold shrink-0 inline-block drop-shadow-xs ${className}`}
      aria-hidden="true"
    >
      <path
        d="M4 20C8 18 12 14 16 7C17 5 19 3 21 3"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      {/* Delicate leaves */}
      <path
        d="M11 15C11 12 13 11 15 12C16 13 15 16 11 15Z"
        fill="currentColor"
        fillOpacity="0.75"
      />
      <path
        d="M7 17C6 14 7.5 13 9 14C10 15 9.5 17.5 7 17Z"
        fill="currentColor"
        fillOpacity="0.65"
      />
      <path
        d="M15 9C15 6.5 17.5 6 18.5 7.5C19 8.5 18 10.5 15 9Z"
        fill="currentColor"
        fillOpacity="0.75"
      />
      <circle cx="21" cy="3" r="1.4" fill="currentColor" />
    </svg>
  );
}

/**
 * Minimalist cascading floral vine for outer page margins / wide whitespace areas.
 * Occupies empty page borders with warm royal gold at high visibility.
 */
export function FloralSideGutter({
  side = "left",
  className = "",
}: {
  side?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none select-none text-gold/[0.15] -z-0 hidden xl:block ${
        side === "right"
          ? "right-0 top-0 scale-x-[-1]"
          : "left-0 top-0"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        width="170"
        height="900"
        viewBox="0 0 160 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft curving stem flowing down the margin */}
        <path
          d="M20 0C60 150 10 300 50 450C90 600 20 750 60 900"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Leaf pairs & blossoms down the margin */}
        <path d="M38 120C55 105 78 112 80 128C70 142 46 142 38 120Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M22 210C10 195 2 208 8 222C18 230 30 225 22 210Z" fill="currentColor" fillOpacity="0.8" />
        <circle cx="82" cy="128" r="3" fill="currentColor" />

        <path d="M25 340C45 325 65 330 68 348C58 360 38 360 25 340Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M42 430C25 418 20 435 28 448C38 455 52 448 42 430Z" fill="currentColor" fillOpacity="0.8" />
        <circle cx="70" cy="348" r="3" fill="currentColor" />

        <path d="M68 560C90 545 110 552 112 570C100 582 78 582 68 560Z" fill="currentColor" fillOpacity="0.8" />
        <path d="M45 660C30 648 24 662 32 675C42 682 55 678 45 660Z" fill="currentColor" fillOpacity="0.8" />
        <circle cx="114" cy="570" r="3" fill="currentColor" />

        <path d="M35 780C55 765 75 772 78 790C68 802 48 802 35 780Z" fill="currentColor" fillOpacity="0.8" />
        <circle cx="80" cy="790" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}
