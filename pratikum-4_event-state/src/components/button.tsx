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