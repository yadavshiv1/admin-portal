import { useState } from 'react';
import { PlayArrow, Description, Visibility } from '@mui/icons-material';
import { Switch } from '@mui/material';

const dummyTracks = [
  {
    id: 1,
    name: 'Lofi Chill Beats',
    author: 'DJ Peace',
    category: 'Lofi',
    duration: '3:25',
    plays: 1024,
    status: "Published",
  },
  {
    id: 2,
    name: 'Energetic Vibes',
    author: 'Pulse Wave',
    category: 'EDM',
    duration: '4:10',
    plays: 870,
    status: "Pending",
  },
  {
    id: 3,
    name: 'Energetic Vibes',
    author: 'Pulse Wave',
    category: 'EDM',
    duration: '4:10',
    plays: 870,
    status: "Unpublish",
  },
];

export default function Albums() {
  const [query, setQuery] = useState('');

  const [switchStates, setSwitchStates] = useState(() => {
        const initialState = {};
        dummyTracks.forEach((track) => {
          initialState[track.id] = track.status === 'Published';
        });
        return initialState;
      });
  

  const filteredTracks = dummyTracks.filter((track) =>
    track.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 bg-white rounded-xl shadow">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tracks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="p-3">Tracks</th>
              <th className="p-3">Categories</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Plays</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredTracks.map((track) => (
              <tr key={track.id} className="hover:bg-gray-50">
                <td className="p-3 flex items-center gap-3">
                  <img src="/img/playIcon.svg" alt="Logo" className="h-7 w-7" />
                <div className='bg-[#259CE51A] p-1 rounded-lg border-[#259CE5]'><img src="/img/fileIcon.svg" alt="Logo" className="h-7 w-7" /></div>
                  <div>
                  <div className='bg-[#259CE51A] p-1 rounded-lg border-[#259CE5]'><img src="/img/fileIcon.svg" alt="Logo" className="h-7 w-7" /></div>
                    <div className="font-semibold">{track.name}</div>
                    <div className="text-xs text-gray-500">{track.author}</div>
                  </div>
                </td>

                <td className="p-3">{track.category}</td>

                <td className="p-3">{track.duration}</td>

                <td className="p-3">{track.plays}</td>

                <td className="p-3">
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      track.status === 'Published'
                        ? 'text-[#259CE5]'
                        : track.status === 'Pending'
                        ? 'text-[#F97316]'
                        : track.status === 'Unpublish'
                        ? 'text-[#DDBF00]'
                        : 'text-gray-600'
                    }`}
                  >
                    {track.status}
                  </span>
                </td>

                <td className="p-3 flex items-center gap-4">
                    <img
                      src={switchStates[track.id] ? "/img/enableSwitchicon.svg" : "/img/disabledIcon.svg"}
                      alt="Toggle"
                      className="h-9 w-9 cursor-pointer"
                      onClick={() =>
                        setSwitchStates((prev) => ({
                          ...prev,
                          [track.id]: !prev[track.id],
                        }))
                      }
                    />
                    <button><img src="/img/viewIcon.svg" alt="Logo" className="h-7 w-7" /></button>

                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
