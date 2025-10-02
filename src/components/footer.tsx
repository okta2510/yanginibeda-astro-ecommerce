export default function Footer() {
  return (
    <>
      <footer className="footer pt-3 pb-3  ">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              Copyright © {new Date().getFullYear()}&nbsp;Mikiso.com<div className="block text-xs text-black-50 text-g">Powered by <a href="https://yanginibeda.com" className="text-primary" style={{letterSpacing: '1px'}} target="_blank" rel="noopener noreferrer font-bold">yanginibeda.com</a></div>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Produk
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Kategori
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}


