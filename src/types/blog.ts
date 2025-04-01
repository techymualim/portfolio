export interface Author {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  bio?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  publishedAt: string;
  excerpt?: string;
  body: any; // Portable Text content
  author: Author;
  categories: Category[];
} 