import axios from 'axios';

export const getLeads = async (page = 1, perPage = 5) => {
  const response = await axios.get('/api/leads', {
    params: { page, perPage }
  });
  return response.data;
};

export const deleteLead = async (id: string) => {
  const response = await axios.delete(`/api/leads/${id}`);
  return response.data;
};
