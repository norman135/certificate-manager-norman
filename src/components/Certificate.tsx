import React from "react"

type Certificate = {
    supplier: string,
    type: string,
    validFrom: Date,
    validTo: Date
}

interface CTProps {
    certificates: Certificate[]
};


const NewCertificate: React.FC = (): JSX.Element => {
    return (
        <div className="new-certificate">
            <div className="new-certificates-input-area">
                <div className="new-certificate-inputs">
                    <div className="new-certificate-input">
                        <label>Supplier</label>
                        <input type="text"/>
                        <button>Search</button>
                        <button>Cancel</button>
                    </div>
                    <div className="new-certificate-input">
                        <label>Certificate type</label>
                        <select>
                            <option value="0">Select Your Option</option>
                            <option value="1">Permission of Printing</option>
                            <option value="2">OHSAS 18001</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" className="expand-icon expand-icon-selected">
                            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                        </svg>
                    </div>
                    <div className="new-certificate-input">
                        <label>Valid From</label>
                        <input type="datetime-local" placeholder="Click to Select Date"/>
                    </div>
                    <div className="new-certificate-input">
                        <label>Valid To</label>
                        <input type="datetime-local" placeholder="Click to Select Date"/>
                    </div>
                </div>
                <div className="pdf-preview-area">
                    <label htmlFor="nc-upload-file-button">Upload</label>
                    <input type="file" id="nc-upload-file-button" style={{display: "none"}}/>
                    <iframe src="" className="pdf-preview-iframe"></iframe>
                </div>
            </div>
            <div className="new-certificates-buttons-area">
                <button className="certificates-button">Save</button>
                <button className="certificates-neutral-button">Cancel</button>
            </div>
        </div>
    )
}


const CertificatesTable: React.FC = (): JSX.Element => {
    const certificates: Certificate[] = [
        {
            supplier: "DAIMLER AG, 1, Berlin",
            type: "Permission of Printing",
            validFrom: new Date("08-21-2017"),
            validTo: new Date("08-26-2017")
        },
        {
            supplier: "ANDEMIS GmBH, 1, Stuttgart",
            type: "OHSAS 18001",
            validFrom: new Date("08-18-2017"),
            validTo: new Date("08-24-2017")
        },
        {
            supplier: "ANDEMIS GmBH, 1, Stuttgart",
            type: "Permission of Printing",
            validFrom: new Date("10-04-2017"),
            validTo: new Date("10-10-2017")
        }
    ];

    const formatDate = (date: Date): string => {
        const date_ = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        return `${date_}.${month}.${year}`;
    }

    return (
        <>
            <h1>Example 1</h1>
            <button className="certificates-button">New Certificate</button>
            <div className="certificates-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Supplier</th>
                            <th>Certificate type</th>
                            <th>Valid from</th>
                            <th>Valid to</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            certificates.map((certificate, index) => (
                                <tr>
                                    <td></td>
                                    <td>{certificate.supplier}</td>
                                    <td>{certificate.type}</td>
                                    <td>{formatDate(certificate.validFrom)}</td>
                                    <td>{formatDate(certificate.validTo)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export {CertificatesTable, NewCertificate};
