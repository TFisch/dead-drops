import { fetchUserImage, fetchDropBoard, fetchLocation } from './'
import { tokenMock, mockRawImage, mockBoardResponse, mockImageResponse, mockLocation } from '../utilities/mockData'
import { id, key } from '../hidden/hidden'

describe('API Calls', () => {

  describe('fetchUserImage', () => {

    it('should fetch the user Image', async () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200, json: () => Promise.resolve(mockRawImage)
      }));

      await fetchUserImage(tokenMock);
      const url = 'https://api.pinterest.com/v1/users/me/?access_token=AotyU8WH1d1jf6hbf_a5234kjkjfmjpsdFOEBtoWBGwAn_ADAAAabaRTpF9Oppppppp&fields=image%2Cusername'

      expect(window.fetch).toHaveBeenCalledWith(url);

    });

  });

  describe('fetchDropBoard', () => {

    it('should fetch the latest dead drops pins', async () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200, json: () => Promise.resolve(mockBoardResponse)
      }));

      await fetchDropBoard(tokenMock);
      const url = "https://api.pinterest.com/v1/boards/deaddrops/dead-drops/pins/?access_token=AotyU8WH1d1jf6hbf_a5234kjkjfmjpsdFOEBtoWBGwAn_ADAAAabaRTpF9Oppppppp&fields=id%2Clink%2Cnote%2Curl%2Cimage"

      expect(window.fetch).toHaveBeenCalledWith(url);

    });
  });

  describe('fetchLocation', () => {

    it('should return an image object when called', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200, json: () => Promise.resolve(mockImageResponse)
      }));

      const url = `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:S%7Cundefined,undefined&key=${key}`

      await fetchLocation(mockLocation)

      expect(window.fetch).toHaveBeenCalledWith(url);
    });
  });

  describe('postPin', () => {

    it('should post a pin to the dead drops board', () => {

    });

  });

  describe('fetchAccessToken', () => {

  });

});



