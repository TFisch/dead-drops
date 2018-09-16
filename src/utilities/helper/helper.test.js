import { cleanImage } from '../helper'

describe('helper', () => {
  describe('cleanImage', () => {
    it('should return a profile object with the correct properties', () => {
      const mockRawImage = {
        data: {
          id: '21903992',
          image: {
            '60x60': {
              height: 60,
              url: "https://i.pinimg.com/60x60_RS/6",
              width: 60,
            },
          },
          username: "Al Borlin"
        }
      }

      const expected = {
        username: mockRawImage.data.username,
        image: 'https://i.pinimg.com/60x60_RS/6'
      }

      expect(cleanImage(mockRawImage)).toEqual(expected)
    });
  });
});