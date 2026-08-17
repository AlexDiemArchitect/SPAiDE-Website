[README.md](https://github.com/user-attachments/files/31143767/README.md)
# SPAiDE — Website

Statische One-Page-Website für SPAiDE GmbH (Pentacube). Reines HTML/CSS/JS,
keine Build-Tools, kein Framework — läuft direkt über GitHub Pages.

## Struktur

```
index.html              Alle 5 Sektionen (Problem, Product, Team, FAQ, Contact)
assets/css/styles.css   Design-System (Farben, Typografie, Layout)
assets/js/main.js       Mobile-Menü + FAQ-Akkordeon
assets/img/             Logo, Favicon, Produkt-/Team-Fotos
```

## Lokal ansehen

Kein Server nötig — `index.html` einfach doppelklicken/im Browser öffnen.
Für einen lokalen Server (optional):

```bash
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

## Auf GitHub Pages veröffentlichen

1. Neues Repository auf GitHub anlegen (z. B. `spaide-website`)
2. Diesen Ordnerinhalt hochladen (z. B. per Drag & Drop im Browser, oder):
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<dein-user>/spaide-website.git
   git push -u origin main
   ```
3. Im Repo unter **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main`, Ordner: `/ (root)`
   - Speichern
4. Nach ca. 1 Minute ist die Seite live unter:
   `https://<dein-user>.github.io/spaide-website/`

## Inhalte anpassen

- **Texte / Struktur:** direkt in `index.html`, jede Sektion ist mit
  `<!-- ===== -->`-Kommentaren markiert.
- **Farben / Schrift:** über die CSS-Variablen ganz oben in
  `assets/css/styles.css` (`:root { ... }`).
- **Bilder austauschen:** Datei mit gleichem Namen in `assets/img/` ersetzen,
  oder Pfad in `index.html` anpassen.
- **FAQ erweitern:** einen weiteren Block nach dem Muster
  `<div class="faq-item">…</div>` in der FAQ-Sektion ergänzen.

## Hinweis

Alle Texte sind auf Englisch gehalten, passend zu den bestehenden
Pitch-Unterlagen (Deck, Q&A-Dokument). Bei Bedarf ist eine deutsche
Version über eine zweite `index.de.html` oder Sprachumschalter möglich.
