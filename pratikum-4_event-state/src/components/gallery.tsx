import { useState } from 'react';
import {sculptureList} from '@/data/article'; // ambil data yang sudah ada

export default function Gallery() {
    const [index, setIndex] = useState(0); // index data mulai dari 0
    
function handleclick() {
    setIndex(index + 1); // counter index 1, utk melihat data selanjutnya
}

let sculpture = sculptureList[index]; // membaca data sesuai dengan index

return (
<>
<button
onClick={handleclick}
className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">Artikel Selanjutnya</button>
<h2><i>{sculpture.name}</i> oleh {sculpture.artist} </h2>
<h3>({index + 1} dari {sculptureList.length}) </h3>
<img src={sculpture.url} alt={sculpture.alt} />
<p>
    {sculpture.description}
</p>
</>
);
}