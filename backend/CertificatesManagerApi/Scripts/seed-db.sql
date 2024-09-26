INSERT INTO Suppliers
(
	Name,
	Index,
	City
) VALUES
(
	'DAIMLER AG',
	1,
	'Berlin'
),
(
	'ANDEMIS GmbH',
	1,
	'Stuttgart'
);

INSERT INTO CertificateTypes
(
	Type
) VALUES
(
	'Permission of Printing'
),
(
	'OHSAS 18001'
);

INSERT INTO Users
(
	Name,
	FirstName,
	Email,
	UserId,
	Department,
	Plant
) VALUES
(
	'Simon',
	'Zwolfer',
	'simonz@mail.com',
	'ZWOELF',
	'ITM/FP',
	'096'
),
(
	'Wolfgang',
	'Stark',
	'wolfgangs@mail.com',
	'WOLFST',
	'ITM/FP',
	'094'
);