// Fetch list of courses
export const getCourses = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/courses`);
  return await res.json();
};

// Fetch course by ID
export const getCourseById = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/courses/${id}`);
  return await res.json();
};
