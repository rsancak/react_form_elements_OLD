import { useState } from 'react';
import Select from 'react-select';

function Form() {
    const [inputs, setInputs] = useState({});
    const options = [
        { value: 'istanbul', label: 'İstanbul' },
        { value: 'ankara', label: 'Ankara' },
        { value: 'izmir', label: 'İzmir' },
    ];
    const handleChange = (event) => {
        const name = event.target?.name ? event.target.name : "select";
        const value = event.target?.value == "on" ? event.target.checked : event.value || event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById('dataID').innerHTML = JSON.stringify(inputs);
    }
    return (
        <>
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container justify-content-center">
                    <a href="#" className="navbar-brand">Form Elements & Data</a>
                </div>
            </nav>
            <div className="row justify-content-center m-0">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="text">Text Element</label>
                            <input onChange={handleChange} type="text" className="form-control" id="text" name="text" placeholder="Text" />
                        </div>
                        <hr />
                        <div className="form-group  mb-2">
                            <label htmlFor="textarea">Textarea Element</label>
                            <textarea onChange={handleChange} className="form-control" id="textarea" name="textarea" placeholder="Textarea" />
                        </div>
                        <hr />
                        <div className="form-group  mb-2">
                            <label>Select Element</label>
                            <Select
                                id="select"
                                name="select"
                                onChange={handleChange}
                                placeholder="Select"
                                options={options}
                            />
                        </div>
                        <hr />
                        <div className="form-group mb-2">
                            <label htmlFor="file" className="form-label">File Element</label>
                            <input onChange={handleChange} className="form-control" type="file" id="file" name="file" />
                        </div>
                        <hr />
                        <div className="form-group mb-2">
                            <div className="form-check">
                                <input onChange={handleChange} className="form-check-input" type="radio" name="radio" id="radio1" value="OK" defaultChecked />
                                <label className="form-check-label" htmlFor="radio1">
                                    First Radio Element
                                </label>
                            </div>
                            <div className="form-check">
                                <input onChange={handleChange} className="form-check-input" type="radio" name="radio" id="radio2" value="NO" />
                                <label className="form-check-label" htmlFor="radio2">
                                    Second Radio Element
                                </label>
                            </div>
                        </div>
                        <hr />
                        <div className="form-group mb-2">
                            <div className="form-check">
                                <input onChange={handleChange} className="form-check-input" type="checkbox" id="checkbox" name="checkbox" defaultChecked />
                                <label className="form-check-label" htmlFor="checkbox">Checkbox Element</label>
                            </div>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary d-block" style={{ width: "100%" }}>GET DATA</button>
                    </form>
                </div>
                <div className='col-md-4 p-4' style={{ background: "#e9e9e9", borderRadius: "20px" }}>
                    <h2>DATA VIEW</h2>
                    <pre id='dataID' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                        Fill fields in the form and click the button "GET DATA" <span style={{ fontSize: "30px" }}>👻</span>
                    </pre>
                </div>
            </div>
        </>

    )
}

export default Form;