export const blogs = [];

export const getBlogById = (id) => blogs.find((blog) => blog.id === id);
export const getBlogsByGameId = (gameId) => blogs.filter((blog) => blog.gameId === gameId);
export const getAllBlogs = () => blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
