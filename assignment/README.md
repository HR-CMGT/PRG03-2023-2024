# Praktijkopdracht: Bouw je eigen magazine

Je gaat aan de slag met het ontwikkelen van een eigen magazine binnen een dynamische frontend. De opdracht is
verdeeld in de deelopdrachten om je stap voor stap te laten ontwikkelen. Je mag elke vorm van een magazine maken,
zolang de randvoorwaarden (technisch, functioneel) in basis gelijk zijn aan het [foodmagazine](foodmagazine-example).
Je mag zelf geen 'foodmagazine' bouwen, dit moet een eigen verzonnen magazine zijn die qua functionaliteiten minimaal
gelijk is aan ons gestelde voorbeeld. Deze case dient als inspiratie welke functionaliteiten er nodig zijn voor de
door ons gestelde eisen. Een voorbeeldvideo van de werking kun je vinden op Brightspace in het mapje 'Praktijkopdracht'.

## Opdracht 1

- Gebruik PhpStorm voor het aanmaken van een nieuw project waarin je deze opdracht maakt. Plaats dit project in de
  htdocs map van XAMPP, zodat je het via **http://localhost/--projectnaam--** kunt benaderen.
- Maak in het project een nieuwe map aan met de naam `webservice` en zorg ervoor dat je de [initiële code](webservice-start) daarin kopieert,
  zodat je kunt starten met de opdracht.
- Kies een onderwerp voor jouw magazine en pas de informatie in `actions.php` aan naar informatie over dat onderwerp 
  Zorg ervoor dat er minimaal 10 items in staan zodat je voldoende data hebt.
- Test de JSON-output van jouw webservice in de browser op **http://localhost/--projectnaam--/webservice** om te zien of
  de output klopt. Gebruik eventueel de [Chrome plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en) voor een betere weergave van de JSON.
- (Optioneel) Publiceer je project op GitHub zodat je jouw eigen portfolio gelijk uitbreidt. Je kunt dit in PhpStorm doen
  via `VCS -> Publish on GitHub`
___
>**Belangrijk**: Gebruik voor Opdracht 2/3/4 eigen teksten en plaatjes, omdat we pas in Opdracht 5 de koppeling naar de 
Webservice uit Opdracht 1 gaan maken.
___
## Opdracht 2 (zonder AJAX)

- Bepaal welke HTML/CSS-methode je voor je opdracht gaat gebruiken (zelf schrijven, Bulma of iets anders). Je kunt de
  kennis van Front-end Development en de Bulma Hackaton hiervoor gebruiken.
- Begin met het opmaken van de layout zoals jij wilt dat je werk eruit komt te zien. Zorg ervoor dat er minimaal 10 items
  zichtbaar zijn met informatie over jouw onderwerp.

## Opdracht 3 (zonder AJAX)

- Maak je opdracht dynamisch door click events toe te voegen aan je items. Na een click op een item opent de detailweergave.
  Als je een ander item aanklikt, wordt de detailweergave (meer informatie over je item) vervangen door het andere aangeklikte item.
- Zorg ervoor dat de detailinformatie er ook goed uitziet in je layout met HTML/CSS. Dit kan zijn in een sidebar, onderaan of via
  een modal (popup).

## Opdracht 4 (zonder AJAX)

- Ontwikkel de functionaliteit om items als favoriet toe te voegen. Dit doe je door de favorieten in je localstorage
  op te slaan. Voeg in het overzicht per item een "voeg toe als favoriet knop" toe om het aan deze functionaliteit
  via een click event werkend te maken.
- Zorg met CSS dat de favoriet een andere kleur heeft. Deze kleur moet ook na het herladen van de pagina blijven staan
  door je local storage te raadplegen.
- Zorg ervoor dat de items die favoriet zijn een knop krijgen om ze weer te verwijderen uit je favorieten. Uiteraard
  dient de kleur dan weer teruggezet te worden en de localstorage geüpdatet te worden.

## Opdracht 5

- Koppel de ontwikkelde functionaliteit aan de webservice die in opdracht 1 is gemaakt, zodat zowel de initiële data als
  de detailweergave vanuit de PHP via AJAX worden ingeladen en met Javascript op je scherm komen.
- **Belangrijk**: Bij het inladen van je pagina staat er nog niets op je scherm, omdat AJAX nodig is om de data in
  te laden. Je eerder gemaakte HTML (vanuit opdracht 2) zul je nu dus vanuit Javascript moeten opbouwen.
- Zorg dat de linkjes van de plaatjes ook uit de webservice komen, hier moet je, als je dit nog niet had, de array uit de
  webservice dus voor uitbreiden.
