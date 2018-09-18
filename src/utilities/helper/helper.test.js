import { cleanUserImage } from '../helper';
import { mockRawImage } from '../mockData';

describe('helper', () => {
  describe('cleanImage', () => {
    it('should return a profile object with the correct properties', () => {

      const expected = {
        username: mockRawImage.data.username,
        image: 'https://i.pinimg.com/60x60_RS/6'
      };

      expect(cleanUserImage(mockRawImage)).toEqual(expected);
    });

  });
});


