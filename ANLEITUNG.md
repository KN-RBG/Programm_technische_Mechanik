# TM-Draw 2.1.1 – Bedienungsanleitung

Browserbasierter Zeichnungseditor für die Technische Mechanik. Online: https://kn-rbg.github.io/Programm_technische_Mechanik/

## Start und Offline-Nutzung
Repository als ZIP herunterladen, vollständig entpacken und index.html öffnen. Die Ordner css und js müssen erhalten bleiben. Kein Server und keine Installation erforderlich. Browserabhängige Speicher- und Vollbildfunktionen können lokal eingeschränkt sein.

## Oberfläche
Menüs Datei, Bearbeiten, Ansicht, Anordnen, Export, Hilfe. Werkzeugleiste für häufige Befehle. Links 22 Symbole in sieben Kategorien, rechts Eigenschaften des gewählten Elements. Statusleiste für Raster, Fang, Maßstäbe und Zoom. Trennbalken ziehen; Doppelklick stellt Standardbreite wieder her. Seitenleisten separat ausblendbar. Vollbild über Werkzeugleiste. Rasterfläche wächst bei unverändertem Zoom. Oberflächeneinstellungen werden lokal gespeichert; Ansicht bietet Rücksetzen. Lange Symbolbezeichnungen umbrechen automatisch. Hilfe enthält die PDF-Bedienungsanleitung und Versionshistorie.

## Zeichnen und Auswählen
Symbol anklicken und platzieren oder hineinziehen. Rasterfang und Bauteilfang unabhängig; Fangpunkte separat anzeigen. Mausrad zoomt, mittlere Maustaste verschiebt Ansicht. Strg-Klick erweitert Auswahl; Alt-Klick wählt einzelnes Gruppenmitglied. Auswahlrahmen links nach rechts erfasst vollständig enthaltene, rechts nach links überlappende Elemente. Auswahlrahmen-Werkzeug funktioniert auch über vorhandenen Elementen. Entf löscht, Strg+Z/Y macht rückgängig/wiederholt. Eigenschaften ermöglichen numerische Position, Winkel und Abmessungen. Drehgriff, Umschalt für 15-Grad-Schritte.

## Maßstäbe
Statusleiste oder Ansicht > Maßstabseinstellungen. Ein Rasterkästchen = 20 Zeichnungseinheiten. Kraftmaßstab in N/Kästchen, Längenmaßstab in mm/cm/m pro Kästchen. Einheitenwechsel rechnet um. Übernehmen bestätigt, Abbrechen verwirft. Maßstäbe gelten pro Zeichnungsseite.

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
Vor dem Schließen als JSON speichern. Datei > Neues Projekt erzeugt eine leere Zeichnung mit Standardmaßstäben. Vor dem Verwerfen ungespeicherter Änderungen wird gewarnt. Die automatische Zwischenspeicherung prüft etwa alle 1,5 Sekunden auf Änderungen und legt eine lokale Wiederherstellungskopie an. Beim Neustart wird die Wiederherstellung angeboten. Unter Datei lässt sich die Autosicherung abschalten; dabei wird die lokale Kopie nach Rückfrage gelöscht. Die Sicherung ist an Browser und Profil gebunden und ersetzt keine JSON-Datei. Bei Browserdownloads kann das Programm den erfolgreichen Abschluss nicht prüfen: Nach dem Speichern im Download-Ordner unter Datei > Download als gespeichert bestätigen die Speicherung ausdrücklich bestätigen. Nur einen Editor-Tab gleichzeitig verwenden. Projekt als JSON speichern oder öffnen; enthält alle Seiten, Elemente, Gruppen, Verbindungen, Sperren und Maßstäbe. Speichern unter ermöglicht neuen Namen. Je nach Browser direkter Dateidialog oder Download. Firefox: Download-Einstellung „Jedes Mal nachfragen, wo eine Datei gespeichert werden soll“ optional aktivieren.

Export: ganze Zeichnung oder Auswahl, Rand, optional Raster und transparenter Hintergrund.
- SVG: skalierbare Vektorgrafik.
- PNG: 96/150/300/600 dpi oder Pixelbreite, Höhe automatisch.
- PDF: Vektorgrafik, automatische Größe oder A4/A5, Hoch-/Querformat, Zeichnungsbreite.
- PSTricks: pspicture-Ausschnitt oder vollständiges LaTeX-Dokument mit eigener Präambel (Latin-1). Code kopieren oder Datei exportieren. Vollständiges Dokument mit pdfLaTeX und -shell-escape kompilieren; auto-pst-pdf erzeugt die Zwischenbilder. Für Ausschnitte gilt die Kompilierung des Zieldokuments.

