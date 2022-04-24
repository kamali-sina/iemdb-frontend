function IemdbLogo() {
    return (
        <div className="col-md-8 col-lg-7 col-xl-6">
            <img
            alt="Phone image"
            className="img-fluid"
            src={process.env.PUBLIC_URL + '/logo.png'}
            />
        </div>
    );
}

export default IemdbLogo;