
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createLoadOutletsActionThunk } from '../state/outletActionThunks';

const OutletsPage = () => {

    const dispath = useDispatch();

    useEffect(() => dispath(createLoadOutletsActionThunk()), []);

    let outlets = useSelector(globalState => globalState.shop.outlets);
    let info = useSelector(globalState => globalState.shop.waitMsg);
    let err = useSelector(globalState => globalState.shop.errMsg);

    return (
        <section className='container-fluid p-4'>
            <h3>Outlets List</h3>

            {info && <p className='alert alert-info p-2 fw-bold'>{info}</p>}

            {err && <p className='alert alert-danger p-2 fw-bold'>{err}</p>}

            <table className='table table-border table-striped'>
                <thead>
                    <tr>
                        <th>Outlet#</th>
                        <th>Outlet Location</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {outlets && outlets.length > 0 && outlets.map(outlet => (
                        <tr>
                            <td>{outlet.id}</td>
                            <td>{outlet.location}</td>
                            <td>{outlet.city}</td>
                            <td>
                                <Link className='btn btn-sm btn-primary me-1' to={"/stock/" + outlet.id}> VIEW STOCK</Link>
                                <Link to={"/edit/" + outlet.id}
                                    className="btn btn-sm btn-secondary me-1">
                                    EDIT
                                </Link>
                                <button type="button"
                                    className="btn btn-sm btn-danger me-1">
                                    DELETE
                                </button>                            </td>
                        </tr>
                    ))}
                    {(!outlets || outlets.length == 0) && (
                        <tr>
                            <td colSpan="4" className="text-center fw-bold">
                                No outlet info found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
};

export default OutletsPage;