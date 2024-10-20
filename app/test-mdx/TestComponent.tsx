'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { FC } from 'react';

interface Props {
  source: MDXRemoteProps
}

const TestComponent: FC<Props> = ({ source }) => (
  <MDXRemote {...source} />
);

export default TestComponent;