// Fetch all testimonials
export const getTestimonials = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/testimonials`);
  return await res.json();
};
