export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'publicURL' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export type GraphQlSourceFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'typeName' |
  'fieldName';

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type ImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL' |
  'INSIDE' |
  'OUTSIDE';

export type ImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  wpgraphql: WpGraphQl;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  'buildTime' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___id' |
  'context___name' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___typeName' |
  'pluginCreator___pluginOptions___fieldName' |
  'pluginCreator___pluginOptions___url' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___color' |
  'pluginCreator___pluginOptions___showSpinner' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___icons' |
  'pluginCreator___pluginOptions___icons___src' |
  'pluginCreator___pluginOptions___icons___sizes' |
  'pluginCreator___pluginOptions___icons___type' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___fileName' |
  'pluginOptions___typeName' |
  'pluginOptions___fieldName' |
  'pluginOptions___url' |
  'pluginOptions___name' |
  'pluginOptions___path' |
  'pluginOptions___color' |
  'pluginOptions___showSpinner' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___icon' |
  'pluginOptions___icons' |
  'pluginOptions___icons___src' |
  'pluginOptions___icons___sizes' |
  'pluginOptions___icons___type' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  fileName?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  showSpinner?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  fileName?: Maybe<StringQueryOperatorInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  showSpinner?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type WpGraphQl = {
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<WpGraphQl_Settings>;
  /** Connection between the RootQuery type and the category type */
  categories?: Maybe<WpGraphQl_RootQueryToCategoryConnection>;
  /** A 0bject */
  category?: Maybe<WpGraphQl_Category>;
  /** Returns a Comment */
  comment?: Maybe<WpGraphQl_Comment>;
  /** Connection between the RootQuery type and the Comment type */
  comments?: Maybe<WpGraphQl_RootQueryToCommentConnection>;
  /** A node used to manage content */
  contentNode?: Maybe<WpGraphQl_ContentNode>;
  /** Connection between the RootQuery type and the ContentNode type */
  contentNodes?: Maybe<WpGraphQl_RootQueryToContentNodeConnection>;
  /** Fetch a Content Type node by unique Identifier */
  contentType?: Maybe<WpGraphQl_ContentType>;
  /** Connection between the RootQuery type and the ContentType type */
  contentTypes?: Maybe<WpGraphQl_RootQueryToContentTypeConnection>;
  discussionSettings?: Maybe<WpGraphQl_DiscussionSettings>;
  generalSettings?: Maybe<WpGraphQl_GeneralSettings>;
  /** An object of the mediaItem Type.  */
  mediaItem?: Maybe<WpGraphQl_MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<WpGraphQl_MediaItem>;
  /** Connection between the RootQuery type and the mediaItem type */
  mediaItems?: Maybe<WpGraphQl_RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  menu?: Maybe<WpGraphQl_Menu>;
  /** A WordPress navigation menu item */
  menuItem?: Maybe<WpGraphQl_MenuItem>;
  /** Connection between the RootQuery type and the MenuItem type */
  menuItems?: Maybe<WpGraphQl_RootQueryToMenuItemConnection>;
  /** Connection between the RootQuery type and the Menu type */
  menus?: Maybe<WpGraphQl_RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<WpGraphQl_Node>;
  nodeByUri?: Maybe<WpGraphQl_UniformResourceIdentifiable>;
  /** An object of the page Type.  */
  page?: Maybe<WpGraphQl_Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<WpGraphQl_Page>;
  /** Connection between the RootQuery type and the page type */
  pages?: Maybe<WpGraphQl_RootQueryToPageConnection>;
  /** A WordPress plugin */
  plugin?: Maybe<WpGraphQl_Plugin>;
  /** Connection between the RootQuery type and the Plugin type */
  plugins?: Maybe<WpGraphQl_RootQueryToPluginConnection>;
  /** An object of the post Type.  */
  post?: Maybe<WpGraphQl_Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<WpGraphQl_Post>;
  /** A 0bject */
  postFormat?: Maybe<WpGraphQl_PostFormat>;
  /** Connection between the RootQuery type and the postFormat type */
  postFormats?: Maybe<WpGraphQl_RootQueryToPostFormatConnection>;
  /** Connection between the RootQuery type and the post type */
  posts?: Maybe<WpGraphQl_RootQueryToPostConnection>;
  readingSettings?: Maybe<WpGraphQl_ReadingSettings>;
  /** Connection between the RootQuery type and the ContentRevisionUnion type */
  revisions?: Maybe<WpGraphQl_RootQueryToContentRevisionUnionConnection>;
  /** A 0bject */
  tag?: Maybe<WpGraphQl_Tag>;
  /** Connection between the RootQuery type and the tag type */
  tags?: Maybe<WpGraphQl_RootQueryToTagConnection>;
  /** Connection between the RootQuery type and the Taxonomy type */
  taxonomies?: Maybe<WpGraphQl_RootQueryToTaxonomyConnection>;
  /** Fetch a Taxonomy node by unique Identifier */
  taxonomy?: Maybe<WpGraphQl_Taxonomy>;
  /** A node in a taxonomy used to group and relate content nodes */
  termNode?: Maybe<WpGraphQl_TermNode>;
  /** Connection between the RootQuery type and the TermNode type */
  terms?: Maybe<WpGraphQl_RootQueryToTermNodeConnection>;
  /** A Theme object */
  theme?: Maybe<WpGraphQl_Theme>;
  /** Connection between the RootQuery type and the Theme type */
  themes?: Maybe<WpGraphQl_RootQueryToThemeConnection>;
  /** Returns a user */
  user?: Maybe<WpGraphQl_User>;
  /** Returns a user role */
  userRole?: Maybe<WpGraphQl_UserRole>;
  /** Connection between the RootQuery type and the UserRole type */
  userRoles?: Maybe<WpGraphQl_RootQueryToUserRoleConnection>;
  /** Connection between the RootQuery type and the User type */
  users?: Maybe<WpGraphQl_RootQueryToUserConnection>;
  /** Returns the current user */
  viewer?: Maybe<WpGraphQl_User>;
  writingSettings?: Maybe<WpGraphQl_WritingSettings>;
};


/** The root entry point into the Graph */
export type WpGraphQlCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlCategoryArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_CategoryIdType>;
};


/** The root entry point into the Graph */
export type WpGraphQlCommentArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type WpGraphQlCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToCommentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlContentNodeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_ContentNodeIdTypeEnum>;
  contentType?: Maybe<WpGraphQl_ContentTypeEnum>;
};


/** The root entry point into the Graph */
export type WpGraphQlContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlContentTypeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_ContentTypeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type WpGraphQlContentTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type WpGraphQlMediaItemArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_MediaItemIdType>;
};


/** The root entry point into the Graph */
export type WpGraphQlMediaItemByArgs = {
  id?: Maybe<Scalars['ID']>;
  mediaItemId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type WpGraphQlMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlMenuArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type WpGraphQlMenuItemArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type WpGraphQlMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlMenusArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlNodeArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** The root entry point into the Graph */
export type WpGraphQlNodeByUriArgs = {
  uri: Scalars['String'];
};


/** The root entry point into the Graph */
export type WpGraphQlPageArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_PageIdType>;
};


/** The root entry point into the Graph */
export type WpGraphQlPageByArgs = {
  id?: Maybe<Scalars['ID']>;
  pageId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type WpGraphQlPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlPluginArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type WpGraphQlPluginsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type WpGraphQlPostArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_PostIdType>;
};


/** The root entry point into the Graph */
export type WpGraphQlPostByArgs = {
  id?: Maybe<Scalars['ID']>;
  postId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type WpGraphQlPostFormatArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_PostFormatIdType>;
};


/** The root entry point into the Graph */
export type WpGraphQlPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToPostFormatConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToContentRevisionUnionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlTagArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_TagIdType>;
};


/** The root entry point into the Graph */
export type WpGraphQlTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlTaxonomiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type WpGraphQlTaxonomyArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_TaxonomyIdTypeEnum>;
};


/** The root entry point into the Graph */
export type WpGraphQlTermNodeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_TermNodeIdTypeEnum>;
  taxonomy?: Maybe<WpGraphQl_TaxonomyEnum>;
};


/** The root entry point into the Graph */
export type WpGraphQlTermsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToTermNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type WpGraphQlThemeArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type WpGraphQlThemesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type WpGraphQlUserArgs = {
  id: Scalars['ID'];
  idType?: Maybe<WpGraphQl_UserNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type WpGraphQlUserRoleArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type WpGraphQlUserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type WpGraphQlUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_RootQueryToUserConnectionWhereArgs>;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type WpGraphQl_Avatar = {
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a
   * 404 instead of a default image), &#039;retro&#039; (8bit),
   * &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face),
   * &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;,
   * &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039;
   * (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;,
   * &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

/**
 * What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are
 * judged in that order. Default is the value of the 'avatar_rating' option
 */
export type WpGraphQl_AvatarRatingEnum = 
  'G' |
  'PG' |
  'R' |
  'X';

/** The category type */
export type WpGraphQl_Category = WpGraphQl_Node & WpGraphQl_TermNode & WpGraphQl_UniformResourceIdentifiable & {
  /** The ancestors of the object */
  ancestors?: Maybe<Array<Maybe<WpGraphQl_Category>>>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  categoryId?: Maybe<Scalars['Int']>;
  /** Connection between the category type and the category type */
  children?: Maybe<WpGraphQl_CategoryToCategoryConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** The parent object */
  parent?: Maybe<WpGraphQl_Category>;
  /** Connection between the category type and the post type */
  posts?: Maybe<WpGraphQl_CategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the category type and the Taxonomy type */
  taxonomy?: Maybe<WpGraphQl_CategoryToTaxonomyConnection>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
};


/** The category type */
export type WpGraphQl_CategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_CategoryToCategoryConnectionWhereArgs>;
};


