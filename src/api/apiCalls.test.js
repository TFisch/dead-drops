import { fetchUserImage } from './'
import { mockImage, tokenMock, mockRawImage } from '../utilities/mockData'


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




});



