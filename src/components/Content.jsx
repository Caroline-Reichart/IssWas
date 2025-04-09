import { Link } from "react-router-dom";

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

        <section id="recipes">
          <div className="flex-container">
            <div className="card card1">
              <h3>Frühstück</h3>
              <p className="card-p">
                Entdecke leckere Frühstücksrezepte, die dir den perfekten Start in den Tag ermöglichen.
              </p>
              <Link to="/Fruehstueck">Rezepte ansehen</Link>
            </div>
            <div className="card card2">
              <h3>Mittag</h3>
              <p className="card-p">
                Genieße köstliche Mittagsgerichte, die dich durch den Tag bringen.
              </p>
              <Link to="/Mittag">Rezepte ansehen</Link>
            </div>
            <div className="card card3">
              <h3>Abendessen</h3>
              <p className="card-p">
                Finde inspirierende Abendessen-Ideen für einen gelungenen Tagesabschluss.
              </p>
              <Link to="/Abend">Rezepte ansehen</Link>
            </div>
            <div className="card card4">
              <h3>Cocktails</h3>
              <p className="card-p">
                Entdecke kreative Cocktailrezepte für jeden Anlass.
              </p>
              <Link to="/Cocktails">Rezepte ansehen</Link>
            </div>
          </div>
        </section>
      </main>
    );
}