export function Tombol_2({isiPesan, namaTombol}) {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      onClick={() => alert(isiPesan)}>
        {namaTombol}
      </button>
    );
}

export function Tombol_3({isiPesan, namaTombol}) {
    return (
      <button className="bg-green-500 hover:bg-green-700 text-white p-2 rounded m-2"
      onClick={(e) => {
        e.stopPropagation();
        alert(isiPesan)
    }
    }>
        {namaTombol}
      </button>
    );
}

export default function Tombol_l() {
    function HandleClick() {
        alert("Tombol telah di tekan!");
    }

    function HandleMouseOver() {
        alert("Eits, mau mencet tombol ya?");
    }

    return (
    <button className= "bg-blue-500 hover: bg-blue-700 text-white p-2 rounded"
    onClick={HandleClick}
    //onMouseOver={HandleMouseOver}
    onMouseLeave={() => {
        alert("Loh, kok sudah pergi!")
    }
}
    >
    Ini tombol
    </button>
    );
}
