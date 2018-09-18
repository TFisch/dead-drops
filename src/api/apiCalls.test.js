import {
  fetchUserImage,
  fetchDropBoard,
  fetchLocation,
  fetchAccessToken
} from './';

import {
  tokenMock,
  mockRawImage,
  mockBoardResponse,
  mockImageResponse,
  mockLocation,
  mockId,
  tokenAuth
} from '../utilities/mockData';

import { id, key } from '../hidden/hidden';

describe('API Calls', () => {

  describe('fetchUserImage', () => {

    it('should fetch the user Image', async () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200, json: () => Promise.resolve(mockRawImage)
      }));

      await fetchUserImage(tokenMock);
      const url = 'https://api.pinterest.com/v1/users/me/?access_token=AotyU8WH1d1jf6hbf_a5234kjkjfmjpsdFOEBtoWBGwAn_ADAAAabaRTpF9Oppppppp&fields=image%2Cusername';

      expect(window.fetch).toHaveBeenCalledWith(url);

    });

  });

  describe('fetchDropBoard', () => {

    it('should fetch the latest dead drops pins', async () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200, json: () => Promise.resolve(mockBoardResponse)
      }));

      await fetchDropBoard(tokenMock);
      const url = "https://api.pinterest.com/v1/boards/deaddrops/dead-drops/pins/?access_token=AotyU8WH1d1jf6hbf_a5234kjkjfmjpsdFOEBtoWBGwAn_ADAAAabaRTpF9Oppppppp&fields=id%2Clink%2Cnote%2Curl%2Cimage";

      expect(window.fetch).toHaveBeenCalledWith(url);

    });
  });

  describe('fetchLocation', () => {

    it('should return an image object when called', async () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200, json: () => Promise.resolve(mockImageResponse)
      }));

      const url = `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:S%7Cundefined,undefined&key=${key}`;

      await fetchLocation(mockLocation);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should display a catch error when a problem has occcured', () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200, json: () => Promise.resolve(tokenMock)
      }));


    });
  });

  describe('postPin', () => {

    it('should post a pin to the dead drops board', () => {

    });

  });

  describe('fetchAccessToken', () => {

    it.skip('should retrieve an access token for the user', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200, json: () => Promise.resolve(tokenMock)
      }));

      const url = `https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4987807426915878592&client_secret=4b6305e8od12b2e30386a2ee5546e8a2a6bde854e3c2190fc323da077e98f1e3&code=qwekrj43-kpkl;khbf_a5234kjkjfmjpsdFOEBtoWBGwAn_ADAAAabaRTpF9Oppppppp",{"headers": {"Content-Type": "application/x-www-form-urlencoded "}, "method": "POST"}`;

      await fetchAccessToken(mockId, tokenAuth);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });
  });

});