/** The category type */
export type WpGraphQl_CategoryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_CategoryToPostConnectionWhereArgs>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type WpGraphQl_CategoryIdType = 
  /** The Database ID for the node */
  'DATABASE_ID' |
  /** The hashed Global ID */
  'ID' |
  /** The name of the node */
  'NAME' |
  /** Url friendly name of the node */
  'SLUG' |
  /** The URI for the node */
  'URI';

/** Connection between the category type and the category type */
export type WpGraphQl_CategoryToCategoryConnection = {
  /** Edges for the CategoryToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_CategoryToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_CategoryToCategoryConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Category>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type WpGraphQl_CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<WpGraphQl_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /**
   * Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /**
   * Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the category type and the post type */
export type WpGraphQl_CategoryToPostConnection = {
  /** Edges for the CategoryToPostConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_CategoryToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_CategoryToPostConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Post>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type WpGraphQl_CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the Taxonomy type */
export type WpGraphQl_CategoryToTaxonomyConnection = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpGraphQl_Taxonomy>;
};

/** A Comment object */
export type WpGraphQl_Comment = WpGraphQl_Node & {
  /**
   * User agent used to post the comment. This field is equivalent to
   * WP_Comment-&gt;comment_agent and the value matching the
   * &quot;comment_agent&quot; column in SQL.
   */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_approved and the value matching the
   * &quot;comment_approved&quot; column in SQL.
   */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<WpGraphQl_CommentAuthorUnion>;
  /**
   * IP address for the author. This field is equivalent to
   * WP_Comment-&gt;comment_author_IP and the value matching the
   * &quot;comment_author_IP&quot; column in SQL.
   */
  authorIp?: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the Comment type */
  children?: Maybe<WpGraphQl_CommentToCommentConnection>;
  /** ID for the comment, unique among comments. */
  commentId?: Maybe<Scalars['Int']>;
  /** The object the comment was added to */
  commentedOn?: Maybe<WpGraphQl_PostObjectUnion>;
  /**
   * Content of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_content and the value matching the
   * &quot;comment_content&quot; column in SQL.
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Date the comment was posted in local time. This field is equivalent to
   * WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   */
  date?: Maybe<Scalars['String']>;
  /**
   * Date the comment was posted in GMT. This field is equivalent to
   * WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   */
  dateGmt?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Karma value for the comment. This field is equivalent to
   * WP_Comment-&gt;comment_karma and the value matching the
   * &quot;comment_karma&quot; column in SQL.
   */
  karma?: Maybe<Scalars['Int']>;
  /**
   * Parent comment of current comment. This field is equivalent to the WP_Comment
   * instance matching the WP_Comment-&gt;comment_parent ID.
   */
  parent?: Maybe<WpGraphQl_Comment>;
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and
   * the value matching the &quot;comment_type&quot; column in SQL.
   */
  type?: Maybe<Scalars['String']>;
};


/** A Comment object */
export type WpGraphQl_CommentChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_CommentToCommentConnectionWhereArgs>;
};


/** A Comment object */
export type WpGraphQl_CommentContentArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};

/** A Comment Author object */
export type WpGraphQl_CommentAuthor = WpGraphQl_Node & {
  /** The email for the comment author */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name for the comment author. */
  name?: Maybe<Scalars['String']>;
  /** The url the comment author. */
  url?: Maybe<Scalars['String']>;
};

export type WpGraphQl_CommentAuthorUnion = WpGraphQl_User | WpGraphQl_CommentAuthor;

/** Options for ordering the connection */
export type WpGraphQl_CommentsConnectionOrderbyEnum = 
  'COMMENT_AGENT' |
  'COMMENT_APPROVED' |
  'COMMENT_AUTHOR' |
  'COMMENT_AUTHOR_EMAIL' |
  'COMMENT_AUTHOR_IP' |
  'COMMENT_AUTHOR_URL' |
  'COMMENT_CONTENT' |
  'COMMENT_DATE' |
  'COMMENT_DATE_GMT' |
  'COMMENT_ID' |
  'COMMENT_IN' |
  'COMMENT_KARMA' |
  'COMMENT_PARENT' |
  'COMMENT_POST_ID' |
  'COMMENT_TYPE' |
  'USER_ID';

/** Connection between the Comment type and the Comment type */
export type WpGraphQl_CommentToCommentConnection = {
  /** Edges for the CommentToCommentConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_CommentToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_CommentToCommentConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Comment>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type WpGraphQl_CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpGraphQl_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpGraphQl_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Nodes used to manage content */
export type WpGraphQl_ContentNode = {
  /** The ID of the object in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  editLast?: Maybe<WpGraphQl_User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return
   * the user and the time they last edited. Null if the edit lock doesn't exist or
   * is greater than 15 seconds
   */
  editLock?: Maybe<WpGraphQl_EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post->guid and the guid column in the "post_objects" database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post->post_name field
   * and the post_name column in the database for the "post_objects" table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type WpGraphQl_ContentNodeIdTypeEnum = 
  /** Identify a resource by the Database ID. */
  'DATABASE_ID' |
  /** Identify a resource by the (hashed) Global ID. */
  'ID' |
  /** Identify a resource by the URI. */
  'URI';

export type WpGraphQl_ContentRevisionUnion = WpGraphQl_Post | WpGraphQl_Page;

/** An Post Type object */
export type WpGraphQl_ContentType = WpGraphQl_Node & {
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** List of Taxonomies connected to the Post Type */
  connectedTaxonomies?: Maybe<Array<Maybe<WpGraphQl_Taxonomy>>>;
  /** A list of Taxonomies associated with the post type */
  connectedTaxonomyNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Whether delete this type of content when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude posts with this post type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the post type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the post-type object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the post type labels. */
  labels?: Maybe<WpGraphQl_PostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether a post type is intended for use publicly either via the admin
   * interface or by front-end users. While the default settings of
   * exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are
   * inherited from public, each does not rely on this relationship and controls a
   * very specific intention.
   */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the post type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this post type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Where to show the post type in the admin menu. To work, $show_ui must be true.
   * If true, the post type is shown in its own top level menu. If false, no menu
   * is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot;
   * or &quot;edit.php?post_type=page&quot;), the post type will be placed as a
   * sub-menu of that.
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this post type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this post type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
};


/** An Post Type object */
export type WpGraphQl_ContentTypeConnectedTaxonomiesArgs = {
  taxonomies?: Maybe<Array<Maybe<WpGraphQl_TaxonomyEnum>>>;
};


/** An Post Type object */
export type WpGraphQl_ContentTypeConnectedTaxonomyNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<WpGraphQl_TaxonomyEnum>>>;
};

/** Allowed Content Types */
export type WpGraphQl_ContentTypeEnum = 
  /** The Type of Content object */
  'ATTACHMENT' |
  /** The Type of Content object */
  'PAGE' |
  /** The Type of Content object */
  'POST';

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export type WpGraphQl_ContentTypeIdTypeEnum = 
  /** The globally unique ID */
  'ID' |
  /** The name of the content type. */
  'NAME';

/** Input for the createCategory mutation */
export type WpGraphQl_CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The name of the category object to mutate */
  name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createCategory mutation */
export type WpGraphQl_CreateCategoryPayload = {
  /** The created category */
  category?: Maybe<WpGraphQl_Category>;
  clientMutationId: Scalars['String'];
};

