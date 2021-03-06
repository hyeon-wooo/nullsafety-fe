export type TContentPreview = {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  createdAt: string;
  hit: number;
  liked: number;
};

export type TContent = {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  content: string;
  liked: number;
};

export type TCntContents = {
  total: number;
  perCategory: [string, number][];
};

export type TCntLike = TCntContents;

export type TCategoryDetail = {
  id: number;
  name: string;
  priority: number;
};

export type TVisitor = {
  total: number;
  today: number;
  months: [string, number][];
};

export type TMainData = {
  cntToday: number;
  cntTotal: number;
  contentPreviewsByHit: TContentPreview[];
  contentPreviewsByLike: TContentPreview[];
};

export type TDashData = {
  cntVisitor: TVisitor;
  cntContents: TCntContents;
  cntLike: TCntLike;
};

export type TCategory = {
  id: number;
  name: string;
  priority: number;
};

export type TResponseUpload = {
  code: number;
  msg: string;
  path: string;
};
