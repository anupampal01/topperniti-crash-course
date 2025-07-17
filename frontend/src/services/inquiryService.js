// Submit inquiry form
export const submitInquiry = async (data) => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/inquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};
