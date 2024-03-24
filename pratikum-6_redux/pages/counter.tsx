import { useDispatch, useSelector } from 'react-redux';
import { tambahCounter, kurangCounter } from '../redux/counter/naikTurunSlice';
import { CounterState } from '../redux/store/store'; // Pastikan Anda mengganti dengan path yang benar sesuai dengan struktur file Anda

export default function CounterNaikTurun() {
  const totalCounter = useSelector((state: CounterState) => state.totalCounter);
  const dispatch = useDispatch();

  const tombolTambah = () => {
    dispatch(tambahCounter()); // handle untuk tombol counter tambah
  };

  const tombolKurang = () => {
    if (totalCounter > 0) {
      dispatch(kurangCounter());
    } else {
      alert('Minimal 0');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-3">
            <div className="card-header">Total Mobil TES</div>
            <div className="card-body">
              <div className='row'>
                <div className='col-1 mt-2'>Jumlah: </div>
                <div className='col-2'>
                  <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" onClick={tombolKurang}>-</button>
                    <span className="form-control text-center">{totalCounter}</span>
                    <button className="btn btn-outline-success" type="button" onClick={tombolTambah}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
