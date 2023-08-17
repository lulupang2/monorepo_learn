"use client";

import { Spinner } from "@chakra-ui/react";
import { useFetch } from "@web/hooks/useFetch";
import { API_URL } from "@web/libs/utils";
import { useEffect, useMemo, useState } from "react";

interface IComment extends CommentProps {
  data: CommentProps[];
  isLoading: boolean;
}

interface CommentProps {
  id: number;
  content: string;
  nickname: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  postId: number;
  parentId: number | null;
  children: Comment[];
}

function Comment({ commentId }: { commentId: string }) {
  const { data, isLoading } = useFetch<IComment[]>(
    API_URL(`comment/${commentId}`)
  );

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {data && data.map((item, index) => <div key={index}>{item.content}</div>)}
    </div>
  );
}

export default Comment;
