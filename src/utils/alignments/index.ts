const Alignments = {
  horizontal: {
    leading: 'flex-start',
    center: 'center',
    trailing: 'flex-end',
  },
  vertical: {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  },
};

export const getAlignment = (alignment: string, direction: string) => {
  return {
    alignItems:
      Alignments[direction][alignment] || Alignments[direction].center,
  };
};
