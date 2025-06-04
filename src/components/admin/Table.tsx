'use client';

import { useEffect, useState } from 'react';
import { Trash2, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { getLeads, deleteLead } from '@/services/leadsService';
import { Lead } from '@/types/lead';

export default function AdminLeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);
  const [total, setTotal] = useState(0);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const data = await getLeads(page, perPage);
      setLeads(data.leads);
      setTotal(data.total);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, perPage]);

  const totalPages = Math.ceil(total / perPage);

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await deleteLead(id);
      await fetchLeads();
    } catch (err) {
      setError('Failed to delete lead. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const from = (page - 1) * perPage + 1;
  const to = Math.min(page * perPage, total);

  if (error) return <p className="text-center py-4 text-red-500">{error}</p>;
  if (!loading && leads.length === 0) return <p className="text-center py-4 text-gray-500">No leads found.</p>;

  return (
    <div className="relative">
      <div
        className='absolute w-fit -top-8 left-0 right-0 bg-gray-600 hover:bg-gray-500 text-white p-1 rounded-sm cursor-pointer'
        onClick={fetchLeads}
      >
        <RotateCcw size={20} />
      </div>
      <div className='overflow-x-auto rounded-lg '>
        <table className="w-full text-sm text-left rtl:text-right text-gray-400 overflow-hidden overflow-x-auto">
          <thead className="text-xs text-gray-400 uppercase bg-dark-blue-custom">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3">State</th>
              <th className="px-6 py-3">Energy Bill</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map(lead => (
              <tr
                key={lead.id}
                className="bg-dark-custom border-b border-gray-700 hover:bg-gray-600"
              >
                <th className="px-6 py-4 font-medium text-white max-w-3xs overflow-hidden text-ellipsis whitespace-nowrap">
                  {lead.fullName}
                </th>
                <td className="px-6 py-4">{lead.city}</td>
                <td className="px-6 py-4">{lead.state}</td>
                <td className="px-6 py-4">{lead.energyBillValue}</td>
                <td className="px-6 py-4">
                  <button
                    className="text-red-500 p-2 rounded-md hover:bg-rose-100 flex items-center justify-center transition-colors cursor-pointer"
                    onClick={() => handleDelete(lead.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-dark-custom block w-full">
          Showing <span className="font-semibold text-gray-500">{from}-{to}</span> of{' '}
          <span className="font-semibold text-gray-500">{total}</span>
        </span>

        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(p - 1, 1))}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border rounded-s-lg
                ${page === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer'}
                bg-dark-custom border-gray-700`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
            <li key={num}>
              <button
                onClick={() => setPage(num)}
                className={`flex items-center justify-center px-3 h-8 leading-tight border
                  ${num === page ? 'text-white bg-gray-700' : 'text-gray-400 bg-dark-custom hover:bg-gray-700 hover:text-white cursor-pointer'}
                  border-gray-700`}
              >
                {num}
              </button>
            </li>
          ))}

          <li>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(p => Math.min(p + 1, totalPages))}
              className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg
                ${page === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer'}
                bg-dark-custom border-gray-700`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}