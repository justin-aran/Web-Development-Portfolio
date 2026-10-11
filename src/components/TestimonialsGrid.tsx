import { Link } from 'react-router-dom'
import {
  Sparkle,
  FolderOpen,
  EnvelopeSimple,
  Briefcase,
  Robot,
  UsersThree,
} from '@/components/slab'

export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Client Feedback & Endorsements</span>
        <h1 className="pgrid__title" id="testimonials-title">
          Testimonials Coming Soon
        </h1>
        <p className="pgrid__lede">
          Customer reviews, partner testimonials, and verified project feedback will be published here upon completion of active engagements.
        </p>
      </header>

      <div className="home__glass tgrid__glass tgrid__glass--empty">
        <div className="testimonials-empty">
          <div className="testimonials-empty__badge">
            <Sparkle size={15} weight="fill" aria-hidden="true" />
            <span>Coming Soon</span>
          </div>

          <h2 className="testimonials-empty__title">
            Client Testimonials & Partner Endorsements
          </h2>

          <p className="testimonials-empty__desc">
            As a dedicated BSIT student at PUP and Pasig City Scholar, I am currently active across academic software initiatives, student council leadership, and technical internships. Formal client recommendations, stakeholder reviews, and verified impact metrics will be featured here as engagements conclude.
          </p>

          <div className="testimonials-empty__grid">
            <div className="testimonials-empty__card">
              <span className="testimonials-empty__card-icon">
                <Briefcase size={20} weight="duotone" aria-hidden="true" />
              </span>
              <h3 className="testimonials-empty__card-title">ED3Nventures</h3>
              <p className="testimonials-empty__card-meta">Multimedia & Course Production</p>
              <p className="testimonials-empty__card-text">
                Apex Human course scripts, Markdown PRDs, video shooting assistance, and Remotion motion graphics.
              </p>
            </div>

            <div className="testimonials-empty__card">
              <span className="testimonials-empty__card-icon">
                <Robot size={20} weight="duotone" aria-hidden="true" />
              </span>
              <h3 className="testimonials-empty__card-title">Inko Startup</h3>
              <p className="testimonials-empty__card-meta">AI Language App Marketing</p>
              <p className="testimonials-empty__card-text">
                Promoting an AI-powered language learning platform developed by a Japanese startup to drive user engagement.
              </p>
            </div>

            <div className="testimonials-empty__card">
              <span className="testimonials-empty__card-icon">
                <UsersThree size={20} weight="duotone" aria-hidden="true" />
              </span>
              <h3 className="testimonials-empty__card-title">SK Pinagbuhatan</h3>
              <p className="testimonials-empty__card-meta">Secretariat & Community Administration</p>
              <p className="testimonials-empty__card-text">
                Managing official attendance records, compiling Weekly Service Reports, and coordinating youth initiatives.
              </p>
            </div>
          </div>

          <div className="testimonials-empty__actions">
            <Link to="/projects" className="flagship__cta flagship__cta--primary">
              <FolderOpen size={16} weight="bold" aria-hidden="true" />
              <span>Explore My Projects</span>
            </Link>
            <Link to="/contact" className="flagship__cta flagship__cta--secondary">
              <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
              <span>Get in Touch for Opportunities</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
