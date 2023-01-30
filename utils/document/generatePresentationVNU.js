import {
	AlignmentType,
	Document,
	Footer,
	Header,
	ImageRun,
	PageNumber,
	OverlapType,
	Packer,
	Paragraph,
	RelativeHorizontalPosition,
	RelativeVerticalPosition,
	Table,
	TableAnchorType,
	TableCell,
	TableLayoutType,
	TableRow,
	TextRun,
	WidthType,
} from 'docx'
import { saveAs } from 'file-saver'

export const generatePresentationVNU = (logo, data) => {
	const headerTable = new Table({
		float: {
			horizontalAnchor: TableAnchorType.MARGIN,
			verticalAnchor: TableAnchorType.MARGIN,
			relativeHorizontalPosition: RelativeHorizontalPosition.RIGHT,
			relativeVerticalPosition: RelativeVerticalPosition.TOP,
			overlap: OverlapType.NEVER,
			leftFromText: 1000,
			rightFromText: 2000,
			topFromText: 1500,
			bottomFromText: 30,
		},
		layout: TableLayoutType.FIXED,
		columnWidths: [1800, 1800],
		rows: [
			new TableRow({
				children: [
					new TableCell({
						margins: {
							top: 20,
							bottom: 20,
						},
						columnSpan: 2,
						children: [
							new Paragraph({
								alignment: AlignmentType.CENTER,
								children: [
									new TextRun({
										text: 'Mẫu R01 - cập nhật 2022',
									}),
								],
							}),
						],
					}),
				],
			}),
			new TableRow({
				children: [
					new TableCell({
						width: {
							size: 1800,
							type: WidthType.DXA,
						},
						margins: {
							top: 20,
							bottom: 20,
							left: 80,
						},
						children: [new Paragraph('Ngày nhận hồ sơ')],
					}),
					new TableCell({
						width: {
							size: 1400,
							type: WidthType.DXA,
						},
						margins: {
							top: 20,
							bottom: 20,
							left: 80,
						},
						children: [new Paragraph(data.receive_date)],
					}),
				],
			}),
			new TableRow({
				children: [
					new TableCell({
						width: {
							size: 1800,
							type: WidthType.DXA,
						},
						margins: {
							top: 20,
							bottom: 20,
							left: 80,
						},
						children: [new Paragraph('Mã số đề tài')],
					}),
					new TableCell({
						width: {
							size: 1400,
							type: WidthType.DXA,
						},
						margins: {
							top: 20,
							bottom: 20,
							left: 80,
						},
						children: [new Paragraph(data.code)],
					}),
				],
			}),
			new TableRow({
				children: [
					new TableCell({
						margins: {
							top: 20,
							bottom: 20,
						},
						columnSpan: 2,
						children: [
							new Paragraph({
								alignment: AlignmentType.CENTER,
								children: [
									new TextRun({
										text: '(Do CQ quản lý ghi)',
										italics: true,
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	})
	const expertInfoTable = new Table({
		columnWidths: [200, 4000, 3500, 3500, 3000],
		rows: [
			new TableRow({
				children: [
					new TableCell({
						width: {
							size: 200,
							type: WidthType.DXA,
						},
						margins: {
							top: 20,
							bottom: 20,
							left: 80,
							right: 80,
						},
						children: [
							new Paragraph({
								alignment: AlignmentType.CENTER,
								children: [
									new TextRun({
										text: 'TT',
										bold: true,
										size: 22,
									}),
								],
							}),
						],
					}),
					new TableCell({
						width: {
							size: 4000,
							type: WidthType.DXA,
						},
						margins: {
							top: 20,
							bottom: 20,
							left: 80,
							right: 80,
						},
						children: [
							new Paragraph({
								alignment: AlignmentType.CENTER,
								children: [
									new TextRun({
										text: 'Họ và tên',
										bold: true,
										size: 22,
									}),
								],
							}),
						],
					}),
					new TableCell({
						width: {
							size: 3500,
							type: WidthType.DXA,
						},
						margins: {
							top: 20,
							bottom: 20,
							left: 80,
							right: 80,
						},
						children: [
							new Paragraph({
								alignment: AlignmentType.CENTER,
								children: [
									new TextRun({
										text: 'Hướng nghiên cứu chuyên sâu',
										bold: true,
										size: 22,
									}),
								],
							}),
						],
					}),
					new TableCell({
						width: {
							size: 3500,
							type: WidthType.DXA,
						},
						margins: {
							top: 20,
							bottom: 20,
							left: 80,
							right: 80,
						},
						children: [
							new Paragraph({
								alignment: AlignmentType.CENTER,
								children: [
									new TextRun({
										text: 'Cơ quan công tác, địa chỉ',
										bold: true,
										size: 22,
									}),
								],
							}),
						],
					}),
					new TableCell({
						width: {
							size: 3000,
							type: WidthType.DXA,
						},
						margins: {
							top: 20,
							bottom: 20,
							left: 80,
							right: 80,
						},
						children: [
							new Paragraph({
								alignment: AlignmentType.CENTER,
								children: [
									new TextRun({
										text: 'Điện thoại, Email',
										bold: true,
										size: 22,
									}),
								],
							}),
						],
					}),
				],
			}),
			...data.experts.map(
				(expert, index) =>
					new TableRow({
						children: [
							new TableCell({
								width: {
									size: 200,
									type: WidthType.DXA,
								},
								margins: {
									top: 20,
									bottom: 20,
									left: 80,
									right: 80,
								},
								children: [
									new Paragraph({
										alignment: AlignmentType.CENTER,
										children: [new TextRun(`${index + 1}`)],
									}),
								],
							}),
							new TableCell({
								width: {
									size: 4000,
									type: WidthType.DXA,
								},
								margins: {
									top: 20,
									bottom: 20,
									left: 80,
									right: 80,
								},
								children: [new Paragraph(expert.name)],
							}),
							new TableCell({
								width: {
									size: 3500,
									type: WidthType.DXA,
								},
								margins: {
									top: 20,
									bottom: 20,
									left: 80,
									right: 80,
								},
								children: [new Paragraph(expert.research)],
							}),
							new TableCell({
								width: {
									size: 3500,
									type: WidthType.DXA,
								},
								margins: {
									top: 20,
									bottom: 20,
									left: 80,
									right: 80,
								},
								children: [new Paragraph(expert.agency)],
							}),
							new TableCell({
								width: {
									size: 3000,
									type: WidthType.DXA,
								},
								margins: {
									top: 20,
									bottom: 20,
									left: 80,
									right: 80,
								},
								children: [new Paragraph(expert.email)],
							}),
						],
					})
			),
		],
	})
	const doc = new Document({
		creator: 'Dung Nguyen',
		description: 'My extremely interesting document',
		title: 'My Document',
		sections: [
			{
				properties: {
					page: {
						margin: {
							top: 1000,
							bottom: 1000,
							left: 1200,
							right: 1200,
						},
					},
				},
				headers: {
					default: new Header({
						children: [new Paragraph('')],
					}),
				},
				children: [
					new Paragraph({
						children: [
							new ImageRun({
								data: logo,
								transformation: {
									width: 140,
									height: 50,
								},
							}),
						],
					}),
					headerTable,

					new Paragraph(''),
					new Paragraph(''),
					new Paragraph(''),
					new Paragraph({
						alignment: AlignmentType.CENTER,

						children: [
							new TextRun({
								text: 'THUYẾT MINH',
								bold: true,
								size: 32,
							}),
						],
					}),
					new Paragraph({
						alignment: AlignmentType.CENTER,
						children: [
							new TextRun({
								text: 'ĐỀ TÀI KHOA HỌC VÀ CÔNG NGHỆ',
								size: 32,
							}),
						],
					}),
					new Paragraph(''),
					new Paragraph({
						children: [
							new TextRun({
								text: 'A.  THÔNG TIN CHUNG',
								size: 26,
								bold: true,
								color: '0D6EFD',
							}),
						],
					}),
					new Paragraph({
						children: [
							new TextRun({
								text: 'A1. Tên đề tài',
								size: 26,
								bold: true,
								color: '0D6EFD',
							}),
						],
					}),
					new Paragraph({
						children: [
							new TextRun({
								text: `- Tên tiếng Việt: ${data.vietnamese_name}`,
								size: 26,
							}),
						],
					}),
					new Paragraph({
						children: [
							new TextRun({
								text: `- Tên tiếng Anh: ${data.english_name}`,
								size: 26,
							}),
						],
					}),
					new Paragraph(''),
					new Paragraph({
						children: [
							new TextRun({
								text: 'A2. Thuộc ngành nhóm ngành (N/NN)',
								size: 26,
								bold: true,
								color: '0D6EFD',
							}),
						],
					}),
					new Paragraph({
						children: [
							new TextRun({
								text: `N/NN ưu tiên 1: ${data.first_priority_major}; Hướng nghiên cứu:`,
								size: 24,
							}),
						],
					}),
					new Paragraph({
						children: [
							new TextRun({
								text: `N/NN ưu tiên 2: ${data.second_priority_major}; Hướng nghiên cứu:`,
								size: 24,
							}),
						],
					}),
					new Paragraph({
						children: [
							new TextRun({
								text: `N/NN ưu tiên 3: ${data.third_priority_major}; Hướng nghiên cứu:`,
								size: 24,
							}),
						],
					}),
					new Paragraph(''),
					new Paragraph({
						children: [
							new TextRun({
								text: 'Giới thiệu chuyên gia/nhà khoa học am hiểu đề tài này ',
								size: 26,
								bold: true,
								color: '0D6EFD',
							}),
							new TextRun({
								text: '(không bắt buộc)',
								size: 26,
								italics: true,
							}),
						],
					}),
					expertInfoTable,
				],
				footers: {
					default: new Footer({
						children: [
							new Paragraph({
								children: [
									new TextRun({
										children: [
											PageNumber.CURRENT,
											' / ',
											PageNumber.TOTAL_PAGES,
										],
									}),
								],
							}),
						],
					}),
				},
			},
		],
	})

	Packer.toBlob(doc).then((blob) => {
		// console.log(blob)
		saveAs(blob, 'example.docx')
		// console.log('Document created successfully')
	})
}
