# Versionshistorie

## 2.1.4
Automatisch erzeugte Lagerreaktionen: Festlager A_x und A_y, Loslager B_y bei horizontaler Auflage, B_x bei vertikaler Auflage, B_n bei schräger Auflage (Normalrichtung). Einspannung C_x, C_y, M_C. Explizite Lagerbezeichnungen bleiben maßgeblich; unbeschriftete Lager erhalten fortlaufende Buchstaben. Gelenk-, Stab-, Seilkräfte und Schnittgrößen bleiben unverändert. Bestehende Freischnitte werden nicht automatisch umbenannt.

## 2.1.3
Freischnitte (Gesamtsystem, Teilkörper und Balkenschnitt) stellen Balken standardmäßig als dicke dunkle Linie entlang der Balkenachse dar. Die Option ist im Dialog abwählbar; einzelne Balken lassen sich unter Eigenschaften > Darstellung umschalten. Ursprüngliches Balkenobjekt, Länge, Höhe und reale Angriffspunkte bleiben erhalten; exzentrische Kräfte werden nicht auf die Achse verschoben, da dies das Moment ändern könnte. Reine Darstellungsänderung; bei exzentrischen Kräften die sichtbare Distanz beachten. JSON speichert beamLine.

## 2.1.2
Flächenlast: Checkbox „Linear veränderliche Flächenlast“ aktiviert getrennte Anfangs- und Endwerte p1/p2. Beide sind nichtnegativ; konstante Richtung, Variation nur entlang der Flächenlänge a, über Breite b konstant. Pfeillänge linear interpoliert. Resultierende F=(p1+p2)*a*b/2; Angriffspunkt x=a*(p1+2*p2)/(3*(p1+p2)), y=b/2 (lokale Flächenkoordinaten); bei Null-Last kein Ersatz. Streckenlast q1=p1*b, q2=p2*b auf Mittellinie. Einheitenwechsel rechnet beide Werte und Maßstab um. Alte Dateien mit pValue bleiben konstant, pEnd und pLinear werden in JSON gespeichert. Schematische Projektion, kein hydrostatischer Tiefenautomatismus und keine automatische Balkenzuordnung.

## 2.1.1
Flächenlasten umrechnen (Freischnitt-Menü und Gesamtsystem-/Teilkörperfreischnitt): gleichmäßige rechteckige Flächenlast mit tatsächlicher Länge a und Breite b in m, p in N/m². Resultierende F=p*a*b in N am projizierten Flächenschwerpunkt; alternativ q=p*b in N/m entlang der projizierten Flächenmittellinie, gleiche Richtung. Bei Trägern muss b der tatsächlichen Einflussbreite entsprechen. Original wahlweise entfernen oder gestrichelt als Konstruktionshilfe behalten. Keine automatische Zuordnung zum Träger; Ersatzobjekte frei platzierbar, keine dynamische Rückrechnung. Explizit gewählte Streckenlast bleibt im Freischnitt als Streckenlast erhalten. Balkenschnitt berücksichtigt Flächenlasten nicht automatisch; Warnung bleibt. Einheiten N/m², kN/m², N/mm² werden umgerechnet.

## 2.1.0
Neues Symbol Flächenlast unter Kräfte und Lasten. Rechteckfläche in schematischer Schrägprojektion (keine 3D-Geometrie). Position am vorderen linken Eckpunkt, Länge und tatsächliche Breite im Seitenmaßstab, p in N/m², kN/m² oder N/mm²; Einheitenwechsel rechnet p und Pfeilmaßstab um. Pfeilrichtung relativ zur Zeichenfläche des Symbols, Pfeilanzahl je Richtung und Wertanzeige einstellbar. Beschriftung frei verschiebbar. Flächenlast im Gesamtschnitt erhalten, für Teilkörper ausdrücklich auswählen; Balkenschnitt warnt vor nicht automatisch geteilten Flächenlasten. Umrechnung und Resultierende folgen in 2.1.1.

## 2.0.1
Korrektur: Ziehen an Kraft-, Winkel- und Maßbeschriftungen wählt das einzelne Objekt, unabhängig von Gruppenzugehörigkeit oder benachbarten Knoten. Nur Textversatz wird verändert; Angriffspunkt, Befestigung und Gruppierung bleiben erhalten. Objektsperre bleibt wirksam.

