export const formatDate = (date) => {
  const newDate = new Date(date);
  const dateOptions = {
    // timeZone: 'UTC',
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  //   console.log('formatdate', newDate);

  return newDate.toLocaleDateString('vi-Vn', dateOptions);
};

export const isClient = typeof window !== 'undefined';
