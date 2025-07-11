// Fetch all testimonials
export const getTestimonials = async () => {
  const res = await fetch('/api/testimonials');
  return await res.json();
};
