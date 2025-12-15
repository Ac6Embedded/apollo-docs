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
    sv: 'Dela den här sidan',
  };

  const buttonByLocale: Record<string, string> = {
    en: copied ? 'Link copied' : 'Copy link',
    fr: copied ? 'Lien copié' : 'Copier le lien',
    sv: copied ? 'Länk kopierad' : 'Kopiera länk',
  };

  const linkedInLabelByLocale: Record<string, string> = {
    en: 'Share on LinkedIn',
    fr: 'Partager sur LinkedIn',
    sv: 'Dela på LinkedIn',
  };

  const label = labelByLocale[locale] ?? labelByLocale.en;
  const buttonLabel = buttonByLocale[locale] ?? buttonByLocale.en;
  const linkedinLabel =
    linkedInLabelByLocale[locale] ?? linkedInLabelByLocale.en;

  // Build a canonical URL for sharing based on siteConfig + current path.
  const buildCanonicalUrl = () => {
    const siteUrl =
      (siteConfig && typeof siteConfig.url === 'string' && siteConfig.url) || '';
    const baseUrl =
      (siteConfig &&
        siteConfig.baseUrl &&
        typeof siteConfig.baseUrl === 'string' &&
        siteConfig.baseUrl) ||
      '/';
    const path = location?.pathname ?? '';
    const search = location?.search ?? '';
    const hash = location?.hash ?? '';

    // Ensure we always have an absolute URL for LinkedIn share preview.
    const origin = siteUrl.endsWith('/')
      ? siteUrl.slice(0, -1)
      : siteUrl;
    const base = baseUrl.startsWith('/') ? baseUrl : `/${baseUrl}`;

    return `${origin}${base}${path.replace(base, '')}${search}${hash}`;
  };

  const canonicalUrl = buildCanonicalUrl();

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
