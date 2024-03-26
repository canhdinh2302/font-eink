import React, { FC } from "react";
import styled from "styled-components";
import { H2, P } from "../../../@shared/styledComponents";
import { TPost } from "../service";

const PostContainer = styled.div({
  marginBottom: "32pt",
});

const PostImageContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

const PostImage = styled.img({
  height: "48pt",
  aspectRatio: "1/1",
  objectFit: "cover",
  borderRadius: "8pt",
  marginRight: "8pt",
  filter: "grayscale(100%)",
});

const Post: FC<{ post: TPost }> = ({ post: { title, description, image, url } }) => {
  const RenderH2 = description ? H2 : P;

  return (
    <PostContainer onClick={() => url && (location.pathname = url.replace("https://e.vnexpress.net", ""))}>
      {image ? (
        <PostImageContainer>
          <PostImage src={image} />
          <RenderH2 style={{ margin: 0 }}>{title}</RenderH2>
        </PostImageContainer>
      ) : (
        <RenderH2 style={{ margin: 0 }}>{title}</RenderH2>
      )}

      <P style={{ marginTop: 0 }}>{description}</P>
    </PostContainer>
  );
};

export { Post };
