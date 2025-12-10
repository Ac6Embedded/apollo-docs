import React, {useEffect, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export type TrainingSectionKey = 'cra';

export type TrainingPopupConfig = {
  section: TrainingSectionKey;
};

const popupStyles: React.CSSProperties = {
  position: 'fixed',
  right: '1.5rem',
  bottom: '1.5rem',
  maxWidth: '360px',
  zIndex: 1000,
  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
  borderRadius: '0.5rem',
  background: 'var(--ifm-background-surface-color)',
  padding: '1rem 1.25rem',
  border: '1px solid var(--ifm-color-emphasis-200)',
};

const titleStyles: React.CSSProperties = {
  margin: '0 0 0.25rem 0',
  fontSize: '0.95rem',
  fontWeight: 600,
};

const bodyStyles: React.CSSProperties = {
  margin: '0 0 0.75rem 0',
  fontSize: '0.85rem',
  lineHeight: 1.4,
};

const buttonRowStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0.5rem',
  alignItems: 'center',
};

const ctaStyles: React.CSSProperties = {
  flex: 1,
  textAlign: 'center',
  padding: '0.35rem 0.75rem',
  borderRadius: '999px',
  border: 'none',
  fontSize: '0.85rem',
  fontWeight: 600,
  cursor: 'pointer',
  background: 'var(--ifm-color-primary)',
  color: 'var(--ifm-font-color-base-inverse)',
};

const closeStyles: React.CSSProperties = {
  marginLeft: '0.5rem',
  fontSize: '0.8rem',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
};

export default function CraTrainingPopup(
  props: TrainingPopupConfig,
): JSX.Element | null {
  const [visible, setVisible] = useState(false);
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10_000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  const locale = currentLocale ?? 'en';

  const titleByLocale: Record<string, string> = {
    en: 'Learn more about CRA',
    fr: 'En savoir plus sur le CRA',
    de: 'Mehr über den CRA erfahren',
    es: 'Más información sobre el CRA',
    pt: 'Saiba mais sobre o CRA',
    sv: 'Läs mer om CRA',
    da: 'Læs mere om CRA',
    nb: 'Lær mer om CRA',
  };

  const bodyByLocale: Record<string, string> = {
    en: 'Discover the Cyber Resilience Act and its impact on embedded systems with AC6 training.',
    fr: 'Découvrez le Cyber Resilience Act et son impact sur les systèmes embarqués avec les formations AC6.',
    de: 'Erfahren Sie mehr über den Cyber Resilience Act und seine Auswirkungen auf Embedded‑Systeme mit Schulungen von AC6.',
    es: 'Descubra el Cyber Resilience Act y su impacto en sistemas embebidos con la formación de AC6.',
    pt: 'Conheça o Cyber Resilience Act e o seu impacto em sistemas embarcados com a formação AC6.',
    sv: 'Lär dig mer om Cyber Resilience Act och hur den påverkar inbyggda system tillsammans med AC6‑utbildning.',
    da: 'Bliv klogere på Cyber Resilience Act og dens betydning for indlejrede systemer med træning fra AC6.',
    nb: 'Lær mer om Cyber Resilience Act og hvordan den påvirker innebygde systemer med opplæring fra AC6.',
  };

  const title = titleByLocale[locale] ?? titleByLocale.en;
  const body = bodyByLocale[locale] ?? bodyByLocale.en;

  return (
    <div style={popupStyles}>
      <div style={titleStyles}>{title}</div>
      {props.section === 'cra' && <p style={bodyStyles}>{body}</p>}
      <div style={buttonRowStyles}>
        <a
          style={ctaStyles}
          href="https://www.ac6-training.com/en/cours.php/cat_oSEC/ref_oSEC10/cyber-resilience-act-and-embedded-systems"
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
        <button
          type="button"
          style={closeStyles}
          onClick={() => setVisible(false)}
          aria-label="Close CRA training suggestion"
        >
          Close
        </button>
      </div>
    </div>
  );
}
