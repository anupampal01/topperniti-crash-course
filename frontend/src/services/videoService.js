// Fetch all demo videos
export const getVideos = async () => {
  const res = await fetch('/api/videos');
  return await res.json();
};