## Automatischer Freischnitt (1.2.0)
Automatischer Freischnitt einfacher Gesamtsysteme: Menü Freischnitt > Gesamtsystem freischneiden. Kopie rechts neben dem Original, unbekannte blaue Reaktionen mit grafischer Pfeillänge. Festlager zwei Kraftkomponenten, Loslager normal zur Lagerfläche, Einspannung zwei Kraftkomponenten und Moment. Vorhandene Lasten bleiben unverändert. Keine automatische Gleichgewichtsberechnung; weitere Schnittfunktionen siehe folgende Abschnitte. Mehrfaches Freischneiden derselben Zeichnung wird verhindert. Rückgängig entfernt den erzeugten Freischnitt.

## Freischnitt ausgewählter Teilkörper (1.2.1)
Ausgewählte Teilkörper: Balken oder geometrische Bauteile auswählen (Strg-Klick für mehrere; Alt-Klick für einzelne Gruppenmitglieder). Freischnitt > Ausgewählte Teilkörper freischneiden. Verbundene Lager und Einzelkräfte/Momente werden übernommen, Streckenlasten mit beiden zugeordneten Bezugspunkten ebenfalls. Ungebundene Lasten und Beschriftungen bei Bedarf ausdrücklich mit auswählen. Unklare Verbindungen werden gemeldet, Weitere Verbindungen und Schnittgrößen siehe folgende Abschnitte. Original bleibt erhalten, Kopie rechts. Benennung F_{AH}, F_{AV}, F_{B}, M_{C}.

## Gelenk-, Stab- und Seilkräfte (1.2.2)
Beim Freischnitt ausgewählter Teilkörper werden eindeutig beidseitig verankerte Seile und Fachwerkstäbe an der Systemgrenze durch angenommene Zugkräfte ersetzt. Innere Verbindungen bleiben erhalten. Ein Gelenk mit einem befestigten Balken und genau einem geometrisch berührenden weiteren Balken wird nur nach ausdrücklicher Bestätigung als Verbindung behandelt. Gegenrichtungen bei getrennten Seiten; H/V-Indizes. Rollen, unklare Mehrfachverbindungen, zusätzliche Stablasten, freie Anker und Endkräfte eines selbst ausgewählten Stabs manuell prüfen. Keine Berechnung der Kraftbeträge.

## Balkenschnitt (1.2.3)
Balken auswählen; Freischnitt > Balken schneiden (N, Q, M). Abstand vom Balkenanfang in der Längeneinheit eingeben. Ein oder beide Teilkörper werden rechts vom Original erzeugt. Positives Schnittufer: N lokal +x, Q lokal nach unten, M gegen den Uhrzeigersinn; negatives Schnittufer: entgegengesetzt. Befestigte Lager und Punktlasten werden nach ihrer Station zugeordnet, lineare Streckenlasten mit zwei direkten Balkenankern werden interpoliert und geteilt. Schnitt genau auf einer Punktlast/Bindung nicht zulässig. Keine Berechnung; unklare Verbindungen und Bemaßungen manuell ergänzen.

## Kräftezerlegung (1.2.4)
Kräftezerlegung in allen Freischnittdialogen sowie Freischnitt > Ausgewählte Kräfte zerlegen. Bekannte schräge Kräfte in H/V oder lokal x/y zerlegen; gleicher Angriffspunkt, exakte Beträge intern, Anzeige sechs signifikante Stellen. Komponenten bleiben rot, unbekannte Lager- und Schnittkräfte blau und unverändert. Optional gestrichelte graue Originalkraft als Konstruktionshilfe (keine zusätzliche Last). Komponenten sind normale bearbeitbare Kräfte mit gemeinsamem Gruppenbezug; keine dynamische Rückrechnung zur Originalkraft. Ohne eindeutigen Balkenbezug globale H/V. Bereits achsparallele Kräfte bleiben unverändert.

## Resultierende von Streckenlasten (1.2.5)
Resultierende linearer Streckenlasten: in allen Freischnittdialogen optional, außerdem Freischnitt > Resultierende von Streckenlasten für ausgewählte Lasten. Rechteck-, Dreieck- und Trapezlasten mit q1,q2 >= 0 und konstanter Richtung: F_R=(q1+q2)*L/2, Angriffspunkt ab Lastanfang x=L*(q1+2*q2)/(3*(q1+q2)). Länge in m, q in N/m oder kN/m umgerechnet, F in N. Richtung entspricht der Streckenlast. Optional graue gestrichelte Lastverteilung als Konstruktionshilfe. Null-Last bleibt unverändert. Direkte gleichseitige Balkenanker werden interpoliert; sonst freier Angriffspunkt. Resultierende wird vor der optionalen Kräftezerlegung erzeugt; keine dynamische Rückrechnung. Beim Balkenschnitt zuerst Last aufteilen, anschließend Resultierende bilden.

## Objektliste (1.3.0)
Objektliste in der rechten Seitenleiste (standardmäßig eingeklappt; Ansicht > Objektliste anzeigen öffnet sie). Alle Objekte in umgekehrter Zeichenreihenfolge, Vordergrund zuerst. Beschriftung, Typ und Gruppenzugehörigkeit sichtbar. Suche nach Name/Typ, Filter nur ausgewählte Elemente. Klick wählt gezielt ein einzelnes Objekt auch innerhalb einer Gruppe; Strg/Meta-Klick erweitert oder reduziert die Auswahl; Umschalt-Klick wählt die gesamte Gruppe. Zeichnungsauswahl und Liste bleiben synchron; Liste aktualisiert sich nach Bearbeitung, Laden und Rückgängig/Wiederholen. Sperrfunktion siehe nächster Abschnitt.

