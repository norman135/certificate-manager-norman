import Certificate from '../../models/certificate.model';
import {
	CertificateAddDTO,
	CertificateDTO,
	CertificateUpdateDTO,
} from '../../models/dtos/certificate-dto';
import { toIsoString } from '../format-date.utils';
import { CertificateTypeMapper } from './certificate-type-mapper';
import { CommentMapper } from './comment-mapper';
import { SupplierMapper } from './supplier-mapper';
import { UserMapper } from './user-mapper';

export class CertificateMapper {
	static ToModel(certificateDTO: CertificateDTO): Certificate {
		let certificate: Certificate = {
			id: certificateDTO.handle,
			supplier: SupplierMapper.ToModel(certificateDTO.supplier),
			type: CertificateTypeMapper.ToModel(certificateDTO.certificateType),
			validFrom: new Date(certificateDTO.validFrom),
			validTo: new Date(certificateDTO.validTo),
			users: certificateDTO.participants
				? certificateDTO.participants.map((user) => UserMapper.ToModel(user))
				: [],
			pdf: certificateDTO.document,
			comments: certificateDTO.comments
				? certificateDTO.comments.map((comment) =>
						CommentMapper.ToModel(comment),
					)
				: [],
		};

		return certificate;
	}

	static ToAddDTO(certificate: Certificate): CertificateAddDTO {
		let certificateAddDTO: CertificateAddDTO = {
			supplierHandle: certificate.supplier.id,
			certificateTypeHandle: certificate.type.id,
			validFrom: toIsoString(certificate.validFrom),
			validTo: toIsoString(certificate.validTo),
			document: certificate.pdf,
		};

		return certificateAddDTO;
	}

	static ToUpdateDTO(certificate: Certificate): CertificateUpdateDTO {
		let certificateUpdateDTO: CertificateUpdateDTO = {
			supplierHandle: certificate.supplier.id,
			certificateTypeHandle: certificate.type.id,
			validFrom: toIsoString(certificate.validFrom),
			validTo: toIsoString(certificate.validTo),
			document: certificate.pdf,
			participants: certificate.users?.map((user) => UserMapper.ToDTO(user)),
		};

		return certificateUpdateDTO;
	}
}
