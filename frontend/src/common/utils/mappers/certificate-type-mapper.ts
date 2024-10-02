import { CertificateTypeModel } from '../../models/certificate.model';
import { CertificateTypeDTO } from '../../models/dtos/certificate-type-dto';

export class CertificateTypeMapper {
	static ToModel(certificateTypeDTO: CertificateTypeDTO): CertificateTypeModel {
		let certificateTypeModel: CertificateTypeModel = {
			id: certificateTypeDTO.handle,
			type: certificateTypeDTO.name,
		};

		return certificateTypeModel;
	}
}