/** Input for the createComment mutation */
export type WpGraphQl_CreateCommentInput = {
  /** User agent used to post the comment. */
  agent?: Maybe<Scalars['String']>;
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** IP address for the comment's author. */
  authorIp?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day ( e.g.
   * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17 
   */
  date?: Maybe<Scalars['String']>;
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
  /** The userID of the comment's author. */
  userId?: Maybe<Scalars['Int']>;
};

/** The payload for the createComment mutation */
export type WpGraphQl_CreateCommentPayload = {
  clientMutationId: Scalars['String'];
  /** The comment that was created */
  comment?: Maybe<WpGraphQl_Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server
   * will not return the comment to a non authenticated user, but a success message
   * can be returned if the create succeeded, and the client can optimistically add
   * the comment to the client cache
   */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createMediaItem mutation */
export type WpGraphQl_CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<WpGraphQl_MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the createMediaItem mutation */
export type WpGraphQl_CreateMediaItemPayload = {
  clientMutationId: Scalars['String'];
  mediaItem?: Maybe<WpGraphQl_MediaItem>;
};

/** Input for the createPage mutation */
export type WpGraphQl_CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId: Scalars['String'];
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the createPage mutation */
export type WpGraphQl_CreatePagePayload = {
  clientMutationId: Scalars['String'];
  page?: Maybe<WpGraphQl_Page>;
};

/** Input for the createPostFormat mutation */
export type WpGraphQl_CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String'];
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation */
export type WpGraphQl_CreatePostFormatPayload = {
  clientMutationId: Scalars['String'];
  /** The created post_format */
  postFormat?: Maybe<WpGraphQl_PostFormat>;
};

/** Input for the createPost mutation */
export type WpGraphQl_CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<WpGraphQl_PostCategoriesInput>;
  clientMutationId: Scalars['String'];
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17 
   */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<WpGraphQl_PostPostFormatsInput>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<WpGraphQl_PostTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the createPost mutation */
export type WpGraphQl_CreatePostPayload = {
  clientMutationId: Scalars['String'];
  post?: Maybe<WpGraphQl_Post>;
};

/** Input for the createTag mutation */
export type WpGraphQl_CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String'];
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createTag mutation */
export type WpGraphQl_CreateTagPayload = {
  clientMutationId: Scalars['String'];
  /** The created post_tag */
  tag?: Maybe<WpGraphQl_Tag>;
};

/** Input for the createUser mutation */
export type WpGraphQl_CreateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /**
   * A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the createUser mutation */
export type WpGraphQl_CreateUserPayload = {
  clientMutationId: Scalars['String'];
  user?: Maybe<WpGraphQl_User>;
};

/** Date values */
export type WpGraphQl_DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** Filter the connection based on input */
export type WpGraphQl_DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: Maybe<WpGraphQl_DateInput>;
  /** Nodes should be returned before this date */
  before?: Maybe<WpGraphQl_DateInput>;
  /** Column to query against */
  column?: Maybe<WpGraphQl_PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: Maybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: Maybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: Maybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: Maybe<WpGraphQl_RelationEnum>;
  /** Second (0 to 59) */
  second?: Maybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** Input for the deleteCategory mutation */
export type WpGraphQl_DeleteCategoryInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the category to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation */
export type WpGraphQl_DeleteCategoryPayload = {
  /** The deteted term object */
  category?: Maybe<WpGraphQl_Category>;
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation */
export type WpGraphQl_DeleteCommentInput = {
  clientMutationId: Scalars['String'];
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  id: Scalars['ID'];
};

/** The payload for the deleteComment mutation */
export type WpGraphQl_DeleteCommentPayload = {
  clientMutationId: Scalars['String'];
  /** The deleted comment object */
  comment?: Maybe<WpGraphQl_Comment>;
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteMediaItem mutation */
export type WpGraphQl_DeleteMediaItemInput = {
  clientMutationId: Scalars['String'];
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation */
export type WpGraphQl_DeleteMediaItemPayload = {
  clientMutationId: Scalars['String'];
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']>;
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<WpGraphQl_MediaItem>;
};

/** Input for the deletePage mutation */
export type WpGraphQl_DeletePageInput = {
  clientMutationId: Scalars['String'];
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePage mutation */
export type WpGraphQl_DeletePagePayload = {
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  page?: Maybe<WpGraphQl_Page>;
};

/** Input for the deletePostFormat mutation */
export type WpGraphQl_DeletePostFormatInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the postFormat to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation */
export type WpGraphQl_DeletePostFormatPayload = {
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  postFormat?: Maybe<WpGraphQl_PostFormat>;
};

/** Input for the deletePost mutation */
export type WpGraphQl_DeletePostInput = {
  clientMutationId: Scalars['String'];
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePost mutation */
export type WpGraphQl_DeletePostPayload = {
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  post?: Maybe<WpGraphQl_Post>;
};

/** Input for the deleteTag mutation */
export type WpGraphQl_DeleteTagInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the tag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteTag mutation */
export type WpGraphQl_DeleteTagPayload = {
  clientMutationId: Scalars['String'];
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  tag?: Maybe<WpGraphQl_Tag>;
};

/** Input for the deleteUser mutation */
export type WpGraphQl_DeleteUserInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the user you want to delete */
  id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation */
export type WpGraphQl_DeleteUserPayload = {
  clientMutationId: Scalars['String'];
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deleted user object */
  user?: Maybe<WpGraphQl_User>;
};

/** The discussion setting type */
export type WpGraphQl_DiscussionSettings = {
  /** 新しい投稿へのコメントを許可する。 */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** 新しい記事に対し他のブログからの通知 (ピンバック・トラックバック) を受け付ける。 */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

/** Info on whether the object is locked by another user editing it */
export type WpGraphQl_EditLock = {
  /** The time when the object was last edited */
  editTime?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  user?: Maybe<WpGraphQl_User>;
};

/** The general setting type */
export type WpGraphQl_GeneralSettings = {
  /** 日付文字列の書式。 */
  dateFormat?: Maybe<Scalars['String']>;
  /** サイトのキャッチフレーズ。 */
  description?: Maybe<Scalars['String']>;
  /** このアドレスは新規ユーザーの通知などサイト管理のために使われます。 */
  email?: Maybe<Scalars['String']>;
  /** WordPress のロケールコード。 */
  language?: Maybe<Scalars['String']>;
  /** 週の始まりの曜日番号。 */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** 時刻文字列の書式。 */
  timeFormat?: Maybe<Scalars['String']>;
  /** 現在地と同じタイムゾーンの都市 */
  timezone?: Maybe<Scalars['String']>;
  /** サイト名 */
  title?: Maybe<Scalars['String']>;
  /** サイト URL。 */
  url?: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type WpGraphQl_HierarchicalContentNode = {
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<WpGraphQl_PostObjectUnion>;
};

/** File details for a Media Item */
export type WpGraphQl_MediaDetails = {
  /** The height of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  meta?: Maybe<WpGraphQl_MediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<WpGraphQl_MediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};

/** The mediaItem type */
export type WpGraphQl_MediaItem = WpGraphQl_Node & WpGraphQl_ContentNode & WpGraphQl_UniformResourceIdentifiable & WpGraphQl_NodeWithTitle & WpGraphQl_NodeWithAuthor & WpGraphQl_NodeWithComments & WpGraphQl_HierarchicalContentNode & {
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<WpGraphQl_User>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  comments?: Maybe<WpGraphQl_MediaItemToCommentConnection>;
  /** Connection between the mediaItem type and the ContentType type */
  contentType?: Maybe<WpGraphQl_MediaItemToContentTypeConnection>;
  /** The ID of the object in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  editLast?: Maybe<WpGraphQl_User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return
   * the user and the time they last edited. Null if the edit lock doesn&#039;t
   * exist or is greater than 15 seconds
   */
  editLock?: Maybe<WpGraphQl_EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the attachment object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<WpGraphQl_MediaDetails>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  mediaItemId: Scalars['Int'];
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<WpGraphQl_PostObjectUnion>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The srcset attribute specifies the URL of the image to use in different
   * situations. It is a comma separated string of urls and their widths.
   */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
};


/** The mediaItem type */
export type WpGraphQl_MediaItemCaptionArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type WpGraphQl_MediaItemCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_MediaItemToCommentConnectionWhereArgs>;
};


/** The mediaItem type */
export type WpGraphQl_MediaItemDescriptionArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type WpGraphQl_MediaItemSizesArgs = {
  size?: Maybe<WpGraphQl_MediaItemSizeEnum>;
};


/** The mediaItem type */
export type WpGraphQl_MediaItemSourceUrlArgs = {
  size?: Maybe<WpGraphQl_MediaItemSizeEnum>;
};


/** The mediaItem type */
export type WpGraphQl_MediaItemSrcSetArgs = {
  size?: Maybe<WpGraphQl_MediaItemSizeEnum>;
};


/** The mediaItem type */
export type WpGraphQl_MediaItemTitleArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type WpGraphQl_MediaItemIdType = 
  /** Identify a resource by the Database ID. */
  'DATABASE_ID' |
  /** Identify a resource by the (hashed) Global ID. */
  'ID' |
  /** Identify a resource by the URI. */
  'URI' |
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  'SLUG' |
  /** Identify a media item by its source url */
  'SOURCE_URL';

/** Meta connected to a MediaItem */
export type WpGraphQl_MediaItemMeta = {
  aperture?: Maybe<Scalars['Float']>;
  camera?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  createdTimestamp?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['String']>;
  focalLength?: Maybe<Scalars['Int']>;
  iso?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  orientation?: Maybe<Scalars['String']>;
  shutterSpeed?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

/** The size of the media item object. */
export type WpGraphQl_MediaItemSizeEnum = 
  /** MediaItem with the large size */
  'LARGE' |
  /** MediaItem with the medium size */
  'MEDIUM' |
  /** MediaItem with the medium_large size */
  'MEDIUM_LARGE' |
  /** MediaItem with the post-thumbnail size */
  'POST_THUMBNAIL' |
  /** MediaItem with the thumbnail size */
  'THUMBNAIL' |
  /** MediaItem with the 1536x1536 size */
  '_1536X1536' |
  /** MediaItem with the 2048x2048 size */
  '_2048X2048';

/** The status of the media item object. */
export type WpGraphQl_MediaItemStatusEnum = 
  /** Objects with the auto-draft status */
  'AUTO_DRAFT' |
  /** Objects with the inherit status */
  'INHERIT' |
  /** Objects with the private status */
  'PRIVATE' |
  /** Objects with the trash status */
  'TRASH';

/** Connection between the mediaItem type and the Comment type */
export type WpGraphQl_MediaItemToCommentConnection = {
  /** Edges for the MediaItemToCommentConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_MediaItemToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_MediaItemToCommentConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Comment>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type WpGraphQl_MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpGraphQl_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpGraphQl_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the mediaItem type and the ContentType type */
export type WpGraphQl_MediaItemToContentTypeConnection = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpGraphQl_ContentType>;
};

/** Details of an available size for a media item */
export type WpGraphQl_MediaSize = {
  /** The file of the for the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The height of the for the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the resource */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the for the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the for the referenced size */
  width?: Maybe<Scalars['String']>;
};

/**
 * Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export type WpGraphQl_Menu = WpGraphQl_Node & {
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the nav menu object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** WP ID of the nav menu. */
  menuId?: Maybe<Scalars['Int']>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<WpGraphQl_MenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
};


/**
 * Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export type WpGraphQl_MenuMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_MenuToMenuItemConnectionWhereArgs>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type WpGraphQl_MenuItem = WpGraphQl_Node & {
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<WpGraphQl_MenuItemToMenuItemConnection>;
  /** The object connected to this menu item. */
  connectedObject?: Maybe<WpGraphQl_MenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the nav menu item object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  /** WP ID of the menu item. */
  menuItemId?: Maybe<Scalars['Int']>;
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type WpGraphQl_MenuItemChildItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_MenuItemToMenuItemConnectionWhereArgs>;
};

export type WpGraphQl_MenuItemObjectUnion = WpGraphQl_Post | WpGraphQl_Page | WpGraphQl_Category | WpGraphQl_Tag | WpGraphQl_MenuItem;

/** Connection between the MenuItem type and the MenuItem type */
export type WpGraphQl_MenuItemToMenuItemConnection = {
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_MenuItemToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_MenuItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_MenuItemToMenuItemConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_MenuItem>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type WpGraphQl_MenuItemToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<WpGraphQl_MenuLocationEnum>;
};

/** Registered menu locations */
export type WpGraphQl_MenuLocationEnum = 
  'FOOTER' |
  'MENU_1' |
  'SOCIAL';

/** Connection between the Menu type and the MenuItem type */
export type WpGraphQl_MenuToMenuItemConnection = {
  /** Edges for the MenuToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_MenuToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_MenuItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_MenuToMenuItemConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_MenuItem>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type WpGraphQl_MenuToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<WpGraphQl_MenuLocationEnum>;
};

/** The MimeType of the object */
export type WpGraphQl_MimeTypeEnum = 
  'APPLICATION_JAVA' |
  'APPLICATION_MSWORD' |
  'APPLICATION_OCTET_STREAM' |
  'APPLICATION_ONENOTE' |
  'APPLICATION_OXPS' |
  'APPLICATION_PDF' |
  'APPLICATION_RAR' |
  'APPLICATION_RTF' |
  'APPLICATION_TTAF_XML' |
  'APPLICATION_VND_APPLE_KEYNOTE' |
  'APPLICATION_VND_APPLE_NUMBERS' |
  'APPLICATION_VND_APPLE_PAGES' |
  'APPLICATION_VND_MS_ACCESS' |
  'APPLICATION_VND_MS_EXCEL' |
  'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12' |
  'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12' |
  'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12' |
  'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12' |
  'APPLICATION_VND_MS_POWERPOINT' |
  'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12' |
  'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12' |
  'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12' |
  'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12' |
  'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12' |
  'APPLICATION_VND_MS_PROJECT' |
  'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12' |
  'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12' |
  'APPLICATION_VND_MS_WRITE' |
  'APPLICATION_VND_MS_XPSDOCUMENT' |
  'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART' |
  'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE' |
  'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA' |
  'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS' |
  'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION' |
  'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET' |
  'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT' |
  'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION' |
  'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE' |
  'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW' |
  'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE' |
  'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET' |
  'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE' |
  'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT' |
  'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE' |
  'APPLICATION_WORDPERFECT' |
  'APPLICATION_X_7Z_COMPRESSED' |
  'APPLICATION_X_GZIP' |
  'APPLICATION_X_TAR' |
  'APPLICATION_ZIP' |
  'AUDIO_AAC' |
  'AUDIO_FLAC' |
  'AUDIO_MIDI' |
  'AUDIO_MPEG' |
  'AUDIO_OGG' |
  'AUDIO_WAV' |
  'AUDIO_X_MATROSKA' |
  'AUDIO_X_MS_WAX' |
  'AUDIO_X_MS_WMA' |
  'AUDIO_X_REALAUDIO' |
  'IMAGE_BMP' |
  'IMAGE_GIF' |
  'IMAGE_JPEG' |
  'IMAGE_PNG' |
  'IMAGE_TIFF' |
  'IMAGE_X_ICON' |
  'TEXT_CALENDAR' |
  'TEXT_CSS' |
  'TEXT_CSV' |
  'TEXT_PLAIN' |
  'TEXT_RICHTEXT' |
  'TEXT_TAB_SEPARATED_VALUES' |
  'TEXT_VTT' |
  'VIDEO_3GPP' |
  'VIDEO_3GPP2' |
  'VIDEO_AVI' |
  'VIDEO_DIVX' |
  'VIDEO_MP4' |
  'VIDEO_MPEG' |
  'VIDEO_OGG' |
  'VIDEO_QUICKTIME' |
  'VIDEO_WEBM' |
  'VIDEO_X_FLV' |
  'VIDEO_X_MATROSKA' |
  'VIDEO_X_MS_ASF' |
  'VIDEO_X_MS_WM' |
  'VIDEO_X_MS_WMV' |
  'VIDEO_X_MS_WMX';

/** An object with an ID */
export type WpGraphQl_Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** A node that can have an author assigned to it */
export type WpGraphQl_NodeWithAuthor = {
  /** The author field will return a queryable User type matching the post's author. */
  author?: Maybe<WpGraphQl_User>;
};

/** A node that can have comments associated with it */
export type WpGraphQl_NodeWithComments = {
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
};

/** A node that supports the content editor */
export type WpGraphQl_NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
};


/** A node that supports the content editor */
export type WpGraphQl_NodeWithContentEditorContentArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};

/** A node that can have an excerpt */
export type WpGraphQl_NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
};


/** A node that can have an excerpt */
export type WpGraphQl_NodeWithExcerptExcerptArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};

/** A node that can have a featured image set */
export type WpGraphQl_NodeWithFeaturedImage = {
  /** The featured image for the object */
  featuredImage?: Maybe<WpGraphQl_MediaItem>;
};

/** A node that can have page attributes */
export type WpGraphQl_NodeWithPageAttributes = {
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
};

/** A node that can have revisions */
export type WpGraphQl_NodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /**
   * If the current node is a revision, this field exposes the node this is a
   * revision of. Returns null if the node is not a revision of another node.
   */
  revisionOf?: Maybe<WpGraphQl_PostObjectUnion>;
};

/** A node that NodeWith a title */
export type WpGraphQl_NodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};


/** A node that NodeWith a title */
export type WpGraphQl_NodeWithTitleTitleArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type WpGraphQl_NodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The cardinality of the connection order */
export type WpGraphQl_OrderEnum = 
  'ASC' |
  'DESC';

/** The page type */
export type WpGraphQl_Page = WpGraphQl_Node & WpGraphQl_ContentNode & WpGraphQl_UniformResourceIdentifiable & WpGraphQl_NodeWithTitle & WpGraphQl_NodeWithContentEditor & WpGraphQl_NodeWithAuthor & WpGraphQl_NodeWithFeaturedImage & WpGraphQl_NodeWithComments & WpGraphQl_NodeWithRevisions & WpGraphQl_NodeWithPageAttributes & WpGraphQl_HierarchicalContentNode & {
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<WpGraphQl_User>;
  /** Connection between the page type and the page type */
  childPages?: Maybe<WpGraphQl_PageToPageConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  comments?: Maybe<WpGraphQl_PageToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the page type and the ContentType type */
  contentType?: Maybe<WpGraphQl_PageToContentTypeConnection>;
  /** The ID of the object in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  editLast?: Maybe<WpGraphQl_User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return
   * the user and the time they last edited. Null if the edit lock doesn&#039;t
   * exist or is greater than 15 seconds
   */
  editLock?: Maybe<WpGraphQl_EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The featured image for the object */
  featuredImage?: Maybe<WpGraphQl_MediaItem>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the page object. */
  id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  pageId: Scalars['Int'];
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<WpGraphQl_PostObjectUnion>;
  /**
   * If the current node is a revision, this field exposes the node this is a
   * revision of. Returns null if the node is not a revision of another node.
   */
  revisionOf?: Maybe<WpGraphQl_PostObjectUnion>;
  /** Connection between the page type and the page type */
  revisions?: Maybe<WpGraphQl_PageToRevisionConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
};


/** The page type */
export type WpGraphQl_PageChildPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_PageToPageConnectionWhereArgs>;
};


/** The page type */
export type WpGraphQl_PageCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_PageToCommentConnectionWhereArgs>;
};


/** The page type */
export type WpGraphQl_PageContentArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};


