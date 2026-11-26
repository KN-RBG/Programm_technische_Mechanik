# Versionshistorie

## 1.2.3
Balken auswählen; Freischnitt > Balken schneiden (N, Q, M). Abstand vom Balkenanfang in der Längeneinheit eingeben. Ein oder beide Teilkörper werden rechts vom Original erzeugt. Positives Schnittufer: N lokal +x, Q lokal nach unten, M gegen den Uhrzeigersinn; negatives Schnittufer: entgegengesetzt. Befestigte Lager und Punktlasten werden nach ihrer Station zugeordnet, lineare Streckenlasten mit zwei direkten Balkenankern werden interpoliert und geteilt. Schnitt genau auf einer Punktlast/Bindung nicht zulässig. Keine Berechnung; unklare Verbindungen und Bemaßungen manuell ergänzen.

## 1.2.2
Beim Freischnitt ausgewählter Teilkörper werden eindeutig beidseitig verankerte Seile und Fachwerkstäbe an der Systemgrenze durch angenommene Zugkräfte ersetzt. Innere Verbindungen bleiben erhalten. Ein Gelenk mit einem befestigten Balken und genau einem geometrisch berührenden weiteren Balken wird nur nach ausdrücklicher Bestätigung als Verbindung behandelt. Gegenrichtungen bei getrennten Seiten; H/V-Indizes. Rollen, unklare Mehrfachverbindungen, zusätzliche Stablasten, freie Anker und Endkräfte eines selbst ausgewählten Stabs manuell prüfen. Keine Berechnung der Kraftbeträge.

## 1.2.1
Ausgewählte Teilkörper: Balken oder geometrische Bauteile auswählen (Strg-Klick für mehrere; Alt-Klick für einzelne Gruppenmitglieder). Freischnitt > Ausgewählte Teilkörper freischneiden. Verbundene Lager und Einzelkräfte/Momente werden übernommen, Streckenlasten mit beiden zugeordneten Bezugspunkten ebenfalls. Ungebundene Lasten und Beschriftungen bei Bedarf ausdrücklich mit auswählen. Unklare Verbindungen werden gemeldet, Gelenk-/Stab-/Seilkräfte und Schnittgrößen noch manuell ergänzen. Original bleibt erhalten, Kopie rechts. Benennung F_{AH}, F_{AV}, F_{B}, M_{C}.

## 1.2.0.1
Lagerkraftbezeichnungen mit H/V-Indizes.

## 1.2.0
Automatischer Freischnitt einfacher Gesamtsysteme: Menü Freischnitt > Gesamtsystem freischneiden. Kopie rechts neben dem Original, unbekannte blaue Reaktionen mit grafischer Pfeillänge. Festlager zwei Kraftkomponenten, Loslager normal zur Lagerfläche, Einspannung zwei Kraftkomponenten und Moment. Vorhandene Lasten bleiben unverändert. Keine Berechnung, keine inneren Schnittkräfte. Mehrfaches Freischneiden derselben Zeichnung wird verhindert. Rückgängig entfernt den erzeugten Freischnitt.

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
