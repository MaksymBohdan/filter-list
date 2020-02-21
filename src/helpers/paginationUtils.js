import { LEFT_PAGE, RIGHT_PAGE } from '../constants/constants';

const numbersRange = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const calculatePagination = ({
  currentPage,
  totalRecords,
  pageLimit,
  pageNeighbours
}) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    const firstNeighborBlock = Math.max(2, currentPage - pageNeighbours);
    const lastNeighborBlock = Math.min(
      totalPages - 1,
      currentPage + pageNeighbours
    );

    let pages = numbersRange(firstNeighborBlock, lastNeighborBlock);

    const hasLeftPointer = firstNeighborBlock > 2;
    const hasRightPointer = totalPages - lastNeighborBlock > 1;
    const pointerOffset = totalNumbers - (pages.length + 1); //7 - 5

    // handle: (1) {2 3} [4] {5 6} > (10)
    if (!hasLeftPointer && hasRightPointer) {
      const extraPages = numbersRange(
        lastNeighborBlock + 1,
        lastNeighborBlock + pointerOffset
      );

      pages = [...pages, ...extraPages, RIGHT_PAGE];
    }

    // handle: (1) < {5 6} [7] {8 9} (10)
    if (hasLeftPointer && !hasRightPointer) {
      const extraPages = numbersRange(
        firstNeighborBlock - pointerOffset,
        firstNeighborBlock - 1
      );

      pages = [LEFT_PAGE, ...extraPages, ...pages];
    }

    // // handle: (1) < {4 5} [6] {7 8} > (10)
    if (hasLeftPointer && hasRightPointer)
      pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];

    return [1, ...pages, totalPages];
  }

  return numbersRange(1, totalPages);
};

export { calculatePagination };
