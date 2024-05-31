"use client";

import Image from "next/image";
import { useState } from "react";

const imageLoader = ({ src, width }) => {
  if (width) {
    return src + "?w=" + width;
  }

  return src;
};

export function ImgCustom({
  src,
  alt = "",
  width = 0,
  height = 0,
  className = "",
  priority = true,
  fit = "contain",
}) {
  const [loading, setLoading] = useState(true);
  function handleLoadingComplete() {
    setLoading(false);
  }

  return (
    <>
      <Image
        src={src || ''}
        width={width}
        height={height}
        alt={alt}
        className={className}
        priority={priority}
        style={{ objectFit: fit, display: loading ? "none" : "" }}
        loader={imageLoader}
        onLoadingComplete={handleLoadingComplete}
      />
    </>
  );
}