## Objekte sperren (1.3.1)
Objektliste: Schloss pro Objekt sowie Auswahl sperren/entsperren. Gesperrte Objekte bleiben auswählbar, sichtbar und exportierbar. Bearbeiten, Ziehen, Drehen, Löschen, Gruppieren, Spiegeln und Zerlegen sind bei gesperrter Auswahl blockiert. Auch Anker- und Verbindungsobjekte, von denen gesperrte Elemente abhängen, sind gegen Bearbeitung geschützt. Zeichenreihenfolge nur ändern, wenn keine Objekte gesperrt sind. Kopien (auch Freischnittkopien) werden entsperrt erzeugt. Projektweite Maßstäbe, Rückgängig/Wiederholen und Projektwechsel bleiben möglich. Sperrstatus in JSON und Autosicherung.

## Zeichnungsseiten (1.4.0)
Seitenregister unter der Zeichenfläche: neu, umbenennen, duplizieren, verschieben, löschen (mindestens eine Seite). Jede Seite hat eigene Elemente und Maßstäbe. JSON Version 6 speichert alle Seiten und aktive Seite; Versionen 1–5 werden als Einzelzeichnung geöffnet. Autosicherung und projektweiter Verlauf erfassen alle Seiten. Seitenwechsel ist keine Inhaltsänderung. Freischnitt und Balkenschnitt optional auf eigenen Seiten. Export der aktuellen Seite in allen bisherigen Formaten; Alle Zeichnungsseiten können in Registerreihenfolge als ein mehrseitiges Vektor-PDF exportiert werden. Leere Seiten bleiben erhalten. Im Exportdialog PDF und „Alle Zeichnungsseiten (PDF)“ auswählen. Bei automatischer Papiergröße kann jede Seite ein anderes Format haben; für einheitliche Papierformate A4/A5 wählen.

## Abschlussstand 2.0.0
Der vereinbarte Funktionsumfang ist implementiert. Die Anwendung ist ein Zeichenwerkzeug, kein Statiksolver. Modellannahmen, Kraftangriffspunkte und Verbindungen vor der Verwendung kontrollieren. Ein vollständiger Browser-Regressionstest steht noch aus. Zurückgestellt bleiben Ebenen, Ausblenden von Objekten, Zeichenblattformate im Editor, Formatpinsel, eigene Symbolbibliothek, Aufgabenvorlagen, Übungsmodus und automatische Gleichgewichtsberechnung.

## Korrektur 2.0.1
Korrektur: Ziehen an Kraft-, Winkel- und Maßbeschriftungen wählt das einzelne Objekt, unabhängig von Gruppenzugehörigkeit oder benachbarten Knoten. Nur Textversatz wird verändert; Angriffspunkt, Befestigung und Gruppierung bleiben erhalten. Objektsperre bleibt wirksam.

## Flächenlast (2.1.0)
Neues Symbol Flächenlast unter Kräfte und Lasten. Rechteckfläche in schematischer Schrägprojektion (keine 3D-Geometrie). Position am vorderen linken Eckpunkt, Länge und tatsächliche Breite im Seitenmaßstab, p in N/m², kN/m² oder N/mm²; Einheitenwechsel rechnet p und Pfeilmaßstab um. Pfeilrichtung relativ zur Zeichenfläche des Symbols, Pfeilanzahl je Richtung und Wertanzeige einstellbar. Beschriftung frei verschiebbar. Flächenlast im Gesamtschnitt erhalten, für Teilkörper ausdrücklich auswählen; Balkenschnitt warnt vor nicht automatisch geteilten Flächenlasten. Umrechnung und Resultierende siehe folgenden Abschnitt.

## Flächenlasten umrechnen (2.1.1)
Flächenlasten umrechnen (Freischnitt-Menü und Gesamtsystem-/Teilkörperfreischnitt): gleichmäßige rechteckige Flächenlast mit tatsächlicher Länge a und Breite b in m, p in N/m². Resultierende F=p*a*b in N am projizierten Flächenschwerpunkt; alternativ q=p*b in N/m entlang der projizierten Flächenmittellinie, gleiche Richtung. Bei Trägern muss b der tatsächlichen Einflussbreite entsprechen. Original wahlweise entfernen oder gestrichelt als Konstruktionshilfe behalten. Keine automatische Zuordnung zum Träger; Ersatzobjekte frei platzierbar, keine dynamische Rückrechnung. Explizit gewählte Streckenlast bleibt im Freischnitt als Streckenlast erhalten. Balkenschnitt berücksichtigt Flächenlasten nicht automatisch; Warnung bleibt. Einheiten N/m², kN/m², N/mm² werden umgerechnet.
