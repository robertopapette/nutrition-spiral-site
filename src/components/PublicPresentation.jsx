import React from 'react';
import './PublicPresentation.css';

const copy={
 en:{description:'A more mindful way to understand your eating habits.',status:'Coming soon.',image:'Nutrition Spiral logo.',languageNavigation:'Language',italian:'Italiano',english:'English'},
 it:{description:'Un modo più consapevole di comprendere le proprie abitudini alimentari.',status:'In preparazione.',image:'Logo Nutrition Spiral.',languageNavigation:'Lingua',italian:'Italiano',english:'English'}
};

// Public language links share the existing .com origin; domain redirects are unchanged.
export default function PublicPresentation({language='en',languageLinks={it:'/it/',en:'/'}}){
 const text=copy[language]||copy.en;
 return <main className="ns-public" lang={language}>
  {languageLinks?<nav className="ns-public-languages" aria-label={text.languageNavigation}>
   <a href={languageLinks.it} lang="it" hrefLang="it" aria-current={language==='it'?'page':undefined}>{text.italian}</a>
   <span aria-hidden="true">/</span>
   <a href={languageLinks.en} lang="en" hrefLang="en" aria-current={language==='en'?'page':undefined}>{text.english}</a>
  </nav>:null}
  <section className="ns-public-intro" aria-labelledby="ns-public-title">
   <div className="ns-public-copy">
    <h1 id="ns-public-title">Nutrition<br className="ns-public-title-break"/> Spiral</h1>
    <p className="ns-public-description">{text.description}</p>
    <p className="ns-public-status">{text.status}</p>
   </div>
   <figure className="ns-public-brand">
    <img src="/images/nutrition-spiral-logo.png" width="512" height="512" alt={text.image} fetchPriority="high" decoding="async"/>
   </figure>
  </section>
 </main>;
}
