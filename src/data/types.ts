export interface ImageItem {
  id: string;
  imgLink: string;
}

export interface EducationSectionData {
  sectionTitle: string;
  schoolImgArray?: ImageItem[];
  gradImgArray?: ImageItem[];
  pgImgArray?: ImageItem[];
  schoolName: string;
  siteLink: string;
  schoolDescription: string;
}

export interface PortfolioData {
  education: {
    schoolData: EducationSectionData;
    graduationData: EducationSectionData;
    pgData: EducationSectionData;
  };
}