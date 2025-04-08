export const Content = () => {
    return (
        <main>
            <section id="portfolio">
    <h1 className="name-h1">IssWas</h1>
  <h1 className="webdev"><span>leckere Rezepte</span></h1>
</section>

<section id="press">
    <div className="about-me-container">
      <p className="welcome">
      Hey! Schön, dass du den Weg zu IssWas gefunden hast!
    </p>
    <p className="text-p">
      Wir sind Andre und Caro – zwei kreative Köpfe mit einer großen Leidenschaft für gutes Essen, leckere Drinks und modernes Webdesign.
    </p>
    <p className="text-p">
    Wir studieren beide Webentwicklung bei DCI (Digital Career Institute) und haben dieses Projekt im Rahmen unserer Ausbildung ins Leben gerufen.
    Unser Ziel: Eine Website zu gestalten, die nicht nur optisch Appetit macht, sondern dir auch einfach und übersichtlich tolle Rezepte liefert – für jede Gelegenheit und jedes Level in der Küche.
    </p>
    {/* <h2 className="about-me"></h2> */}
    <p class="text-p">
    IssWas soll ein Ort sein, an dem du Inspiration findest, neue Lieblingsgerichte entdeckst und vielleicht sogar selbst Lust bekommst, kreativ zu werden. Egal ob schneller Snack, herzhafter Klassiker oder ausgefallener Cocktail – hier ist für jeden Geschmack etwas dabei.
    </p>

    <p class="text-p">
    Wir freuen uns, dieses Projekt gemeinsam umzusetzen und ständig weiterzuentwickeln.
    Wenn du Feedback hast oder eigene Ideen einbringen möchtest – schreib uns gern!
    </p> 
    
    <p class="text-p">
    Viel Spaß beim Stöbern, Kochen und Genießen!

    Andre & Caro 🍽️✨
    </p>
  </div>
</section>

<section id="shop">
  <h2 className="services">Dienst&shyleistungen</h2>
<div className="flex-container">
  <div className="card card1">
      <h3>Beratung</h3>
      <p className="card-p">
          Mein Ziel ist es, individuelle und maßgeschneiderte Lösungen für meine Kunden zu entwickeln und ihnen dabei zu helfen, ihre Ziele zu erreichen. In diesem Bereich finden Sie einige meiner Beispielwebseiten, die mein Können und meine Kreativität unter Beweis stellen.
      </p>
      <p className="card-p">
          Ich freue mich darauf, Ihre Ideen zum Leben zu erwecken. Zögern Sie nicht, mich zu kontaktieren, wenn Sie an einer Zusammenarbeit interessiert sind oder mehr über meine Dienstleistungen erfahren möchten.
      </p>
      <a href="./formular.html">Beratung vereinbaren</a>
  </div>
  <div className="card card2">
      <h3>Webseiten&shyprojekte</h3>
      <p className="card-p">
          Ich habe diese Projekte von der Konzeption bis zur Umsetzung begleitet. Jedes Projekt war eine neue Herausforderung, die ich mit Begeisterung und Engagement angegangen bin.
      </p>
      <p className="card-p">
          Wenn Sie an einem Webseitenprojekt interessiert sind oder mehr über meine bisherigen Arbeiten erfahren möchten, zögern Sie nicht, mich zu kontaktieren. Ich stehe Ihnen gerne zur Verfügung und freue mich darauf, mit Ihnen zusammenzuarbeiten.
      </p>

      <a href="https://caroline-reichart.github.io/Pro-Coders/" target="_blank">Pro Coders Portfolio</a>
      <a href="https://caroline-reichart.github.io/animated-portfolio/" target="_blank">Animated Portfolio</a>
  </div>
  <div className="card card3">
    <h3>Digital</h3>
    <h3>Career</h3>
    <h3>Institute</h3>
    <img src="./images/93280fd0-desktop-lp-content-claim-footer.png" alt="" />
    <a href="https://start.digitalcareerinstitute.org/de/" target="_blank">mehr erfahren</a>
  </div>
</div>
</section>
        </main>
    )
}