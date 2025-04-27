import { useState } from 'react';
import { PlayArrow, Description, Visibility } from '@mui/icons-material';
import { Switch } from '@mui/material';
import ViewIcon from "../../../assets/viewIcon.svg";
import PlayIcon from "../../../assets/playIcon.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import filterIcon from "../../../assets/filterIcon.svg";
import enableSwitchicon from "../../../assets/enableSwitchicon.svg";
import disabledIcon from "../../../assets/disabledIcon.svg";

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

export default function Playlist() {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState("admin");

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
      <div className="flex items-center space-x-4">
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search tracks..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 pl-10 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <img 
                src={searchIcon}
                alt="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              />
            </div>

            <button 
              className="flex items-center space-x-1 p-2 border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <img 
                src={filterIcon}
                alt="Filter"
                className="h-5 w-5 text-gray-600"
              />
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>

          
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
                  <img src={PlayIcon} alt="Logo" className="h-7 w-7" />
                <div className='bg-[#259CE51A] p-1 rounded-lg border-[#259CE5]'><img src={PlayIcon} alt="Logo" className="h-7 w-7" /></div>

                  <div>
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
                {role==="admin" &&(
                    <img
                      src={switchStates[track.id] ? enableSwitchicon: disabledIcon}
                      alt="Toggle"
                      className="h-9 w-9 cursor-pointer"
                      onClick={() =>
                        setSwitchStates((prev) => ({
                          ...prev,
                          [track.id]: !prev[track.id],
                        }))
                      }
                    />)}
                    <button><img src={ViewIcon} alt="Logo" className="h-7 w-7" /></button>

                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
