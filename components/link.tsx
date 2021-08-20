import { memo } from 'react';
import LinkComponent from 'next/link';

export interface LinkProps {
  content: string;
  urlLink: string;
}

function Link(props: LinkProps) {
  const { urlLink, content } = props || {};
  if (!content || !urlLink) {
    return null;
  }
  return (
    <LinkComponent href={props.urlLink}>
      <a>{props.content}</a>
    </LinkComponent>
  );
}

export default memo(Link);