/** The page type */
export type WpGraphQl_PageRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_PageToRevisionConnectionWhereArgs>;
};


/** The page type */
export type WpGraphQl_PageTitleArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type WpGraphQl_PageIdType = 
  /** Identify a resource by the Database ID. */
  'DATABASE_ID' |
  /** Identify a resource by the (hashed) Global ID. */
  'ID' |
  /** Identify a resource by the URI. */
  'URI';

/** Connection between the page type and the Comment type */
export type WpGraphQl_PageToCommentConnection = {
  /** Edges for the PageToCommentConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_PageToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_PageToCommentConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Comment>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type WpGraphQl_PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpGraphQl_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpGraphQl_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the page type and the ContentType type */
export type WpGraphQl_PageToContentTypeConnection = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpGraphQl_ContentType>;
};

/** Connection between the page type and the page type */
export type WpGraphQl_PageToPageConnection = {
  /** Edges for the PageToPageConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_PageToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_PageToPageConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Page>;
};

/** Arguments for filtering the PageToPageConnection connection */
export type WpGraphQl_PageToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the page type and the page type */
export type WpGraphQl_PageToRevisionConnection = {
  /** Edges for the pageToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_PageToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_PageToRevisionConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Page>;
};

/** Arguments for filtering the pageToRevisionConnection connection */
export type WpGraphQl_PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** An plugin object */
export type WpGraphQl_Plugin = WpGraphQl_Node & {
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<Scalars['String']>;
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<Scalars['String']>;
  /** Description of the plugin. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the plugin object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the plugin. */
  name?: Maybe<Scalars['String']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<Scalars['String']>;
  /** Current version of the plugin. */
  version?: Maybe<Scalars['String']>;
};

/** The post type */
export type WpGraphQl_Post = WpGraphQl_Node & WpGraphQl_ContentNode & WpGraphQl_UniformResourceIdentifiable & WpGraphQl_NodeWithTitle & WpGraphQl_NodeWithContentEditor & WpGraphQl_NodeWithAuthor & WpGraphQl_NodeWithFeaturedImage & WpGraphQl_NodeWithExcerpt & WpGraphQl_NodeWithComments & WpGraphQl_NodeWithTrackbacks & WpGraphQl_NodeWithRevisions & {
  /** The author field will return a queryable User type matching the post&#039;s author. */
  author?: Maybe<WpGraphQl_User>;
  /** Connection between the post type and the category type */
  categories?: Maybe<WpGraphQl_PostToCategoryConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for compatibility.
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  comments?: Maybe<WpGraphQl_PostToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the post type and the ContentType type */
  contentType?: Maybe<WpGraphQl_PostToContentTypeConnection>;
  /** The ID of the object in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The user that most recently edited the object */
  editLast?: Maybe<WpGraphQl_User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return
   * the user and the time they last edited. Null if the edit lock doesn&#039;t
   * exist or is greater than 15 seconds
   */
  editLock?: Maybe<WpGraphQl_EditLock>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** The featured image for the object */
  featuredImage?: Maybe<WpGraphQl_MediaItem>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the post object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the post type and the postFormat type */
  postFormats?: Maybe<WpGraphQl_PostToPostFormatConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  postId: Scalars['Int'];
  /**
   * If the current node is a revision, this field exposes the node this is a
   * revision of. Returns null if the node is not a revision of another node.
   */
  revisionOf?: Maybe<WpGraphQl_PostObjectUnion>;
  /** Connection between the post type and the post type */
  revisions?: Maybe<WpGraphQl_PostToRevisionConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the post type and the tag type */
  tags?: Maybe<WpGraphQl_PostToTagConnection>;
  /** Terms connected to the object */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Terms connected to the object */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Terms connected to the object */
  terms?: Maybe<Array<Maybe<WpGraphQl_TermObjectUnion>>>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  uri: Scalars['String'];
};


/** The post type */
export type WpGraphQl_PostCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_PostToCategoryConnectionWhereArgs>;
};


/** The post type */
export type WpGraphQl_PostCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_PostToCommentConnectionWhereArgs>;
};


