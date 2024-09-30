using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Repository;

namespace CertificatesManagerApi.Services
{

    public class CertificateService
    {
        CertificateRepository _certificateRepository;

        public CertificateService(CertificateRepository certificateRepository)
        {
            _certificateRepository = certificateRepository;
        }

        public async Task<IEnumerable<TableCertificatesDTO>> GetCertificates()
        {
            return await _certificateRepository.GetCertificates();
        }

        public async Task<CertificateDTO> GetCertificate(string handle)
        {
            return await _certificateRepository.GetCertificate(handle);
        }

        public async Task<CertificateDTO> PostCertificate(CreateCertificateDTO certificateDTO)
        {
            return await _certificateRepository.PostCertificate(certificateDTO);
        }

        public async Task<CertificateDTO> UpdateCertificate(string handle, UpdateCertificateDTO updateCertificateDTO)
        {
            Guid certificateHandle = Guid.Parse(handle);

            return await _certificateRepository.UpdateCertificate(certificateHandle, updateCertificateDTO);
        }

        public async Task<bool> DeleteCertificate(string handle)
        {
            Guid certificateHandle = Guid.Parse(handle);

            return await _certificateRepository.DeleteCertificate(certificateHandle);
        }
    }
}
