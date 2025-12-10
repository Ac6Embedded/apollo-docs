import React from 'react';
import DocItem from '@theme-original/DocItem';
import type {Props} from '@theme/DocItem';
import {useLocalPathname} from '@docusaurus/theme-common/internal';
import CraTrainingPopup from '@site/src/components/CraTrainingPopup';
import ShareBar from '@site/src/components/ShareBar';

export default function DocItemWrapper(props: Props): JSX.Element {
  const pathname = useLocalPathname();
  const isCraDoc = pathname.includes('/security/cra/');

  return (
    <>
      <DocItem {...props} />
      <ShareBar />
      {isCraDoc && <CraTrainingPopup section="cra" />}
    </>
  );
}