/** The post type */
export type WpGraphQl_PostContentArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};


/** The post type */
export type WpGraphQl_PostExcerptArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};


/** The post type */
export type WpGraphQl_PostPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_PostToPostFormatConnectionWhereArgs>;
};


/** The post type */
export type WpGraphQl_PostRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_PostToRevisionConnectionWhereArgs>;
};


/** The post type */
export type WpGraphQl_PostTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_PostToTagConnectionWhereArgs>;
};


/** The post type */
export type WpGraphQl_PostTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<WpGraphQl_TaxonomyEnum>>>;
};


/** The post type */
export type WpGraphQl_PostTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<WpGraphQl_TaxonomyEnum>>>;
};


/** The post type */
export type WpGraphQl_PostTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<WpGraphQl_TaxonomyEnum>>>;
};


/** The post type */
export type WpGraphQl_PostTitleArgs = {
  format?: Maybe<WpGraphQl_PostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type WpGraphQl_PostCategoriesInput = {
  /**
   * If true, this will append the category to existing related categories. If
   * false, this will replace existing relationships. Default true.
   */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<WpGraphQl_PostCategoriesNodeInput>>>;
};

/**
 * List of categories to connect the post to. If an ID is set, it will be used to
 * create the connection. If not, it will look for a slug. If neither are valid
 * existing terms, and the site is configured to allow terms to be created during
 * post mutations, a term will be created using the Name if it exists in the input,
 * then fallback to the slug if it exists.
 */
export type WpGraphQl_PostCategoriesNodeInput = {
  /**
   * The description of the category. This field is used to set a description of
   * the category if a new one is created during the mutation.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The ID of the category. If present, this will be used to connect to the post.
   * If no existing category exists with this ID, no connection will be made.
   */
  id?: Maybe<Scalars['ID']>;
  /**
   * The name of the category. This field is used to create a new term, if term
   * creation is enabled in nested mutations, and if one does not already exist
   * with the provided slug or ID or if a slug or ID is not provided. If no name is
   * included and a term is created, the creation will fallback to the slug field.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The slug of the category. If no ID is present, this field will be used to make
   * a connection. If no existing term exists with this slug, this field will be
   * used as a fallback to the Name field when creating a new term to connect to,
   * if term creation is enabled as a nested mutation.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The postFormat type */
export type WpGraphQl_PostFormat = WpGraphQl_Node & WpGraphQl_TermNode & WpGraphQl_UniformResourceIdentifiable & {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  postFormatId?: Maybe<Scalars['Int']>;
  /** Connection between the postFormat type and the post type */
  posts?: Maybe<WpGraphQl_PostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the Taxonomy type */
  taxonomy?: Maybe<WpGraphQl_PostFormatToTaxonomyConnection>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
};


/** The postFormat type */
export type WpGraphQl_PostFormatPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_PostFormatToPostConnectionWhereArgs>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type WpGraphQl_PostFormatIdType = 
  /** The Database ID for the node */
  'DATABASE_ID' |
  /** The hashed Global ID */
  'ID' |
  /** The name of the node */
  'NAME' |
  /** Url friendly name of the node */
  'SLUG' |
  /** The URI for the node */
  'URI';

/** Connection between the postFormat type and the post type */
export type WpGraphQl_PostFormatToPostConnection = {
  /** Edges for the PostFormatToPostConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_PostFormatToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_PostFormatToPostConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Post>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type WpGraphQl_PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type WpGraphQl_PostFormatToTaxonomyConnection = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpGraphQl_Taxonomy>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type WpGraphQl_PostIdType = 
  /** Identify a resource by the Database ID. */
  'DATABASE_ID' |
  /** Identify a resource by the (hashed) Global ID. */
  'ID' |
  /** Identify a resource by the URI. */
  'URI' |
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  'SLUG';

/** The format of post field data. */
export type WpGraphQl_PostObjectFieldFormatEnum = 
  /** Provide the field value directly from database */
  'RAW' |
  /** Apply the default WordPress rendering */
  'RENDERED';

/** The column to use when filtering by date */
export type WpGraphQl_PostObjectsConnectionDateColumnEnum = 
  'DATE' |
  'MODIFIED';

/** Field to order the connection by */
export type WpGraphQl_PostObjectsConnectionOrderbyEnum = 
  /** Order by author */
  'AUTHOR' |
  /** Order by publish date */
  'DATE' |
  /** Preserve the ID order given in the IN array */
  'IN' |
  /** Order by the menu order value */
  'MENU_ORDER' |
  /** Order by last modified date */
  'MODIFIED' |
  /** Preserve slug order given in the NAME_IN array */
  'NAME_IN' |
  /** Order by parent ID */
  'PARENT' |
  /** Order by slug */
  'SLUG' |
  /** Order by title */
  'TITLE';

/** Options for ordering the connection */
export type WpGraphQl_PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: WpGraphQl_PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: WpGraphQl_OrderEnum;
};

export type WpGraphQl_PostObjectUnion = WpGraphQl_Post | WpGraphQl_Page | WpGraphQl_MediaItem;

/** Set relationships between the post to postFormats */
export type WpGraphQl_PostPostFormatsInput = {
  /**
   * If true, this will append the postFormat to existing related postFormats. If
   * false, this will replace existing relationships. Default true.
   */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<WpGraphQl_PostPostFormatsNodeInput>>>;
};

/**
 * List of postFormats to connect the post to. If an ID is set, it will be used to
 * create the connection. If not, it will look for a slug. If neither are valid
 * existing terms, and the site is configured to allow terms to be created during
 * post mutations, a term will be created using the Name if it exists in the input,
 * then fallback to the slug if it exists.
 */
export type WpGraphQl_PostPostFormatsNodeInput = {
  /**
   * The description of the postFormat. This field is used to set a description of
   * the postFormat if a new one is created during the mutation.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The ID of the postFormat. If present, this will be used to connect to the
   * post. If no existing postFormat exists with this ID, no connection will be made.
   */
  id?: Maybe<Scalars['ID']>;
  /**
   * The name of the postFormat. This field is used to create a new term, if term
   * creation is enabled in nested mutations, and if one does not already exist
   * with the provided slug or ID or if a slug or ID is not provided. If no name is
   * included and a term is created, the creation will fallback to the slug field.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The slug of the postFormat. If no ID is present, this field will be used to
   * make a connection. If no existing term exists with this slug, this field will
   * be used as a fallback to the Name field when creating a new term to connect
   * to, if term creation is enabled as a nested mutation.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The status of the object. */
export type WpGraphQl_PostStatusEnum = 
  /** Objects with the auto-draft status */
  'AUTO_DRAFT' |
  /** Objects with the draft status */
  'DRAFT' |
  /** Objects with the future status */
  'FUTURE' |
  /** Objects with the inherit status */
  'INHERIT' |
  /** Objects with the pending status */
  'PENDING' |
  /** Objects with the private status */
  'PRIVATE' |
  /** Objects with the publish status */
  'PUBLISH' |
  /** Objects with the request-completed status */
  'REQUEST_COMPLETED' |
  /** Objects with the request-confirmed status */
  'REQUEST_CONFIRMED' |
  /** Objects with the request-failed status */
  'REQUEST_FAILED' |
  /** Objects with the request-pending status */
  'REQUEST_PENDING' |
  /** Objects with the trash status */
  'TRASH';

/** Set relationships between the post to tags */
export type WpGraphQl_PostTagsInput = {
  /**
   * If true, this will append the tag to existing related tags. If false, this
   * will replace existing relationships. Default true.
   */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<WpGraphQl_PostTagsNodeInput>>>;
};

/**
 * List of tags to connect the post to. If an ID is set, it will be used to create
 * the connection. If not, it will look for a slug. If neither are valid existing
 * terms, and the site is configured to allow terms to be created during post
 * mutations, a term will be created using the Name if it exists in the input, then
 * fallback to the slug if it exists.
 */
export type WpGraphQl_PostTagsNodeInput = {
  /**
   * The description of the tag. This field is used to set a description of the tag
   * if a new one is created during the mutation.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The ID of the tag. If present, this will be used to connect to the post. If no
   * existing tag exists with this ID, no connection will be made.
   */
  id?: Maybe<Scalars['ID']>;
  /**
   * The name of the tag. This field is used to create a new term, if term creation
   * is enabled in nested mutations, and if one does not already exist with the
   * provided slug or ID or if a slug or ID is not provided. If no name is included
   * and a term is created, the creation will fallback to the slug field.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The slug of the tag. If no ID is present, this field will be used to make a
   * connection. If no existing term exists with this slug, this field will be used
   * as a fallback to the Name field when creating a new term to connect to, if
   * term creation is enabled as a nested mutation.
   */
  slug?: Maybe<Scalars['String']>;
};

/** Connection between the post type and the category type */
export type WpGraphQl_PostToCategoryConnection = {
  /** Edges for the PostToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_PostToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_PostToCategoryConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Category>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type WpGraphQl_PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<WpGraphQl_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /**
   * Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /**
   * Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the Comment type */
export type WpGraphQl_PostToCommentConnection = {
  /** Edges for the PostToCommentConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_PostToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_PostToCommentConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Comment>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type WpGraphQl_PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpGraphQl_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpGraphQl_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the post type and the ContentType type */
export type WpGraphQl_PostToContentTypeConnection = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpGraphQl_ContentType>;
};

/** Connection between the post type and the postFormat type */
export type WpGraphQl_PostToPostFormatConnection = {
  /** Edges for the PostToPostFormatConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_PostToPostFormatConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_PostFormat>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_PostToPostFormatConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_PostFormat>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type WpGraphQl_PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<WpGraphQl_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /**
   * Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /**
   * Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type WpGraphQl_PostToRevisionConnection = {
  /** Edges for the postToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_PostToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_PostToRevisionConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Post>;
};

/** Arguments for filtering the postToRevisionConnection connection */
export type WpGraphQl_PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the post type and the tag type */
export type WpGraphQl_PostToTagConnection = {
  /** Edges for the PostToTagConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_PostToTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Tag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_PostToTagConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Tag>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type WpGraphQl_PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<WpGraphQl_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /**
   * Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /**
   * Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Details for labels of the PostType */
export type WpGraphQl_PostTypeLabelDetails = {
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

/** The reading setting type */
export type WpGraphQl_ReadingSettings = {
  /** 1ページに表示する最大投稿数 */
  postsPerPage?: Maybe<Scalars['Int']>;
};

/** Input for the registerUser mutation */
export type WpGraphQl_RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /**
   * A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the registerUser mutation */
export type WpGraphQl_RegisterUserPayload = {
  clientMutationId: Scalars['String'];
  user?: Maybe<WpGraphQl_User>;
};

/** The logical relation between each item in the array when there are more than one. */
export type WpGraphQl_RelationEnum = 
  'AND' |
  'OR';

/** Input for the resetUserPassword mutation */
export type WpGraphQl_ResetUserPasswordInput = {
  clientMutationId: Scalars['String'];
  /** Password reset key */
  key?: Maybe<Scalars['String']>;
  /** The user's login (username). */
  login?: Maybe<Scalars['String']>;
  /** The new password. */
  password?: Maybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation */
export type WpGraphQl_ResetUserPasswordPayload = {
  clientMutationId: Scalars['String'];
  user?: Maybe<WpGraphQl_User>;
};

/** Input for the restoreComment mutation */
export type WpGraphQl_RestoreCommentInput = {
  clientMutationId: Scalars['String'];
  /** The ID of the comment to be restored */
  id: Scalars['ID'];
};

/** The payload for the restoreComment mutation */
export type WpGraphQl_RestoreCommentPayload = {
  clientMutationId: Scalars['String'];
  /** The restored comment object */
  comment?: Maybe<WpGraphQl_Comment>;
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the category type */
export type WpGraphQl_RootQueryToCategoryConnection = {
  /** Edges for the RootQueryToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToCategoryConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Category>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type WpGraphQl_RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<WpGraphQl_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /**
   * Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /**
   * Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Comment type */
export type WpGraphQl_RootQueryToCommentConnection = {
  /** Edges for the RootQueryToCommentConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToCommentConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Comment>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type WpGraphQl_RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpGraphQl_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpGraphQl_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type WpGraphQl_RootQueryToContentNodeConnection = {
  /** Edges for the RootQueryToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToContentNodeConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_ContentNode>;
};

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type WpGraphQl_RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export type WpGraphQl_RootQueryToContentRevisionUnionConnection = {
  /** Edges for the RootQueryToContentRevisionUnionConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToContentRevisionUnionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_ContentRevisionUnion>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToContentRevisionUnionConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_ContentRevisionUnion>;
};

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export type WpGraphQl_RootQueryToContentRevisionUnionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentType type */
export type WpGraphQl_RootQueryToContentTypeConnection = {
  /** Edges for the RootQueryToContentTypeConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToContentTypeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_ContentType>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToContentTypeConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_ContentType>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type WpGraphQl_RootQueryToMediaItemConnection = {
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_MediaItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToMediaItemConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_MediaItem>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type WpGraphQl_RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type WpGraphQl_RootQueryToMenuConnection = {
  /** Edges for the RootQueryToMenuConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToMenuConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Menu>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToMenuConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Menu>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type WpGraphQl_RootQueryToMenuConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<WpGraphQl_MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type WpGraphQl_RootQueryToMenuItemConnection = {
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_MenuItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToMenuItemConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_MenuItem>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type WpGraphQl_RootQueryToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<WpGraphQl_MenuLocationEnum>;
};

/** Connection between the RootQuery type and the page type */
export type WpGraphQl_RootQueryToPageConnection = {
  /** Edges for the RootQueryToPageConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToPageConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Page>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type WpGraphQl_RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type WpGraphQl_RootQueryToPluginConnection = {
  /** Edges for the RootQueryToPluginConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToPluginConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Plugin>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToPluginConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Plugin>;
};

/** Connection between the RootQuery type and the post type */
export type WpGraphQl_RootQueryToPostConnection = {
  /** Edges for the RootQueryToPostConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToPostConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Post>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type WpGraphQl_RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type WpGraphQl_RootQueryToPostFormatConnection = {
  /** Edges for the RootQueryToPostFormatConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToPostFormatConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_PostFormat>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToPostFormatConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_PostFormat>;
};

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type WpGraphQl_RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<WpGraphQl_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /**
   * Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /**
   * Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the tag type */
export type WpGraphQl_RootQueryToTagConnection = {
  /** Edges for the RootQueryToTagConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Tag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToTagConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Tag>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type WpGraphQl_RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<WpGraphQl_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /**
   * Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /**
   * Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type WpGraphQl_RootQueryToTaxonomyConnection = {
  /** Edges for the RootQueryToTaxonomyConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToTaxonomyConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Taxonomy>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToTaxonomyConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Taxonomy>;
};

/** Connection between the RootQuery type and the TermNode type */
export type WpGraphQl_RootQueryToTermNodeConnection = {
  /** Edges for the RootQueryToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToTermNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_TermNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToTermNodeConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_TermNode>;
};

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type WpGraphQl_RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<WpGraphQl_TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /**
   * Default false. If true, only the items connected to the source item will be
   * returned. If false, all items will be returned regardless of connection to the source
   */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /**
   * Default false. If true, the connection will be output in a flat list instead
   * of the hierarchical list. So child terms will be output in the same level as
   * the parent terms
   */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: Maybe<Array<Maybe<WpGraphQl_TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the Theme type */
export type WpGraphQl_RootQueryToThemeConnection = {
  /** Edges for the RootQueryToThemeConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToThemeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Theme>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToThemeConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Theme>;
};

/** Connection between the RootQuery type and the User type */
export type WpGraphQl_RootQueryToUserConnection = {
  /** Edges for the RootQueryToUserConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToUserConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_User>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToUserConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_User>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type WpGraphQl_RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The user login. */
  login?: Maybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: Maybe<Scalars['Int']>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: Maybe<Scalars['Int']>;
  /** The user nicename. */
  nicename?: Maybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_UsersConnectionOrderbyInput>>>;
  /**
   * An array of role names that users must match to be included in results. Note
   * that this is an inclusive list: users must match *each* role.
   */
  role?: Maybe<WpGraphQl_UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<Array<Maybe<WpGraphQl_UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<Array<Maybe<WpGraphQl_UserRoleEnum>>>;
  /**
   * Search keyword. Searches for possible string matches on columns. When
   * "searchColumns" is left empty, it tries to determine which column to search in
   * based on search string.
   */
  search?: Maybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Connection between the RootQuery type and the UserRole type */
export type WpGraphQl_RootQueryToUserRoleConnection = {
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_RootQueryToUserRoleConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_UserRole>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_RootQueryToUserRoleConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_UserRole>;
};

/** Input for the sendPasswordResetEmail mutation */
export type WpGraphQl_SendPasswordResetEmailInput = {
  clientMutationId: Scalars['String'];
  /** A string that contains the user's username or email address. */
  username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation */
export type WpGraphQl_SendPasswordResetEmailPayload = {
  clientMutationId: Scalars['String'];
  /** The user that the password reset email was sent to */
  user?: Maybe<WpGraphQl_User>;
};

/** All of the registered settings */
export type WpGraphQl_Settings = {
  /** 新しい投稿へのコメントを許可する。 */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** 新しい記事に対し他のブログからの通知 (ピンバック・トラックバック) を受け付ける。 */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** 日付文字列の書式。 */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** サイトのキャッチフレーズ。 */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** このアドレスは新規ユーザーの通知などサイト管理のために使われます。 */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** WordPress のロケールコード。 */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** 週の始まりの曜日番号。 */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** 時刻文字列の書式。 */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** 現在地と同じタイムゾーンの都市 */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** サイト名 */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** サイト URL。 */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** 1ページに表示する最大投稿数 */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** デフォルトの投稿カテゴリー。 */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** デフォルトの投稿フォーマット。 */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** :-) や :-P などの顔文字を絵文字に変換します。 */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The tag type */
export type WpGraphQl_Tag = WpGraphQl_Node & WpGraphQl_TermNode & WpGraphQl_UniformResourceIdentifiable & {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the post type */
  posts?: Maybe<WpGraphQl_TagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  tagId?: Maybe<Scalars['Int']>;
  /** Connection between the tag type and the Taxonomy type */
  taxonomy?: Maybe<WpGraphQl_TagToTaxonomyConnection>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
};


/** The tag type */
export type WpGraphQl_TagPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_TagToPostConnectionWhereArgs>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type WpGraphQl_TagIdType = 
  /** The Database ID for the node */
  'DATABASE_ID' |
  /** The hashed Global ID */
  'ID' |
  /** The name of the node */
  'NAME' |
  /** Url friendly name of the node */
  'SLUG' |
  /** The URI for the node */
  'URI';

/** Connection between the tag type and the post type */
export type WpGraphQl_TagToPostConnection = {
  /** Edges for the TagToPostConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_TagToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_TagToPostConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Post>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type WpGraphQl_TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the Taxonomy type */
export type WpGraphQl_TagToTaxonomyConnection = {
  /** The nodes of the connection, without the edges */
  node?: Maybe<WpGraphQl_Taxonomy>;
};

/** A taxonomy object */
export type WpGraphQl_Taxonomy = WpGraphQl_Node & {
  /** A list of Post Types associated with the taxonomy */
  connectedPostTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of Post Types connected to the Taxonomy */
  connectedPostTypes?: Maybe<Array<Maybe<WpGraphQl_ContentType>>>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the taxonomy object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
};


/** A taxonomy object */
export type WpGraphQl_TaxonomyConnectedPostTypeNamesArgs = {
  types?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
};


/** A taxonomy object */
export type WpGraphQl_TaxonomyConnectedPostTypesArgs = {
  types?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
};

/** Allowed taxonomies */
export type WpGraphQl_TaxonomyEnum = 
  'CATEGORY' |
  'POSTFORMAT' |
  'TAG';

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export type WpGraphQl_TaxonomyIdTypeEnum = 
  /** The globally unique ID */
  'ID' |
  /** The name of the taxonomy */
  'NAME';

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type WpGraphQl_TermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the term */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
};

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export type WpGraphQl_TermNodeIdTypeEnum = 
  /** The Database ID for the node */
  'DATABASE_ID' |
  /** The hashed Global ID */
  'ID' |
  /** The name of the node */
  'NAME' |
  /** Url friendly name of the node */
  'SLUG' |
  /** The URI for the node */
  'URI';

/** Options for ordering the connection by */
export type WpGraphQl_TermObjectsConnectionOrderbyEnum = 
  'COUNT' |
  'DESCRIPTION' |
  'NAME' |
  'SLUG' |
  'TERM_GROUP' |
  'TERM_ID' |
  'TERM_ORDER';

export type WpGraphQl_TermObjectUnion = WpGraphQl_Category | WpGraphQl_Tag | WpGraphQl_PostFormat;

/** A theme object */
export type WpGraphQl_Theme = WpGraphQl_Node & {
  /**
   * Name of the theme author(s), could also be a company name. This field is
   * equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
   */
  author?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri?: Maybe<Scalars['String']>;
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the theme object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name?: Maybe<Scalars['String']>;
  /**
   * The URL of the screenshot for the theme. The screenshot is intended to give an
   * overview of what the theme looks like. This field is equivalent to
   * WP_Theme-&gt;get_screenshot().
   */
  screenshot?: Maybe<Scalars['String']>;
  /**
   * The theme slug is used to internally match themes. Theme slugs can have
   * subdirectories like: my-theme/sub-theme. This field is equivalent to
   * WP_Theme-&gt;get_stylesheet().
   */
  slug?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * A URI if the theme has a website associated with it. The Theme URI is handy
   * for directing users to a theme site for support etc. This field is equivalent
   * to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
   */
  themeUri?: Maybe<Scalars['String']>;
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version?: Maybe<Scalars['Float']>;
};

/** Any node that has a URI */
export type WpGraphQl_UniformResourceIdentifiable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri: Scalars['String'];
};

/** Input for the UpdateCategory mutation */
export type WpGraphQl_UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category object to update */
  id: Scalars['ID'];
  /** The name of the category object to mutate */
  name?: Maybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateCategory mutation */
export type WpGraphQl_UpdateCategoryPayload = {
  /** The created category */
  category?: Maybe<WpGraphQl_Category>;
  clientMutationId: Scalars['String'];
};

/** Input for the updateComment mutation */
export type WpGraphQl_UpdateCommentInput = {
  /** User agent used to post the comment. */
  agent?: Maybe<Scalars['String']>;
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** IP address for the comment's author. */
  authorIp?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day ( e.g.
   * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17 
   */
  date?: Maybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID'];
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
  /** The userID of the comment's author. */
  userId?: Maybe<Scalars['Int']>;
};

/** The payload for the updateComment mutation */
export type WpGraphQl_UpdateCommentPayload = {
  clientMutationId: Scalars['String'];
  /** The comment that was created */
  comment?: Maybe<WpGraphQl_Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server
   * will not return the comment to a non authenticated user, but a success message
   * can be returned if the create succeeded, and the client can optimistically add
   * the comment to the client cache
   */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the updateMediaItem mutation */
export type WpGraphQl_UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID'];
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<WpGraphQl_MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation */
export type WpGraphQl_UpdateMediaItemPayload = {
  clientMutationId: Scalars['String'];
  mediaItem?: Maybe<WpGraphQl_MediaItem>;
};

/** Input for the updatePage mutation */
export type WpGraphQl_UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId: Scalars['String'];
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17 
   */
  date?: Maybe<Scalars['String']>;
  /** The ID of the page object */
  id: Scalars['ID'];
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updatePage mutation */
export type WpGraphQl_UpdatePagePayload = {
  clientMutationId: Scalars['String'];
  page?: Maybe<WpGraphQl_Page>;
};

/** Input for the UpdatePostFormat mutation */
export type WpGraphQl_UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  name?: Maybe<Scalars['String']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePostFormat mutation */
export type WpGraphQl_UpdatePostFormatPayload = {
  clientMutationId: Scalars['String'];
  /** The created post_format */
  postFormat?: Maybe<WpGraphQl_PostFormat>;
};

/** Input for the updatePost mutation */
export type WpGraphQl_UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<WpGraphQl_PostCategoriesInput>;
  clientMutationId: Scalars['String'];
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17 
   */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** The ID of the post object */
  id: Scalars['ID'];
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<WpGraphQl_PostPostFormatsInput>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<WpGraphQl_PostTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation */
export type WpGraphQl_UpdatePostPayload = {
  clientMutationId: Scalars['String'];
  post?: Maybe<WpGraphQl_Post>;
};

/** Input for the updateSettings mutation */
export type WpGraphQl_UpdateSettingsInput = {
  clientMutationId: Scalars['String'];
  /** 新しい投稿へのコメントを許可する。 */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** 新しい記事に対し他のブログからの通知 (ピンバック・トラックバック) を受け付ける。 */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** 日付文字列の書式。 */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** サイトのキャッチフレーズ。 */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** このアドレスは新規ユーザーの通知などサイト管理のために使われます。 */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** WordPress のロケールコード。 */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** 週の始まりの曜日番号。 */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** 時刻文字列の書式。 */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** 現在地と同じタイムゾーンの都市 */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** サイト名 */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** サイト URL。 */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** 1ページに表示する最大投稿数 */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** デフォルトの投稿カテゴリー。 */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** デフォルトの投稿フォーマット。 */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** :-) や :-P などの顔文字を絵文字に変換します。 */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation */
export type WpGraphQl_UpdateSettingsPayload = {
  allSettings?: Maybe<WpGraphQl_Settings>;
  clientMutationId: Scalars['String'];
  discussionSettings?: Maybe<WpGraphQl_DiscussionSettings>;
  generalSettings?: Maybe<WpGraphQl_GeneralSettings>;
  readingSettings?: Maybe<WpGraphQl_ReadingSettings>;
  writingSettings?: Maybe<WpGraphQl_WritingSettings>;
};

/** Input for the UpdateTag mutation */
export type WpGraphQl_UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag object to update */
  id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  name?: Maybe<Scalars['String']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term name.
   */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateTag mutation */
export type WpGraphQl_UpdateTagPayload = {
  clientMutationId: Scalars['String'];
  /** The created post_tag */
  tag?: Maybe<WpGraphQl_Tag>;
};

/** Input for the updateUser mutation */
export type WpGraphQl_UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId: Scalars['String'];
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /**
   * A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the updateUser mutation */
export type WpGraphQl_UpdateUserPayload = {
  clientMutationId: Scalars['String'];
  user?: Maybe<WpGraphQl_User>;
};

/** A User object */
export type WpGraphQl_User = WpGraphQl_Node & WpGraphQl_UniformResourceIdentifiable & {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpGraphQl_Avatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<WpGraphQl_UserToCommentConnection>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /**
   * A complete list of capabilities including capabilities inherited from a role.
   * This is equivalent to the array keys of WP_User-&gt;allcaps.
   */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Connection between the User type and the mediaItem type */
  mediaItems?: Maybe<WpGraphQl_UserToMediaItemConnection>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<WpGraphQl_UserToPageConnection>;
  /** Connection between the User type and the post type */
  posts?: Maybe<WpGraphQl_UserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User and Revisions authored by the user */
  revisions?: Maybe<WpGraphQl_UserToContentRevisionUnionConnection>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<WpGraphQl_UserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /** The Id of the user. Equivalent to WP_User-&gt;ID */
  userId?: Maybe<Scalars['Int']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
};


/** A User object */
export type WpGraphQl_UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
  forceDefault?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<WpGraphQl_AvatarRatingEnum>;
};


/** A User object */
export type WpGraphQl_UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_UserToCommentConnectionWhereArgs>;
};


/** A User object */
export type WpGraphQl_UserMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_UserToMediaItemConnectionWhereArgs>;
};


/** A User object */
export type WpGraphQl_UserPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_UserToPageConnectionWhereArgs>;
};


/** A User object */
export type WpGraphQl_UserPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_UserToPostConnectionWhereArgs>;
};


/** A User object */
export type WpGraphQl_UserRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<WpGraphQl_UserToContentRevisionUnionConnectionWhereArgs>;
};


/** A User object */
export type WpGraphQl_UserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export type WpGraphQl_UserNodeIdTypeEnum = 
  /** The Database ID for the node */
  'DATABASE_ID' |
  /** The Email of the User */
  'EMAIL' |
  /** The hashed Global ID */
  'ID' |
  /** The slug of the User */
  'SLUG' |
  /** The URI for the node */
  'URI' |
  /** The username the User uses to login with */
  'USERNAME';

/** A user role object */
export type WpGraphQl_UserRole = WpGraphQl_Node & {
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user role object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
};

/** Names of available user roles */
export type WpGraphQl_UserRoleEnum = 
  'ADMINISTRATOR' |
  'AUTHOR' |
  'CONTRIBUTOR' |
  'EDITOR' |
  'SUBSCRIBER';

/** Field to order the connection by */
export type WpGraphQl_UsersConnectionOrderbyEnum = 
  /** Order by display name */
  'DISPLAY_NAME' |
  /** Order by email address */
  'EMAIL' |
  /** Order by login */
  'LOGIN' |
  /** Preserve the login order given in the LOGIN_IN array */
  'LOGIN_IN' |
  /** Order by nice name */
  'NICE_NAME' |
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  'NICE_NAME_IN' |
  /** Order by registration date */
  'REGISTERED' |
  /** Order by URL */
  'URL';

/** Options for ordering the connection */
export type WpGraphQl_UsersConnectionOrderbyInput = {
  field: WpGraphQl_UsersConnectionOrderbyEnum;
  order?: Maybe<WpGraphQl_OrderEnum>;
};

/** Connection between the User type and the Comment type */
export type WpGraphQl_UserToCommentConnection = {
  /** Edges for the UserToCommentConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_UserToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_UserToCommentConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Comment>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type WpGraphQl_UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<WpGraphQl_ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<WpGraphQl_OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<WpGraphQl_CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the User type and the ContentRevisionUnion type */
export type WpGraphQl_UserToContentRevisionUnionConnection = {
  /** Edges for the UserToContentRevisionUnionConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_UserToContentRevisionUnionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_ContentRevisionUnion>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_UserToContentRevisionUnionConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_ContentRevisionUnion>;
};

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export type WpGraphQl_UserToContentRevisionUnionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the mediaItem type */
export type WpGraphQl_UserToMediaItemConnection = {
  /** Edges for the UserToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_UserToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_MediaItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_UserToMediaItemConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_MediaItem>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type WpGraphQl_UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type WpGraphQl_UserToPageConnection = {
  /** Edges for the UserToPageConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_UserToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_UserToPageConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Page>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type WpGraphQl_UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type WpGraphQl_UserToPostConnection = {
  /** Edges for the UserToPostConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_UserToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_UserToPostConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_Post>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type WpGraphQl_UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<WpGraphQl_DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<WpGraphQl_MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<WpGraphQl_PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<WpGraphQl_PostStatusEnum>>>;
  status?: Maybe<WpGraphQl_PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the UserRole type */
export type WpGraphQl_UserToUserRoleConnection = {
  /** Edges for the UserToUserRoleConnection connection */
  edges?: Maybe<Array<Maybe<WpGraphQl_UserToUserRoleConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpGraphQl_UserRole>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpGraphQl_WpPageInfo>;
};

/** An edge in a connection */
export type WpGraphQl_UserToUserRoleConnectionEdge = {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<WpGraphQl_UserRole>;
};

/** Information about pagination in a connection. */
export type WpGraphQl_WpPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The writing setting type */
export type WpGraphQl_WritingSettings = {
  /** デフォルトの投稿カテゴリー。 */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** デフォルトの投稿フォーマット。 */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** :-) や :-P などの顔文字を絵文字に変換します。 */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type HeadQueryVariables = {};


export type HeadQuery = { wpgraphql: { generalSettings?: Maybe<Pick<WpGraphQl_GeneralSettings, 'title' | 'description' | 'language'>>, users?: Maybe<{ nodes?: Maybe<Array<Maybe<Pick<WpGraphQl_User, 'slug'>>>> }> } };

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { placeholderImage?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type LayoutQueryVariables = {};


export type LayoutQuery = { wpgraphql: { generalSettings?: Maybe<Pick<WpGraphQl_GeneralSettings, 'title' | 'description'>>, users?: Maybe<{ nodes?: Maybe<Array<Maybe<(
        Pick<WpGraphQl_User, 'slug'>
        & { avatar?: Maybe<Pick<WpGraphQl_Avatar, 'url'>> }
      )>>> }>, menus?: Maybe<{ nodes?: Maybe<Array<Maybe<{ menuItems?: Maybe<{ nodes?: Maybe<Array<Maybe<Pick<WpGraphQl_MenuItem, 'label' | 'url'>>>> }> }>>> }> } };

export type IndexPageQueryVariables = {};


export type IndexPageQuery = { wpgraphql: { posts?: Maybe<{ nodes?: Maybe<Array<Maybe<(
        Pick<WpGraphQl_Post, 'id' | 'title' | 'uri' | 'excerpt' | 'date'>
        & { tags?: Maybe<{ nodes?: Maybe<Array<Maybe<Pick<WpGraphQl_Tag, 'name' | 'slug'>>>> }> }
      )>>> }> } };

export type PageQueryVariables = {
  id: Scalars['ID'];
};


export type PageQuery = { wpgraphql: { page?: Maybe<Pick<WpGraphQl_Page, 'title' | 'content'>> } };

export type PostListQueryVariables = {
  id: Scalars['ID'];
};


export type PostListQuery = { wpgraphql: { tag?: Maybe<{ posts?: Maybe<{ nodes?: Maybe<Array<Maybe<(
          Pick<WpGraphQl_Post, 'id' | 'title' | 'uri' | 'excerpt' | 'date'>
          & { tags?: Maybe<{ nodes?: Maybe<Array<Maybe<Pick<WpGraphQl_Tag, 'name' | 'slug'>>>> }> }
        )>>> }> }> } };

export type PostQueryVariables = {
  id: Scalars['ID'];
};


export type PostQuery = { wpgraphql: { post?: Maybe<(
      Pick<WpGraphQl_Post, 'title' | 'content' | 'date' | 'excerpt'>
      & { tags?: Maybe<{ nodes?: Maybe<Array<Maybe<Pick<WpGraphQl_Tag, 'name' | 'slug'>>>> }>, author?: Maybe<(
        Pick<WpGraphQl_User, 'slug' | 'description'>
        & { avatar?: Maybe<Pick<WpGraphQl_Avatar, 'url'>> }
      )> }
    )> } };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
