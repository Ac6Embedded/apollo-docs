import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Launch into embedded essentials',
    image: require('@site/static/img/astro_read.png').default,
    alt: 'Astronaut reading embedded documentation',
    description: (
      <>
        Short, focused missions on the topics every embedded engineer needs:
        security, timing, connectivity, toolchains, and more – explained with
        concrete examples you can reuse in real projects.
      </>
    ),
  },
  {
    title: 'Bridge docs and training',
    image: require('@site/static/img/apollo_training.png').default,
    alt: 'Training console on a spacecraft screen',
    description: (
      <>
        Use these pages as mission briefings, then jump to dedicated courses on
        <code> ac6-training.com</code> for labs, exercises, and instructor‑led
        sessions when you need a deeper dive.
      </>
    ),
  },
  {
    title: 'Share with your crew',
    image: require('@site/static/img/apollo_tools.png').default,
    alt: 'Apollo logo',
    description: (
      <>
        Use Apollo’s training tools and structured pages to deepen your
        embedded skills, keep your crew aligned on the same material, and turn
        hard concepts into everyday engineering practice.
      </>
    ),
  },
];

function Feature({image, alt, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={alt ?? title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
