import { styled } from 'styled-components';
import React from 'react';

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  page,
  setPage,
}) => {
  const numPages = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= numPages) {
      setPage(newPage);
    }
  };

  const visiblePages = 5; // 한 페이지에 보여줄 최대 버튼 개수
  const startPage = Math.max(page - Math.floor(visiblePages / 2), 1);
  const endPage = Math.min(startPage + visiblePages - 1, numPages);

  const pageButtons = [];
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <StyledButton
        key={i}
        onClick={() => handlePageChange(i)}
        aria-current={page === i ? 'page' : undefined}
      >
        {i}
      </StyledButton>,
    );
  }

  return (
    <PaginationContainer>
      <StyledButton
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </StyledButton>
      {pageButtons}
      <StyledButton
        onClick={() => handlePageChange(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </StyledButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
`;
const StyledButton = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  background-color: var(--ghost-color);
  border-radius: 4px;
  font-size: 0.9rem;
  color: var(--white-color);
  &:hover {
    opacity: 0.7;
  }
`;
// export default Pagenation;
