export function initGallery(mainId: string, thumbsId: string) {
  const mainImage = document.getElementById(mainId) as HTMLImageElement | null;
  const thumbs = document.querySelectorAll<HTMLImageElement>(`#${thumbsId} img`);

  if (!mainImage) return;

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const newSrc = thumb.getAttribute("src");
      if (newSrc) {
        mainImage.src = newSrc;

        // Quitar borde activo de los demás
        thumbs.forEach((t) => t.classList.remove("ring-2", "ring-blue-500"));

        // Agregar borde al thumbnail activo
        thumb.classList.add("ring-2", "ring-blue-500");
      }
    });
  });
}
