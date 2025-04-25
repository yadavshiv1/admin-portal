import { useState } from 'react';
import { PlayArrow } from '@mui/icons-material';
import { TextField, MenuItem, FormControl, InputLabel, Select, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { CloudUpload, Link as LinkIcon } from "@mui/icons-material"

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
  const [showModal, setShowModal] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const dummyData = `Whispers from the universe,
  In the stillness of the dawn, I hear a sacred call,
  Whispers from the universe, In the stillness of the dawn,
  I hear a sacred call, That rise above it all.
  That rise above it all. Whispers from the universe,
  In the stillness of the dawn, I hear a sacred call,
  Whispers from the universe, In the stillness of the dawn,
  I hear a sacred call, That rise above it all.
  That rise above it all.`;

  const filteredTracks = pendingTracks.filter((track) =>
    track.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="p-6 space-y-6 bg-white rounded-xl shadow">
      <div>
        <h2 className="text-lg font-semibold">Pending Reviews</h2>
        <p className="text-gray-500 text-sm">These tracks are awaiting approval.</p>
      </div>

      <div className="space-y-4">
        {filteredTracks.map((track) => (
          <div
            key={track.id}
            className="lg:flex justify-between items-center p-4 border rounded-md shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
            <img src="/img/playIcon.svg" alt="Logo" className="h-7 w-7" />
            <div className='bg-[#259CE51A] p-1 rounded-lg border-[#259CE5]'><img src="/img/fileIcon.svg" alt="Logo" className="h-7 w-7" /></div>
            <div>
                <div className="font-medium">{track.name}</div>
                <div className="text-sm text-gray-500">by {track.author}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outlined" sx={{ 
                          mr: 1, 
                          backgroundColor: 'rgba(240, 87, 75, 0.1)',
                          border: '1px solid rgba(240, 87, 75, 1)',
                          borderRadius: '8px',
                          color: 'rgba(240, 87, 75, 1)',
                        }}>
                Reject
              </Button>
              <Button variant="contained" sx={{ 
                            mr: 1, 
                            backgroundColor: '#259CE5',
                            border: '1px solid rgba(37, 156, 229, 1)',
                            borderRadius: '8px',
                            color: '#FFFFFF',
                          }}>
                Approve
              </Button>
              <button onClick={() => setShowModal(true)}><img src="/img/viewIcon.svg" alt="Logo" className="h-7 w-7" /></button>
            </div>
          </div>
        ))}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-5xl">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-semibold">Content Preview</h2>
                <p className="text-gray-600">Review this track before approving it to publish</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <img src="/img/CloseIcon.svg" alt="Close" className="h-6 w-6" />
              </button>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1">
                  <h5 className="text-md font-semibold mb-1">Track Information</h5>
                  <div className="space-y-1">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Title</label>
                      <TextField placeholder="Morning Meditation" fullWidth size="small" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Category</label>
                      <TextField placeholder="Music" fullWidth size="small" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Submitted By</label>
                      <TextField placeholder="Jamie Williams" fullWidth size="small" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Date of Submission</label>
                      <TextField
                        type="date"
                        fullWidth
                        size="small"
                        InputLabelProps={{ shrink: true }}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Duration</label>
                      <TextField placeholder="03:45" fullWidth size="small" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Enter language</label>
                      <TextField placeholder="Enter language" fullWidth size="small" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-6">
                  <div>
                    <h5 className="text-md font-semibold mb-6">Audio Preview</h5>
                    <div className="p-4 bg-white rounded-md shadow flex items-center justify-center gap-4 mb-6">
                      <img src="/img/playIcon.svg" alt="Logo" className="h-11 w-11" />
                      <div className="flex items-center gap-2 w-full">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderValue}
                          onChange={handleSliderChange}
                          className="w-full accent-blue-500"
                        />
                        <span>{sliderValue}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-md font-semibold mb-3">Lyrics / Description</h5>
                    <TextField
                      placeholder="Enter lyrics or description"
                      multiline
                      rows={10}
                      fullWidth
                      size="small"
                      sx={{ overflowY: 'auto' }}
                      value={dummyData}
                    />
                  </div>
                </div>
              </div>
                    <div className="flex justify-end gap-3 pt-4">
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => setShowModal(false)}
                        sx={{
                          mr: 1,
                          backgroundColor: '#03BE26',
                          border: '1px solid #03BE26',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                        }}
                      >
                        <img src="/img/checkIcon.svg" alt="checkIcon" className="h-5 w-5 mr-2" />
                        Approve
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => setShowModal(false)}
                        sx={{
                          mr: 1,
                          backgroundColor: 'rgba(240, 87, 75, 0.1)',
                          border: '1px solid rgba(240, 87, 75, 1)',
                          borderRadius: '8px',
                          color: 'rgba(240, 87, 75, 1)',
                        }}
                      >
                      <img src="/img/crossIcon.svg" alt="crossIcon" className="h-5 w-5 mr-2" />
                        Reject
                      </Button>
                    </div>
            </div>
          </div>
        )}

      </div>  
    </div>
  );
}
