import React from 'react'

export default function page() {
    return (
        <section className="section dashboard">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            {/* Horizontal Form */}
                            <form>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Your Name</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputText" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                    First radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                    Second radio
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
                                    <label className="form-check-label" htmlFor="gridRadios3">
                                    Third disabled radio
                                    </label>
                                </div>
                                </div>
                            </fieldset>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                    Example checkbox
                                    </label>
                                </div>
                                </div>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary me-5">Submit</button>
                                <button type="reset" className="btn btn-secondary me-5">Reset</button>
                            </div>
                            </form>{/* End Horizontal Form */}
                        </div>
                    </div>
                </div>
            </div>

        </section>
           
    )
}