## 2.0.0
Mehrseitiger Vektor-PDF-Export, aktualisierte Bedienungsanleitung. Funktionsabschluss; vollständiger praktischer Regressionstest steht aus.

## 1.4.0
Seitenregister unter der Zeichenfläche: neu, umbenennen, duplizieren, verschieben, löschen (mindestens eine Seite). Jede Seite hat eigene Elemente und Maßstäbe. JSON Version 6 speichert alle Seiten und aktive Seite; Versionen 1–5 werden als Einzelzeichnung geöffnet. Autosicherung und projektweiter Verlauf erfassen alle Seiten. Seitenwechsel ist keine Inhaltsänderung. Freischnitt und Balkenschnitt optional auf eigenen Seiten. Export der aktuellen Seite in allen bisherigen Formaten; mehrseitiger PDF-Export folgt.

## 1.3.1
Objektliste: Schloss pro Objekt sowie Auswahl sperren/entsperren. Gesperrte Objekte bleiben auswählbar, sichtbar und exportierbar. Bearbeiten, Ziehen, Drehen, Löschen, Gruppieren, Spiegeln und Zerlegen sind bei gesperrter Auswahl blockiert. Auch Anker- und Verbindungsobjekte, von denen gesperrte Elemente abhängen, sind gegen Bearbeitung geschützt. Zeichenreihenfolge nur ändern, wenn keine Objekte gesperrt sind. Kopien (auch Freischnittkopien) werden entsperrt erzeugt. Projektweite Maßstäbe, Rückgängig/Wiederholen und Projektwechsel bleiben möglich. Sperrstatus in JSON und Autosicherung.

## 1.3.0
Objektliste in der rechten Seitenleiste (standardmäßig eingeklappt; Ansicht > Objektliste anzeigen öffnet sie). Alle Objekte in umgekehrter Zeichenreihenfolge, Vordergrund zuerst. Beschriftung, Typ und Gruppenzugehörigkeit sichtbar. Suche nach Name/Typ, Filter nur ausgewählte Elemente. Klick wählt gezielt ein einzelnes Objekt auch innerhalb einer Gruppe; Strg/Meta-Klick erweitert oder reduziert die Auswahl; Umschalt-Klick wählt die gesamte Gruppe. Zeichnungsauswahl und Liste bleiben synchron; Liste aktualisiert sich nach Bearbeitung, Laden und Rückgängig/Wiederholen. Keine Sperr- oder Sichtbarkeitsfunktionen in dieser Version.

## 1.2.5
Resultierende linearer Streckenlasten: in allen Freischnittdialogen optional, außerdem Freischnitt > Resultierende von Streckenlasten für ausgewählte Lasten. Rechteck-, Dreieck- und Trapezlasten mit q1,q2 >= 0 und konstanter Richtung: F_R=(q1+q2)*L/2, Angriffspunkt ab Lastanfang x=L*(q1+2*q2)/(3*(q1+q2)). Länge in m, q in N/m oder kN/m umgerechnet, F in N. Richtung entspricht der Streckenlast. Optional graue gestrichelte Lastverteilung als Konstruktionshilfe. Null-Last bleibt unverändert. Direkte gleichseitige Balkenanker werden interpoliert; sonst freier Angriffspunkt. Resultierende wird vor der optionalen Kräftezerlegung erzeugt; keine dynamische Rückrechnung. Beim Balkenschnitt zuerst Last aufteilen, anschließend Resultierende bilden.

## 1.2.4
Kräftezerlegung in allen Freischnittdialogen sowie Freischnitt > Ausgewählte Kräfte zerlegen. Bekannte schräge Kräfte in H/V oder lokal x/y zerlegen; gleicher Angriffspunkt, exakte Beträge intern, Anzeige sechs signifikante Stellen. Komponenten bleiben rot, unbekannte Lager- und Schnittkräfte blau und unverändert. Optional gestrichelte graue Originalkraft als Konstruktionshilfe (keine zusätzliche Last). Komponenten sind normale bearbeitbare Kräfte mit gemeinsamem Gruppenbezug; keine dynamische Rückrechnung zur Originalkraft. Ohne eindeutigen Balkenbezug globale H/V. Bereits achsparallele Kräfte bleiben unverändert.

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
