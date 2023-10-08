//1. import Area
// Import {namedImport} from 'some library/location'
import { APP_BRAND, APP_BRAND_WEB_URL, APP_NAME } from "@/Helper/helper";

import Link from "next/link";
 
 //2. defination area  and export area
export default function Home() {
  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link href="/" className="logo d-flex align-items-center w-auto">
                      <img src="../assets/img/logo.png" alt="true" />
                      <span className="d-none d-lg-block"> {APP_NAME} </span>
                    </Link>
                  </div>{/* End Logo */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Login</h5>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" name="username" className="form-control" id="yourUsername" required placeholder="Username" />
                            <div className="invalid-feedback">Please enter your username.</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <input type="password" name="password" className="form-control" id="yourPassword" required placeholder="Password" />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" defaultValue="true" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <Link href="/NiceAdmin/Dashboard" className="btn btn-primary w-100" type="submit">Login</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="credits">
                    Designed by <a href={`${APP_BRAND_WEB_URL}`} target="_blank" > {APP_BRAND} </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>{/* End #main */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </>
  )
}
