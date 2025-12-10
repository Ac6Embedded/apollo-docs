import React, {useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';

const barStyles: React.CSSProperties = {
  marginTop: '2rem',
  paddingTop: '1rem',
  borderTop: '1px solid var(--ifm-color-emphasis-200)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.75rem',
  fontSize: '0.85rem',
};

const labelStyles: React.CSSProperties = {
  margin: 0,
};

const buttonsWrapperStyles: React.CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
};

const buttonStyles: React.CSSProperties = {
  padding: '0.25rem 0.75rem',
  borderRadius: '999px',
  border: '1px solid var(--ifm-color-emphasis-300)',
  background: 'var(--ifm-background-surface-color)',
  cursor: 'pointer',
  fontSize: '0.85rem',
};

export default function ShareBar(): JSX.Element {
  const {
    i18n: {currentLocale},
    siteConfig,
  } = useDocusaurusContext();
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const locale = currentLocale ?? 'en';

  const labelByLocale: Record<string, string> = {
    en: 'Share this page',
    fr: 'Partager cette page',
    de: 'Diese Seite teilen',
    es: 'Compartir esta página',
    pt: 'Partilhar esta página',
    sv: 'Dela den här sidan',
    da: 'Del denne side',
    nb: 'Del denne siden',
  };

  const buttonByLocale: Record<string, string> = {
    en: copied ? 'Link copied' : 'Copy link',
    fr: copied ? 'Lien copié' : 'Copier le lien',
    de: copied ? 'Link kopiert' : 'Link kopieren',
    es: copied ? 'Enlace copiado' : 'Copiar enlace',
    pt: copied ? 'Link copiado' : 'Copiar link',
    sv: copied ? 'Länk kopierad' : 'Kopiera länk',
    da: copied ? 'Link kopieret' : 'Kopiér link',
    nb: copied ? 'Lenke kopiert' : 'Kopier lenke',
  };

  const linkedInLabelByLocale: Record<string, string> = {
    en: 'Share on LinkedIn',
    fr: 'Partager sur LinkedIn',
    de: 'Auf LinkedIn teilen',
    es: 'Compartir en LinkedIn',
    pt: 'Partilhar no LinkedIn',
    sv: 'Dela på LinkedIn',
    da: 'Del på LinkedIn',
    nb: 'Del på LinkedIn',
  };

  const label = labelByLocale[locale] ?? labelByLocale.en;
  const buttonLabel = buttonByLocale[locale] ?? buttonByLocale.en;
  const linkedinLabel =
    linkedInLabelByLocale[locale] ?? linkedInLabelByLocale.en;

  // Build a canonical URL for sharing based on siteConfig + current path.
  const baseUrl =
    (siteConfig && typeof siteConfig.url === 'string' && siteConfig.url) || '';
  const path = location?.pathname ?? '';
  const search = location?.search ?? '';
  const hash = location?.hash ?? '';
  const canonicalUrl = `${baseUrl}${path}${search}${hash}`;

  const handleCopy = () => {
    const href =
      typeof window !== 'undefined' ? window.location.href : undefined;
    if (!href) {
      return;
    }
    if (
      typeof navigator !== 'undefined' &&
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      navigator.clipboard
        .writeText(href)
        .then(() => setCopied(true))
        .catch(() => {
          setCopied(false);
        });
    } else {
      // Fallback: show prompt so user can copy manually
      // eslint-disable-next-line no-alert
      window.prompt('Copy this URL', href);
    }
  };

  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    canonicalUrl,
  )}`;

  return (
    <div style={barStyles}>
      <p style={labelStyles}>{label}</p>
      <div style={buttonsWrapperStyles}>
        <a
          href={linkedInShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyles}>
          {linkedinLabel}
        </a>
        <button type="button" style={buttonStyles} onClick={handleCopy}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
