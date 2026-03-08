# Fotogram 📸

Eine moderne, interaktive Website zum Anzeigen und Navigieren eines persönlichen Fotoalbums.

Dieses Projekt entstand im Rahmen eigener Webentwicklungsprojekte zur Übung mit **HTML, CSS und JavaScript** und legt den Fokus auf **Responsivität, sauberen Code und Accessibility**.

🌍 **[Live-Demo ansehen](#)** | 💻 **[GitHub Repository](#)**

---

## 👥 Projektteam

Dieses Projekt wurde von:

- **Basti**

entwickelt.

---

## 📖 Über das Projekt

**Fotogram** ist eine responsive Galerie-App, die es ermöglicht, Fotos übersichtlich darzustellen und in einem Modal-Fenster zu vergrößern. Die Anwendung legt Wert auf eine intuitive Benutzeroberfläche, barrierefreie Navigation und eine saubere, leicht wartbare Dateistruktur.

Hauptziele bei der Entwicklung:

- Vollständig responsive Galerie mit Hover- und Skalierungseffekten
- Dynamisches Modal für Detailansicht der Bilder
- Keyboard-Navigation und Accessibility (Enter, Escape, Pfeiltasten)
- Skalierung der Bilder im Modal ohne Scrollbalken
- Mobile-first Design

---

## ✨ Features

- **Galerieübersicht:** Alle Bilder auf einen Blick mit Hover-Effekt und Vergrößerung
- **Modal / Lightbox:** Klick auf ein Bild öffnet das Modal mit:
  - Titel und Bildunterschrift
  - Navigation per Next/Prev Buttons oder Pfeiltasten
  - Bildzähler
  - Schließen per Button, Escape-Taste oder Klick außerhalb
- **Responsives Design:** Optimierte Darstellung auf allen Geräten (Smartphone, Tablet, Desktop)
- **Accessibility:** Vollständig tastatursteuerbar

---

## 🛠️ Tech-Stack

Das Projekt basiert auf modernen Webstandards ohne Frameworks:

- **HTML5** – Semantische Strukturierung
- **CSS3** – Flexbox, Grid, Media Queries, Responsive Design
- **JavaScript (Vanilla)** – DOM-Manipulation, Event-Handling, Modal-Logik

---

## 📂 Projektstruktur

Die Dateien sind logisch strukturiert, um Assets, Komponenten und Skripte sauber zu trennen:

```text
Fotogram/
├── assets/            # Statische Ressourcen
│   ├── img/           # Galerie-Bilder
│   └── icons/         # Navigation und Close Icons
├── css/
│   └── styles.css     # Hauptstylesheet
├── fonts/             # Lokale Figtree-Schriftarten
├── js/
│   └── script.js      # Haupt-JavaScript-Datei
├── index.html         # Startseite / Galerie
└── README.md          # Diese Dokumentation

🚀 Installation & Setup

Da Fotogram auf reinem HTML, CSS und JavaScript basiert, ist kein Build-Prozess nötig:

Repository klonen:

git clone https://github.com/dein-username/fotogram.git

In den Projektordner navigieren:

cd fotogram

Projekt starten:
Öffne die index.html Datei in einem Browser oder nutze "Live Server" in VS Code.

Ein großes Dankeschön an alle Lernressourcen und Mentoren, die bei der Entwicklung unterstützt haben.

Entwickelt mit ❤️ und ☕ von Basti.
