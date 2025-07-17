// Fetch all demo videos
export const getVideos = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/videos`);
  return await res.json();
};
