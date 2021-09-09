/** @jsxImportSource @emotion/react */
import Header from './Header';
import 'twin.macro';
import { useScrollReactiveFloat } from '../../../hooks/useScrollReactiveFloat';
import React from 'react';
import { DetailPostType } from '../../../interfaces/detailPost';

const DetailLayout: React.FC<{
  meta: DetailPostType;
}> = ({ meta: { title }, children }) => {
  const float = useScrollReactiveFloat();

  return (
    <>
      <Header float={float} title={title} />
      <article tw="prose lg:prose-lg px-[16px] pt-[80px] max-w-screen-lg mx-auto">
        {children}
      </article>
    </>
  );
};

export default DetailLayout;