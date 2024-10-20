import { serialize } from 'next-mdx-remote/serialize';
import TestComponent from './TestComponent';

const TestMdx = async () => {
  const mdxSource = await serialize('### This is a header');

  return (
    <TestComponent source={mdxSource} />
  );
};

export default TestMdx;