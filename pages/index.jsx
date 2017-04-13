import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div
        style={{
          padding: '0 15px',
          marginTop: '-1px',
        }}
      >
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />

        <section id="work" className="work">
          <h3 className="font-glass-antiqua text-lowercase">Work</h3>
          <div className="row">
            <picture className="project col-sm-4">
              <source
                media="(min-width: 3000px)"
                srcSet="https://unsplash.it/1700/900?image=977"
                />
              <source
                media="(min-width: 1500px)"
                srcSet="https://unsplash.it/1000/600?image=977"
                />
              <img src="https://unsplash.it/500/300?image=977" className="img-fluid" alt="first project" />
            </picture>
            <picture className="project col-sm-4">
              <source
                media="(min-width: 3000px)"
                srcSet="https://unsplash.it/1700/900?image=975"
                />
              <source
                media="(min-width: 1500px)"
                srcSet="https://unsplash.it/1000/600?image=975"
                />
              <img src="https://unsplash.it/500/300?image=975" className="img-fluid" alt="second project" />
            </picture>
            <picture className="project col-sm-4">
              <source
                media="(min-width: 3000px)"
                srcSet="https://unsplash.it/1700/900?image=976"
                />
              <source
                media="(min-width: 1500px)"
                srcSet="https://unsplash.it/1000/600?image=976"
                />
              <img src="https://unsplash.it/500/300?image=976" className="img-fluid" alt="third project" />
            </picture>
          </div>
        </section>

        <section id="posts" className="posts">
          <h3 className="font-glass-antiqua text-lowercase">Posts</h3>
          <div className="entries row">
            <article className="entry col-md-3">
              <h4>Entry Four</h4>
              <div className="entry-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur igitur, inquam, res tam dissimiles eodem nomine appellas? Nonne igitur tibi videntur, inquit, mala? Negat esse eam, inquit, propter se expetendam. Amicitiam autem adhibendam esse censent, quia sit ex eo genere, quae prosunt. Duo Reges: constructio interrete. Omnia contraria, quos etiam insanos esse vultis. Progredientibus autem aetatibus sensim tardeve potius quasi nosmet ipsos cognoscimus. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. A mene tu? Piso, familiaris noster, et alia multa et hoc loco Stoicos irridebat: Quid enim? &nbsp;<a href="#">» Read More</a></p>
              </div>
            </article>
            <article className="entry col-md-3">
              <h4>Entry Three</h4>
              <div className="entry-content">
                <p>Itaque contra est, ac dicitis; Velut ego nunc moveor. Utrum igitur tibi litteram videor an totas paginas commovere? Honesta oratio, Socratica, Platonis etiam. An est aliquid, quod te sua sponte delectet? Ex rebus enim timiditas, non ex vocabulis nascitur. Sed potestne rerum maior esse dissensio? Inde sermone vario sex illa a Dipylo stadia confecimus. Quid, quod res alia tota est? Quae in controversiam veniunt, de iis, si placet, disseramus. Sit hoc ultimum bonorum, quod nunc a me defenditur; Hoc dictum in una re latissime patet, ut in omnibus factis re, non teste moveamur. &nbsp;<a href="#">» Read More</a></p>
              </div>
            </article>
            <article className="entry col-md-3">
              <h4>Entry Two</h4>
              <div className="entry-content">
                <p>Nos cum te, M. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Proclivi currit oratio. Quodsi ipsam honestatem undique pertectam atque absolutam. Torquatus, is qui consul cum Cn. Memini vero, inquam; Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Non risu potius quam oratione eiciendum? &nbsp;<a href="#">» Read More</a></p>
              </div>
            </article>
            <article className="entry col-md-3">
              <h4>Entry One</h4>
              <div className="entry-content">
                <p>Nos cum te, M. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Proclivi currit oratio. Quodsi ipsam honestatem undique pertectam atque absolutam. Torquatus, is qui consul cum Cn. Memini vero, inquam; Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Non risu potius quam oratione eiciendum? &nbsp;<a href="#">» Read More</a></p>
              </div>
            </article>
          </div>
        </section>
        </div>
    )
  }
}
