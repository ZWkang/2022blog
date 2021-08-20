import { memo } from 'react';

interface IFooterProps {}

function Footer(props: IFooterProps) {
  return (
    <footer className="text-sm text-center my-8 blog-post leading-relaxed">
      <p>
        <a href="/rss" aria-label="rss 订阅">
          Rss订阅
        </a>
      </p>
      <p>Copyright © 2018-2021 zwkang. All rights reserved.</p>
    </footer>
  );
}
export default memo(Footer);
