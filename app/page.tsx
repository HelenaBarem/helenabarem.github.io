import type { ReactNode } from "react";
import CopyrightYear from "@/components/copyright-year";
import PageAnalytics from "@/components/page-analytics";
import SiteHeader from "@/components/site-header";
import { brand, mapsUrl, whatsappUrl } from "@/lib/brand";
import { getPublicSiteUrl } from "@/lib/site-url";

type PhotoProps = {
  asset: string;
  alt: string;
  width: number;
  height: number;
  widths: number[];
  sizes: string;
  priority?: boolean;
  className?: string;
};

function srcSet(asset: string, widths: number[], format: "webp" | "avif") {
  return widths
    .map((width) => "/images/" + asset + "-" + width + "." + format + " " + width + "w")
    .join(", ");
}

function Photo({ asset, alt, width, height, widths, sizes, priority = false, className }: PhotoProps) {
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={srcSet(asset, widths, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(asset, widths, "webp")} sizes={sizes} />
      <img
        src={"/images/" + asset + "-" + widths[Math.min(1, widths.length - 1)] + ".webp"}
        srcSet={srcSet(asset, widths, "webp")}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}

function LineMark({ kind }: { kind: "spark" | "care" | "heart" }) {
  const paths: Record<typeof kind, ReactNode> = {
    spark: <path d="M12 2.8 14.2 9l6.2 2.2-6.2 2.2-2.2 6.2-2.2-6.2-6.2-2.2L9.8 9zM19 16l1.1 3.1 3.1 1.1-3.1 1.1L19 24.4l-1.1-3.1-3.1-1.1 3.1-1.1z" />,
    care: <path d="M12 3 20 6v5.4c0 5.3-3.2 8.5-8 10.7-4.8-2.2-8-5.4-8-10.7V6zM8 12.2l2.6 2.6 5.5-5.5" />,
    heart: <path d="M20.7 5.8a5 5 0 0 0-7.1 0L12 7.4l-1.6-1.6a5 5 0 0 0-7.1 7.1l1.6 1.6L12 21l7.1-6.5 1.6-1.6a5 5 0 0 0 0-7.1z" />,
  };

  return (
    <svg viewBox="0 0 26 26" aria-hidden="true" focusable="false">
      {paths[kind]}
    </svg>
  );
}

const services = [
  {
    name: "Design de Sobrancelhas",
    description: "Um desenho pensado para respeitar a individualidade e o formato de cada rosto.",
    topic: "Design de Sobrancelhas",
    analytics: "whatsapp_service_design",
  },
  {
    name: "Nano Micropigmentação",
    description: "Nanoblading é apresentada por Helena como uma técnica personalizada para naturalidade, definição e harmonia.",
    topic: "Nano Micropigmentação",
    analytics: "whatsapp_service_nano",
  },
  {
    name: "Lash Lifting",
    description: "Converse com Helena para conhecer os detalhes do procedimento e consultar horários.",
    topic: "Lash Lifting",
    analytics: "whatsapp_service_lash",
  },
  {
    name: "Extensão de Cílios",
    description: "O perfil mostra estilos como Fio U, efeito Ultra e efeito gatinho. Conte a Helena qual proposta procura.",
    topic: "Extensão de Cílios",
    analytics: "whatsapp_service_extension",
  },
  {
    name: "Hydragloss",
    description: "Consulte diretamente com Helena a descrição do procedimento e os horários disponíveis.",
    topic: "Hydragloss",
    analytics: "whatsapp_service_hydragloss",
  },
  {
    name: "Hydracollor",
    description: "Fale com Helena para conhecer os detalhes do procedimento antes de agendar.",
    topic: "Hydracollor",
    analytics: "whatsapp_service_hydracollor",
  },
  {
    name: "Maquiagem Profissional",
    description: "O perfil oficial compartilha trabalhos de maquiagem profissional, inclusive conteúdo ligado a casamentos.",
    topic: "Maquiagem Profissional",
    analytics: "whatsapp_service_makeup",
  },
];

const portfolio = [
  {
    asset: "helena-barem-nanoblanding",
    widths: [480, 800, 1200],
    width: 1972,
    height: 2629,
    title: "Nanoblading",
    detail: "Naturalidade, definição e harmonia",
    alt: "Close-up de sobrancelhas e olhos em trabalho de Nanoblading publicado por Helena Barem Beauty.",
    url: "https://www.instagram.com/p/DcUwmhslTe1/",
  },
  {
    asset: "helena-barem-efeito-ultra",
    widths: [480, 800, 1200],
    width: 3024,
    height: 4032,
    title: "Efeito Ultra",
    detail: "Fio U",
    alt: "Detalhe de cílios em trabalho publicado por Helena Barem Beauty com a legenda Efeito Ultra, Fio U.",
    url: "https://www.instagram.com/p/DdrvFTzsZIP/",
  },
  {
    asset: "helena-barem-efeito-gatinho",
    widths: [480, 800, 1200],
    width: 1568,
    height: 1568,
    title: "Efeito gatinho",
    detail: "Um dos estilos mostrados no perfil",
    alt: "Close-up de cílios em publicação do perfil Helena Barem Beauty com a legenda Efeito Gatinho.",
    url: "https://www.instagram.com/p/Db6nBN2tz5_/",
  },
  {
    asset: "helena-barem-maquiagem-profissional",
    widths: [480, 800, 1200],
    width: 1824,
    height: 2432,
    title: "Maquiagem profissional",
    detail: "Trabalho compartilhado no perfil oficial",
    alt: "Retrato de uma mulher com maquiagem profissional, foto publicada no perfil oficial da Helena Barem Beauty.",
    url: brand.instagramUrl,
  },
  {
    asset: "helena-barem-brow-lamination-volume-6d",
    widths: [480, 800, 1200],
    width: 3072,
    height: 4096,
    title: "Brow Lamination + Volume 6D",
    detail: "Combo compartilhado no perfil oficial",
    alt: "Retrato de uma cliente em publicação com a legenda Brow Lamination + Volume 6D.",
    url: "https://www.instagram.com/p/DcuIr1nm8Hb/",
  },
];

const siteUrl = getPublicSiteUrl();
const salonSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: brand.name,
  telephone: brand.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.streetAddress,
    addressLocality: brand.city,
    addressRegion: brand.region,
    addressCountry: "BR",
  },
  sameAs: [brand.instagramUrl],
  ...(siteUrl ? { url: siteUrl.toString() } : {}),
};

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <PageAnalytics />
      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="shell hero__layout">
            <div className="hero__copy">
              <p className="eyebrow"><span className="eyebrow__rule" /> Beleza em Campo Grande/MS</p>
              <h1 id="hero-title">
                Realce sua beleza.
                <span>Valorize sua essência.</span>
              </h1>
              <p className="hero__lead">
                Sobrancelhas, cílios, Hydragloss, Hydracollor e maquiagem profissional, com atendimento personalizado em Campo Grande.
              </p>
              <div className="hero__actions">
                <a
                  className="button button--wine"
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="whatsapp_hero"
                >
                  Agendar pelo WhatsApp <span aria-hidden="true">↗</span>
                </a>
                <a className="textLink" href="#procedimentos">
                  Conhecer procedimentos <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="hero__note">
                <span className="hero__noteMark" aria-hidden="true">✦</span>
                Atendimento personalizado <span aria-hidden="true">·</span> Campo Grande/MS
              </p>
            </div>

            <figure className="heroPortrait">
              <div className="heroPortrait__frame">
                <Photo
                  asset="helena-barem-retrato"
                  widths={[480, 800, 1080]}
                  width={1080}
                  height={1080}
                  sizes="(max-width: 760px) 86vw, 42vw"
                  priority
                  alt="Helena Barem, retrato publicado no perfil oficial da Helena Barem Beauty."
                />
              </div>
              <figcaption className="heroPortrait__caption">
                <span className="heroPortrait__captionName">Helena Barem</span>
                <span>Helena Barem Beauty <i aria-hidden="true">·</i> Campo Grande/MS</span>
              </figcaption>
              <span className="heroPortrait__seal" aria-hidden="true">HB</span>
            </figure>
          </div>
          <div className="hero__ornament" aria-hidden="true" />
        </section>

        <section className="trustBar" aria-label="Princípios do atendimento">
          <div className="shell trustBar__inner">
            <div className="trustItem">
              <span className="trustItem__icon"><LineMark kind="care" /></span>
              <span>Procedimentos com segurança</span>
            </div>
            <span className="trustBar__divider" aria-hidden="true" />
            <div className="trustItem">
              <span className="trustItem__icon"><LineMark kind="spark" /></span>
              <span>Atendimento personalizado</span>
            </div>
            <span className="trustBar__divider" aria-hidden="true" />
            <div className="trustItem">
              <span className="trustItem__icon"><LineMark kind="heart" /></span>
              <span>Resultados que valorizam você</span>
            </div>
          </div>
        </section>

        <section className="section servicesSection" id="procedimentos" aria-labelledby="services-title">
          <div className="shell">
            <div className="sectionIntro sectionIntro--split">
              <div>
                <p className="eyebrow"><span className="eyebrow__rule" /> Procedimentos</p>
                <h2 className="sectionTitle" id="services-title">Beleza pensada para valorizar você</h2>
              </div>
              <p className="sectionIntro__text">
                Conheça os procedimentos da Helena Barem Beauty e converse diretamente com Helena para explicar o resultado que procura.
              </p>
            </div>

            <div className="servicesLayout">
              <figure className="serviceFeature">
                <a
                  className="serviceFeature__image"
                  href="https://www.instagram.com/p/DdrvFTzsZIP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver a publicação Efeito Ultra no Instagram"
                  data-analytics="instagram_click"
                >
                  <Photo
                    asset="helena-barem-efeito-ultra"
                    widths={[480, 800, 1200]}
                    width={3024}
                    height={4032}
                    sizes="(max-width: 760px) 88vw, 40vw"
                    alt="Detalhe de cílios em trabalho publicado no perfil oficial."
                  />
                  <span className="serviceFeature__open" aria-hidden="true">↗</span>
                </a>
                <figcaption>
                  <span>Trabalho publicado no Instagram</span>
                  <strong>Efeito Ultra <i aria-hidden="true">·</i> Fio U</strong>
                </figcaption>
              </figure>

              <div className="serviceList" aria-label="Lista de procedimentos">
                {services.map((service, index) => (
                  <article className="serviceRow" key={service.analytics}>
                    <span className="serviceRow__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <div className="serviceRow__content">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                      <a
                        className="serviceRow__link"
                        href={whatsappUrl(service.topic)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-analytics={service.analytics}
                      >
                        Consultar pelo WhatsApp <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section aboutSection" id="sobre" aria-labelledby="about-title">
          <div className="shell aboutLayout">
            <figure className="aboutPortrait">
              <Photo
                asset="helena-barem-retrato"
                widths={[480, 800, 1080]}
                width={1080}
                height={1080}
                sizes="(max-width: 760px) 78vw, 35vw"
                alt="Helena Barem, profissional apresentada no perfil oficial da marca."
              />
              <figcaption>Helena Barem <span>·</span> Campo Grande/MS</figcaption>
            </figure>
            <div className="aboutCopy">
              <p className="eyebrow"><span className="eyebrow__rule" /> Sobre a Helena</p>
              <h2 className="sectionTitle" id="about-title">Beleza começa quando o resultado ainda parece você.</h2>
              <p>
                Helena compartilha um trabalho atento à individualidade de cada rosto. A conversa pode começar pelas suas preferências e pelo resultado que deseja.
              </p>
              <blockquote>
                “A beleza de um design bem feito está em respeitar a individualidade de cada rosto.”
                <cite>
                  <a href="https://www.instagram.com/p/DbbqojglRRP/" target="_blank" rel="noopener noreferrer" data-analytics="instagram_click">
                    Legenda de Helena no Instagram <span aria-hidden="true">↗</span>
                  </a>
                </cite>
              </blockquote>
              <a
                className="button button--outline"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="whatsapp_schedule"
              >
                Conversar com Helena <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section portfolioSection" id="resultados" aria-labelledby="portfolio-title">
          <div className="shell">
            <div className="sectionIntro">
              <p className="eyebrow"><span className="eyebrow__rule" /> Portfólio</p>
              <h2 className="sectionTitle" id="portfolio-title">Resultados que falam nos detalhes</h2>
              <p className="sectionIntro__text">
                Uma seleção de trabalhos publicados no perfil oficial da Helena Barem Beauty.
              </p>
            </div>

            <div className="portfolioGrid">
              {portfolio.map((item, index) => (
                <figure className={"portfolioTile portfolioTile--" + (index + 1)} key={item.title}>
                  <a
                    className="portfolioTile__image"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Ver no Instagram: " + item.title}
                    data-analytics="instagram_click"
                  >
                    <Photo
                      asset={item.asset}
                      widths={item.widths}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 700px) 46vw, (max-width: 1100px) 32vw, 25vw"
                      alt={item.alt}
                    />
                    <span className="portfolioTile__arrow" aria-hidden="true">↗</span>
                  </a>
                  <figcaption className="portfolioTile__caption">
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.detail}</span>
                    </div>
                    <span className="portfolioTile__index" aria-hidden="true">0{index + 1}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="portfolioFooter">
              <p>Veja mais trabalhos e publicações no Instagram.</p>
              <a
                className="textLink"
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="instagram_click"
              >
                Ver {brand.instagramHandle} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="instagramBand" aria-labelledby="instagram-title">
          <div className="shell instagramBand__inner">
            <div>
              <p className="eyebrow eyebrow--light"><span className="eyebrow__rule" /> Acompanhe o perfil</p>
              <h2 id="instagram-title">Mais trabalhos no Instagram</h2>
              <p>Conheça outras publicações de Helena Barem Beauty.</p>
            </div>
            <a
              className="button button--ivory"
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="instagram_click"
            >
              Ver {brand.instagramHandle} <span aria-hidden="true">↗</span>
            </a>
            <span className="instagramBand__ornament" aria-hidden="true">HB</span>
          </div>
        </section>

        <section className="section valuesSection" aria-labelledby="values-title">
          <div className="shell">
            <div className="sectionIntro sectionIntro--center">
              <p className="eyebrow"><span className="eyebrow__rule" /> O cuidado em cada escolha</p>
              <h2 className="sectionTitle" id="values-title">Um atendimento com a sua identidade</h2>
            </div>
            <div className="valuesGrid">
              <article className="valueItem">
                <span className="valueItem__mark" aria-hidden="true"><LineMark kind="spark" /></span>
                <h3>Atendimento personalizado</h3>
                <p>Conte suas preferências e o resultado que deseja antes de escolher um procedimento.</p>
              </article>
              <article className="valueItem">
                <span className="valueItem__mark" aria-hidden="true"><LineMark kind="care" /></span>
                <h3>Procedimentos com segurança</h3>
                <p>Um dos pilares apresentados pela marca no cartão de divulgação.</p>
              </article>
              <article className="valueItem">
                <span className="valueItem__mark" aria-hidden="true"><LineMark kind="heart" /></span>
                <h3>Respeito aos seus traços</h3>
                <p>Uma proposta alinhada à individualidade e à beleza que já é sua.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section bookingSection" aria-labelledby="booking-title">
          <div className="shell bookingLayout">
            <div className="bookingCopy">
              <p className="eyebrow"><span className="eyebrow__rule" /> Como agendar</p>
              <h2 className="sectionTitle" id="booking-title">Seu próximo cuidado começa por uma conversa</h2>
              <p>Fale com Helena, conte o que procura e consulte os horários disponíveis.</p>
              <a
                className="button button--wine"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="whatsapp_schedule"
              >
                Consultar horários no WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ol className="bookingSteps">
              <li><span>01</span><p>Escolha um procedimento ou tire suas dúvidas.</p></li>
              <li><span>02</span><p>Conte a Helena o resultado que deseja.</p></li>
              <li><span>03</span><p>Consulte detalhes e horários pelo WhatsApp.</p></li>
            </ol>
          </div>
        </section>

        <section className="section locationSection" id="localizacao" aria-labelledby="location-title">
          <div className="shell locationLayout">
            <div>
              <p className="eyebrow"><span className="eyebrow__rule" /> Localização</p>
              <h2 className="sectionTitle" id="location-title">Helena Barem Beauty em Campo Grande</h2>
              <address>
                <strong>{brand.streetAddress}</strong>
                <span>{brand.neighborhood}, {brand.city}/{brand.region}</span>
              </address>
              <div className="locationActions">
                <a
                  className="button button--outline"
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="map_click"
                >
                  Abrir no Google Maps <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="textLink"
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="whatsapp_location"
                >
                  Agendar atendimento <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="locationNote" aria-label="Endereço do atendimento">
              <span className="locationNote__pin" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></svg>
              </span>
              <span className="locationNote__label">Campo Grande <i aria-hidden="true">·</i> MS</span>
              <span className="locationNote__line" aria-hidden="true" />
              <strong>Rua Vitório Zeolla, 805</strong>
              <span>Carandá Bosque</span>
            </div>
          </div>
        </section>

        <section className="section faqSection" id="duvidas" aria-labelledby="faq-title">
          <div className="shell faqLayout">
            <div className="faqIntro">
              <p className="eyebrow"><span className="eyebrow__rule" /> Dúvidas frequentes</p>
              <h2 className="sectionTitle" id="faq-title">Antes de agendar</h2>
              <p>Se preferir, você também pode conversar diretamente com Helena.</p>
              <a
                className="textLink"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics="whatsapp_schedule"
              >
                Perguntar pelo WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="faqList">
              <details open>
                <summary>Como faço para agendar?<span aria-hidden="true" /></summary>
                <p>Os agendamentos são feitos pelo WhatsApp. Escolha qualquer botão da página para conversar com Helena.</p>
              </details>
              <details>
                <summary>Quais procedimentos estão disponíveis?<span aria-hidden="true" /></summary>
                <p>Design de Sobrancelhas, Nano Micropigmentação, Lash Lifting, Extensão de Cílios, Hydragloss, Hydracollor e Maquiagem Profissional.</p>
              </details>
              <details>
                <summary>Onde fica a Helena Barem Beauty?<span aria-hidden="true" /></summary>
                <p>Rua Vitório Zeolla, 805, no bairro Carandá Bosque, em Campo Grande/MS.</p>
              </details>
              <details>
                <summary>Posso conversar antes de escolher um procedimento?<span aria-hidden="true" /></summary>
                <p>Sim. Escreva para Helena pelo WhatsApp e explique o resultado que procura.</p>
              </details>
              <details>
                <summary>Posso tirar dúvidas antes de agendar?<span aria-hidden="true" /></summary>
                <p>Sim. Use o WhatsApp para perguntar sobre o procedimento desejado e consultar horários disponíveis.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="finalCta" aria-labelledby="final-title">
          <div className="shell finalCta__inner">
            <p className="eyebrow eyebrow--light"><span className="eyebrow__rule" /> Helena Barem Beauty</p>
            <h2 id="final-title">Realce sua beleza.<br />Valorize sua essência.</h2>
            <p>Converse com Helena e encontre o atendimento ideal para você.</p>
            <a
              className="button button--gold"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="whatsapp_final"
            >
              Agendar pelo WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a
              className="finalCta__instagram"
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="instagram_click"
            >
              {brand.instagramHandle} <span aria-hidden="true">↗</span>
            </a>
            <span className="finalCta__ornament" aria-hidden="true">H</span>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="shell siteFooter__main">
          <div className="siteFooter__brand">
            <a className="wordmark wordmark--light" href="#inicio" aria-label="Helena Barem Beauty, início">
              <span className="wordmark__name">Helena Barem</span>
              <span className="wordmark__descriptor">BEAUTY</span>
            </a>
            <p>Realce sua beleza. Valorize sua essência.</p>
          </div>
          <div className="siteFooter__column">
            <h2>Procedimentos</h2>
            <a href="#procedimentos">Sobrancelhas</a>
            <a href="#procedimentos">Cílios</a>
            <a href="#procedimentos">Hydragloss e Hydracollor</a>
            <a href="#procedimentos">Maquiagem profissional</a>
          </div>
          <div className="siteFooter__column">
            <h2>Contato</h2>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_location">{brand.phoneDisplay}</a>
            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" data-analytics="instagram_click">{brand.instagramHandle}</a>
            <span>{brand.streetAddress}</span>
            <span>{brand.neighborhood}, {brand.city}/{brand.region}</span>
          </div>
        </div>
        <div className="shell siteFooter__bottom">
          <span>© <CopyrightYear /> Helena Barem Beauty</span>
          <a href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a>
        </div>
      </footer>

      <a
        className="whatsappFloat"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        data-analytics="whatsapp_float"
      >
        WhatsApp
      </a>
      <a
        className="mobileBookingBar"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        data-analytics="whatsapp_float"
      >
        <span>WhatsApp</span>
        <strong>Agendar horário</strong>
        <span aria-hidden="true">↗</span>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(salonSchema).replace(/</g, String.fromCharCode(92) + "u003c"),
        }}
      />
    </>
  );
}
