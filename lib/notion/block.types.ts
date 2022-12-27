export interface Post {
  title: string;
  description?: string;
  id: string;
  coverImage?: string;
  created: Date;
  updated: Date;
  type?: "update" | "event" | "dev blog";
}

export interface Block {
  object: string;
  id: string;
  parent: Parent;
  created_time: Date;
  last_edited_time: Date;
  created_by: TedBy;
  last_edited_by: TedBy;
  has_children: boolean;
  archived: boolean;
  type: string;
  child_page: ChildPage;
  paragraph?: Paragraph;
}

export interface ChildPage {
  title: string;
}

export interface TedBy {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  page_id: string;
}

export interface Paragraph {
  rich_text: RichText[];
  color: string;
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link: null;
}
