# Proyecto 2

Versión en formato web de la carta de presentación de Lucía Esteban Peña.
Mismo diseño y misma tecnología que el portfolio (LuciaEsteban.github.io),
con contenido orientado a un cambio de sector fuera de la consultoría,
en modalidad 100% remota o híbrida.

## Publicar en GitHub Pages

1. Crear un repositorio nuevo en la cuenta `LuciaEsteban` llamado `Proyecto-2`.
2. Subir el contenido de esta carpeta a la rama `main`.
3. En *Settings > Pages*, elegir *Deploy from a branch*, rama `main`, carpeta `/ (root)`.
4. La página quedará en https://luciaesteban.github.io/Proyecto-2/

## Notas

- Los textos están en `assets/js/i18n.js` (EN/ES) y los de la intro en `assets/js/experience/core.js`.
- La página lleva `noindex` para que no aparezca en buscadores; se comparte por enlace directo.
  Para hacerla buscable, quitar la línea `<meta name="robots" ...>` de `index.html`.
- El mensaje de voz (`assets/audio/opening-*.mp3`) es el del portfolio y dice "portfolio".
  Si se graba uno nuevo, actualizar también los subtítulos `openingCues` en `core.js`.
- Ejecutar en local: `python3 -m http.server 8000` y abrir http://localhost:8000
