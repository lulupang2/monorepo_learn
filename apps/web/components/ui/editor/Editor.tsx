"use client";

import { IAllProps } from "@tinymce/tinymce-react";
import dynamic from "next/dynamic";
import { lazy } from "react";
// import { Editor } from "@tinymce/tinymce-react";
const Editor = dynamic(
  () =>
    import("@tinymce/tinymce-react").then((mod) => ({
      default: mod.Editor,
    })) as Promise<React.ComponentType<IAllProps>>
);

const TextEditor = () => {
  const apiKey = process.env.NEXT_PUBLIC_TINY_EDIT_API;
  const tinymcePlugins = ["link", "lists", "autoresize"];
  const tinymceToolbar =
    "blocks fontfamily |" +
    "bold italic underline strikethrough forecolor backcolor |" +
    "alignleft aligncenter alignright alignjustify |" +
    "bullist numlist blockquote link";

  return (
    <Editor
      init={{
        plugins: tinymcePlugins,
        toolbar: tinymceToolbar,
        min_height: 500,
        menubar: false,
        branding: false,
        statusbar: true,
        block_formats: "제목1=h2;제목2=h3;제목3=h4;본문=p;",
      }}
      apiKey={apiKey}
      textareaName="content"
    />
  );
};

export default TextEditor;
