import React from 'react';
import styles from './CardsGrid.module.css';

type CardItem = {
  title: string;
  description: string;
  href: string;
  icon?: string;
};

export default function CardsGrid({items}: {items: CardItem[]}): JSX.Element {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <a key={item.href} className={styles.card} href={item.href}>
          {item.icon && <div className={styles.icon} aria-hidden="true">{item.icon}</div>}
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
