import React, { FC } from "react";
import { H1 } from "../../../@shared/styledComponents";
import { TFolder } from "../service";
import { Post } from "./Post";

const Folder: FC<{ folder: TFolder }> = ({ folder: { name, posts } }) => (
  <div>
    <H1>{name}</H1>

    {posts.map((post, pIndex) => (
      <Post post={post} key={pIndex} />
    ))}
  </div>
);

export { Folder };
