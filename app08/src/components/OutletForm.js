import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createLoadOutletByIdActionThunk,createAddOutletActionThunk,createUpdateOutletActionThunk } from '../state/outletActionThunks';

const OutletForm = () => {

    const dispatch = useDispatch();

    let { outletId } = useParams();

    let [id, setId] = useState(0);
    let [location, setLocation] = useState('');
    let [city, setCity] = useState('');
    let [isEditing,setEditing] = useState(false);
    let [isSaved,setSaved] = useState(false);

    useEffect(() => { dispatch(createLoadOutletByIdActionThunk(outletId)) }, [outletId]);

    let current = useSelector(globalState => globalState.shop.current);

    useEffect(() => {
        if (current) {
            setId(current.id);
            setLocation(current.location);
            setCity(current.city);
            setEditing(true);
        }
    }, [current]);

    const save = event => {
        let outlet = {id,location,city};
        isEditing? dispatch(createUpdateOutletActionThunk(outlet)): dispatch(createAddOutletActionThunk(outlet));
        setSaved(true);
    };

    return  isSaved ? <Navigate to="/" />: (
        <section className='container-fluid p-4'>
            <div className="col-sm-5 mx-auto">
                <h3> {isEditing?"Edit":"New"} Outlet</h3>
                <form>
                    <div>
                        <label>Outlet Id</label>
                        <input type="number" value={id} readOnly={true} className="form-control" />
                    </div>
                    <div>
                        <label>Location</label>
                        <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="form-control" />
                    </div>
                    <div>
                        <label>Outlet Id</label>
                        <input type="text" value={city} onChange={e => setCity(e.target.value)} className="form-control" />
                    </div>
                    <div className='d-grid p-1'>
                        <button type="button" className='btn btn-primary' onClick={save}>SAVE</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default OutletForm;