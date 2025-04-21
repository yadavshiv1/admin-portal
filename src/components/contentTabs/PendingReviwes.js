import { useState } from 'react';
import { PlayArrow } from '@mui/icons-material';
import { Button } from '@mui/material';

const pendingTracks = [
  {
    id: 1,
    name: 'Calm Ocean Breeze',
    author: 'Nature Soundz',
  },
  {
    id: 2,
    name: 'Deep Meditation',
    author: 'Zen Master',
  },
];

export default function PendingReviews() {
  const [query, setQuery] = useState('');

  const filteredTracks = pendingTracks.filter((track) =>
    track.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 bg-white rounded-xl shadow">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search pending reviews..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Pending Reviews</h2>
        <p className="text-gray-500 text-sm">These tracks are awaiting approval.</p>
      </div>

      {/* Review Cards */}
      <div className="space-y-4">
        {filteredTracks.map((track) => (
          <div
            key={track.id}
            className="lg:flex justify-between items-center p-4 border rounded-md shadow-sm hover:shadow-md transition"
          >
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <PlayArrow className="text-indigo-500" />
              <div>
                <div className="font-medium">{track.name}</div>
                <div className="text-sm text-gray-500">by {track.author}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outlined" color="error">
                Reject
              </Button>
              <Button variant="contained" color="primary">
                Approve
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
