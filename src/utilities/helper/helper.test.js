import { cleanUserImage, cleanLocationImage } from '../helper';
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

    it.skip('should return an image object with the correct properties', () => {

      const mockBlob = new Blob(["poop"], { size: 3509, type: "image/png" });
      const result = cleanLocationImage(mockBlob);

      expect(result.type()).toEqual(string);
    });
  });
});


