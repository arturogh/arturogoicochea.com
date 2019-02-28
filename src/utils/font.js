import {Colors} from './colors';

export const font = {
  weight: {
    regular: 300,
    semiBold: 600,
    bold: 900
  },

  size: {
    standard: '1rem',
    small: '.8rem',
    large: '1.6rem'
  },

  color: {
    light: Colors.Black.gray,
    standard: Colors.Black.midGray,
    nearBlack: Colors.Black.nearBlack
  },

  getFontData(fontElement) {
    switch (fontElement) {
      case 'h1':
        return {size: this.size.large, weight: this.weight.bold, color: this.color.dark};
      case 'h2':
        return {size: this.size.large, weight: this.weight.bold, color: this.color.nearBlack};
      case 'h3':
        return {size: this.size.large, weight: this.weight.bold, color: this.color.nearBlack};
      case 'p':
        return {size: this.size.standard, weight: this.weight.regular, color: this.color.standard};
      case 'nav':
        return {size: this.size.small, weight: this.weight.semibold, color: this.color.light};
      case 'siteTitle':
        return {size: this.size.small, weight: this.weight.semibold, color: this.color.standard};
      case 'listingTitle':
        return {size: this.size.standard, weight: this.weight.semiBold, color: this.color.light};
      case 'listingExcerpt':
        return {size: this.size.small, weight: this.weight.regular, color: this.color.light};

      // Home
      case 'homeText':
        return {size: this.size.standard, weight: this.weight.regular, color: this.color.standard};
      case 'homeTitleText':
        return {size: this.size.small, weight: this.weight.regular, color: this.color.light};
      case 'homeTitle':
        return {size: this.size.standard, weight: this.weight.bold, color: this.color.dark};
      case 'homeSubtitle':
        return {size: this.size.small, weight: this.weight.regular, color: this.color.light};
      case 'homeLink':
        return {size: this.size.small, weight: this.weight.regular};

      case 'footerLinks':
        return {size: this.size.small, weight: this.weight.regular, color: this.color.light};
      case 'footerMadeWith':
        return {size: this.size.small, weight: this.weight.regular, color: this.color.light};
      case 'aboutText':
        return {size: this.size.large, weight: this.weight.semibold, color: this.color.nearBlack};
      default:
        console.log('font data not found');
        return null;
    }
  }
};
