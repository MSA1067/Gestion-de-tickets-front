
export interface UserSummary {
  data:       UserDatum[];
  pagination: null;
}

export interface UserDatum {
  username: string;
  name:     string;
}

export interface UserPagination {
  data:       UserPaginationDatum[];
  pagination: Pagination;
}

export interface UserPaginationDatum {
  username: string;
  name:     string;
  email:    string;
  role:     string;
  active:   string;
}

export interface Pagination {
  current_page:    number;
  size:            number;
  next_page:       number;
  last_page:       number;
  total_elements:  number;
  previousPageUrl: string;
  currentPageUrl:  string;
  nextPageUrl:     string;
  lastPageUrl:     string;
}
