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
    status: true,
  },
  {
    id: 2,
    name: 'Energetic Vibes',
    author: 'Pulse Wave',
    category: 'EDM',
    duration: '4:10',
    plays: 870,
    status: false,
  },
];

export default function Playlist() {
  const [query, setQuery] = useState('');

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

      {/* Table */}
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
                {/* Tracks */}
                <td className="p-3 flex items-center gap-3">
                  <PlayArrow className="w-5 h-5 text-indigo-500" />
                  <Description className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-semibold">{track.name}</div>
                    <div className="text-xs text-gray-500">{track.author}</div>
                  </div>
                </td>

                {/* Category */}
                <td className="p-3">{track.category}</td>

                {/* Duration */}
                <td className="p-3">{track.duration}</td>

                {/* Plays */}
                <td className="p-3">{track.plays}</td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      track.status ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {track.status ? 'Active' : 'Inactive'}
                  </span>
                </td>

                {/* Action */}
                <td className="p-3 flex items-center gap-4">
                  <Switch
                    checked={track.status}
                    className={`${
                      track.status ? 'bg-indigo-600' : 'bg-gray-300'
                    } relative inline-flex h-5 w-10 items-center rounded-full transition`}
                    disabled
                  >
                    <span
                      className={`${
                        track.status ? 'translate-x-5' : 'translate-x-1'
                      } inline-block h-3 w-3 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                  <Visibility className="w-5 h-5 text-gray-500 hover:text-indigo-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
