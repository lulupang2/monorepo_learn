import React from "react";
import { useRouter } from "next/navigation";
import { useFetch } from "@web/hooks/useFetch";
import Comment from "./comment";
type PageParams = {
  id: string;
};
export default function ({ params }: { params: PageParams }) {
  return (
    <>
      {params.id}
      <Comment commentId={params.id} />
    </>
  );
}
