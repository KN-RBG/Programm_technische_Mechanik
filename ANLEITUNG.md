# TM-Draw 1.2.0 – Bedienungsanleitung

Browserbasierter Zeichnungseditor für die Technische Mechanik. Online: https://kn-rbg.github.io/Programm_technische_Mechanik/

## Start und Offline-Nutzung
Repository als ZIP herunterladen, vollständig entpacken und index.html öffnen. Die Ordner css und js müssen erhalten bleiben. Kein Server und keine Installation erforderlich. Browserabhängige Speicher- und Vollbildfunktionen können lokal eingeschränkt sein.

## Oberfläche
Menüs Datei, Bearbeiten, Ansicht, Anordnen, Export, Hilfe. Werkzeugleiste für häufige Befehle. Links 22 Symbole in sieben Kategorien, rechts Eigenschaften des gewählten Elements. Statusleiste für Raster, Fang, Maßstäbe und Zoom. Trennbalken ziehen; Doppelklick stellt Standardbreite wieder her. Seitenleisten separat ausblendbar. Vollbild über Werkzeugleiste. Rasterfläche wächst bei unverändertem Zoom. Oberflächeneinstellungen werden lokal gespeichert; Ansicht bietet Rücksetzen. Lange Symbolbezeichnungen umbrechen automatisch. Hilfe enthält die PDF-Kurzanleitung und Versionshistorie.

## Zeichnen und Auswählen
Symbol anklicken und platzieren oder hineinziehen. Rasterfang und Bauteilfang unabhängig; Fangpunkte separat anzeigen. Mausrad zoomt, mittlere Maustaste verschiebt Ansicht. Strg-Klick erweitert Auswahl; Alt-Klick wählt einzelnes Gruppenmitglied. Auswahlrahmen links nach rechts erfasst vollständig enthaltene, rechts nach links überlappende Elemente. Auswahlrahmen-Werkzeug funktioniert auch über vorhandenen Elementen. Entf löscht, Strg+Z/Y macht rückgängig/wiederholt. Eigenschaften ermöglichen numerische Position, Winkel und Abmessungen. Drehgriff, Umschalt für 15-Grad-Schritte.

## Maßstäbe
Statusleiste oder Ansicht > Maßstabseinstellungen. Ein Rasterkästchen = 20 Zeichnungseinheiten. Kraftmaßstab in N/Kästchen, Längenmaßstab in mm/cm/m pro Kästchen. Einheitenwechsel rechnet um. Übernehmen bestätigt, Abbrechen verwirft. Maßstäbe gehören zur Projektdatei.

## Symbole
- Bauteile: Balken, Gelenk, Knotenpunkt, Fachwerkstab.
- Lager: Festlager, Loslager, Einspannung.
- Kräfte: Einzelkraft (rot), Moment, Streckenlast, Wirkungslinie.
- Seile und Rollen: Seil, Umlenkrolle.
- Bemaßung: dynamische, freie und manuelle Maße.
- Geometrie: Linie, Rechteck, Kreis, Ellipse, Polygon, freies Polygon.
- Text und Koordinatensystem.

Balken: Länge/Höhe und Winkel. Lager, Kräfte und Knoten können an Balken befestigt werden und folgen der Bewegung; Verbindung in Eigenschaften lösen. Fachwerkstab und Seil: Anfangs- und Endpunkt anklicken, Bezugspunkte neu wählen oder lösen. Alt ermöglicht freie Punkte. Umlenkrollen: Seile tangential verbinden; bei zwei tangentialen Seilen automatischer Seilbogen, andere Umschlingungsseite oder aus.

Kräfte: Betrag, Richtung (0° rechts, 90° oben), Bezeichnung, Betrag/Winkel optional anzeigen. F_1 oder F_{Ax} erzeugt Index. Beschriftungen verschiebbar. Umschalt beim Ziehen des Kraftpfeils verschiebt entlang der Wirkungslinie und löst die Befestigung. Wirkungslinie an Kraft koppeln oder frei platzieren. Moment: Betrag, Pfeilradius, Drehsinn. Streckenlast: zwei Punkte, q1/q2, Einheit N/m oder kN/m, Lastmaßstab, Richtung, Pfeilanzahl.

## Bemaßung
Modus in der Symbolbibliothek wählen. Automatisch/Fangpunkte: zwei Bezugspunkte anklicken, dritter Klick legt Abstand der Maßlinie fest. Frei: ohne Fang; manuell: Position und Maße über Eigenschaften. Horizontal, vertikal oder direkt. Dynamische Maße folgen Bezugspunkten. Textposition, Textrichtung, Pfeilgröße, Außenpfeile, Abstand und Beschriftung anpassen. Bezugspunkte neu wählen oder in manuelle Bemaßung umwandeln.

## Geometrie und Achsen
Formen mit Abmessungen, Linienart, Farbe, Stärke und optionaler Füllung. Freies Polygon: Eckpunkte anklicken, Doppelklick oder Enter beendet; blaue Eckpunkte ziehen, weiße Mittelpunkte fügen Eckpunkte hinzu, Alt-Klick entfernt (mindestens drei). Koordinatensystem: positive/negative Achsen, Beschriftung, Teilstriche, Zahlenwerte, Schriftgröße und Drehung.

