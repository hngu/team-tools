import React, { useState, useEffect } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffMpeg = createFFmpeg({ log: true});

function App() {
  const [ ready, setReady ] = useState(false);
  const [ video, setVideo ] = useState(null);
  const [ gif, setGif ] = useState(null);
  
  useEffect(() => {
    const load = async () => {
      await ffMpeg.load();
      setReady(true);
    };

    load();
  }, []);

  const convertToGif = async () => {
    // write the file to memory
    ffMpeg.FS('writeFile', 'test.mp4', await fetchFile(video));

    // run ffmpeg command
    await ffMpeg.run('-i', 'test.mp4', '-t', '2.5', '-ss', '2.0', '-f', 'gif', 'out.gif');

    // read the result
    const data = ffMpeg.FS('readFile', 'out.gif');

    // create the url
    const url = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));
    setGif(url);
  };

  return ready ? (
    <div>
      {video && (
        <video controls={true} width="250" src={URL.createObjectURL(video)} />
      )}
      <input type="file" onChange={(e) => setVideo(e.target.files?.item(0)) } />
      <h3>Result</h3>
      <button onClick={convertToGif}>Convert</button>
      { gif && <img alt="gif conversion" src={gif} width="250" />}
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