## Anordnen
Mehrere Elemente auswählen, gruppieren oder Gruppierung aufheben. Gruppen werden gemeinsam bewegt, gedreht, dupliziert. Zeichenreihenfolge vorne/hinten bzw. eine Ebene vor/zurück. Ausrichten an linken/rechten/oberen/unteren Kanten oder Mittelpunkten; Verteilen X/Y ab drei Einheiten mit gleichen Zwischenräumen. Spiegeln horizontal/vertikal um Auswahlmittelpunkt. Bei aufzulösenden externen Verbindungen erscheint eine Abfrage. Komplexe dynamische Verbindungen und gespiegelte Bemaßungen im Einzelfall kontrollieren.

## Speichern und Export
Vor dem Schließen als JSON speichern. Datei > Neues Projekt erzeugt eine leere Zeichnung mit Standardmaßstäben. Vor dem Verwerfen ungespeicherter Änderungen wird gewarnt. Die automatische Zwischenspeicherung prüft etwa alle 1,5 Sekunden auf Änderungen und legt eine lokale Wiederherstellungskopie an. Beim Neustart wird die Wiederherstellung angeboten. Unter Datei lässt sich die Autosicherung abschalten; dabei wird die lokale Kopie nach Rückfrage gelöscht. Die Sicherung ist an Browser und Profil gebunden und ersetzt keine JSON-Datei. Bei Browserdownloads kann das Programm den erfolgreichen Abschluss nicht prüfen: Nach dem Speichern im Download-Ordner unter Datei > Download als gespeichert bestätigen die Speicherung ausdrücklich bestätigen. Nur einen Editor-Tab gleichzeitig verwenden. Projekt als JSON speichern oder öffnen; enthält Elemente, Gruppen, Verbindungen und Maßstäbe. Speichern unter ermöglicht neuen Namen. Je nach Browser direkter Dateidialog oder Download. Firefox: Download-Einstellung „Jedes Mal nachfragen, wo eine Datei gespeichert werden soll“ optional aktivieren.

Export: ganze Zeichnung oder Auswahl, Rand, optional Raster und transparenter Hintergrund.
- SVG: skalierbare Vektorgrafik.
- PNG: 96/150/300/600 dpi oder Pixelbreite, Höhe automatisch.
- PDF: Vektorgrafik, automatische Größe oder A4/A5, Hoch-/Querformat, Zeichnungsbreite.
- PSTricks: pspicture-Ausschnitt oder vollständiges LaTeX-Dokument mit eigener Präambel (Latin-1). Code kopieren oder Datei exportieren. Vollständiges Dokument mit pdfLaTeX und -shell-escape kompilieren; auto-pst-pdf erzeugt die Zwischenbilder. Für Ausschnitte gilt die Kompilierung des Zieldokuments.

## Freigabestand und Ausblick
1.0.2 ergänzt neues Projekt und lokale Wiederherstellung. 1.0.1 ergänzt die Dokumentation; die Zeichnungslogik bleibt unverändert. 1.0.0 basiert auf 0.9.6. Die grundlegenden Zeichen- und Exportfunktionen sowie die schrittweisen Oberflächenänderungen wurden im Projektverlauf getestet; ein vollständiger abschließender Regressionstest wurde bewusst nicht durchgeführt. Vollbild, Persistenz, komplexe Spiegelungen und alle Kombinationen im Unterrichtsbetrieb weiter prüfen. Fehler bei Bedarf korrigieren.

Zurückgestellt: Formatpinsel, eigene Symbolbibliothek, Aufgabenvorlagen. Keine dieser Funktionen ist in 1.0.2 enthalten.

# Versionshistorie

## 1.0.2
Neues Projekt, Sicherheitsabfragen, lokale Wiederherstellung und Speicherstatus.

## 1.0.1
PDF-Kurzanleitung im Hilfemenü, Versionshistorie und aktualisierte Dokumentation.

## 1.0.0
Erste Produktivversion auf Grundlage von 0.9.6.

## 0.9.6
Responsive Symbolkacheln, Textumbruch und Tooltips.

## 0.9.5
Vollbild und lokal gespeicherte Oberflächeneinstellungen.

## 0.9.4 / 0.9.4.1
Flexible Seitenleisten und dynamische Rasterfläche.

## 0.9.1–0.9.3
Symbolkategorien, Eigenschaften und Maßstabsdialog.

## 0.9.0
Menü-, Werkzeug- und Statusleiste.

## 0.7.0–0.7.1
Ausrichten, Verteilen und Spiegeln.

## 0.6.0–0.6.6
SVG, PNG, PDF und PSTricks.

## 0.5.x
Geometrie, Gruppen, Zeichenreihenfolge und Auswahlrahmen.

## 0.4.x
Momente, Streckenlasten, Bemaßungen, Knoten, Achsen, Wirkungslinien, Seile und Rollen.

## 0.1–0.3.x
Grundeditor, Kräfte, Lager, Maßstäbe, Fangfunktionen, Auswahl und Verlauf.

## Automatischer Freischnitt (1.2.0)
Automatischer Freischnitt einfacher Gesamtsysteme: Menü Freischnitt > Gesamtsystem freischneiden. Kopie rechts neben dem Original, unbekannte blaue Reaktionen mit grafischer Pfeillänge. Festlager zwei Kraftkomponenten, Loslager normal zur Lagerfläche, Einspannung zwei Kraftkomponenten und Moment. Vorhandene Lasten bleiben unverändert. Keine Berechnung, keine inneren Schnittkräfte. Mehrfaches Freischneiden derselben Zeichnung wird verhindert. Rückgängig entfernt den erzeugten Freischnitt.
