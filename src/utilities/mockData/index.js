export const tokenMock = 'AotyU8WH1d1jf6hbf_a5234kjkjfmjpsdFOEBtoWBGwAn_ADAAAabaRTpF9Oppppppp'
export const mockId = '4b6305e8od12b2e30386a2ee5546e8a2a6bde854e3c2190fc323da077e98f1e3';
export const tokenAuth = 'qwekrj43-kpkl;khbf_a5234kjkjfmjpsdFOEBtoWBGwAn_ADAAAabaRTpF9Oppppppp'
export const mockUsername = "Harvey";
export const mockPropsMethod = jest.fn();
export const mockImage = 'https://via.placeholder.com/350x150';

export const userReducerMock = { username: 'clark', image: 'https://via.placeholder.com/350x150' }
export const mockUser = { username: mockUsername, image: mockImage };

export const mockUserResponse = {
  data:
  {
    id: "864409859636963034",
    image: 'im',
    username: "deaddrops"
  }
}

export const mockLocation = {
  long: '3214321504',
  lat: '2.52343245',
  locationImage: 'https://via.placeholder.com/350x150',
  verificationCode: [0, 0, 0, 0, 0, 0]
};

export const mockLocationReducer = {
  longitude: '3214321504',
  latitude: '2.52343245',
  image: 'https://via.placeholder.com/350x150',
  verificationCode: [0, 0, 0, 0, 0, 0]
};

export const mockRawImage = {
  data: {
    id: '21903992',
    image: {
      '60x60': {
        height: 60,
        url: "https://i.pinimg.com/60x60_RS/6",
        width: 60
      },
    },
    username: "Al Borlin"
  }
}

export const mockBoardResponse = {
  data: [{ mockBoard: 'mockBoard' }]
}

export const mockBoardResponseFull = [{ mockBoard: 'mockBoard' }]


export const mockImageResponse = {
  size: 3509,
  type: "image/png"
}

export const mockCardData = {
  note: 'mockNote',
  url: 'www.mock.com',
  id: '2232003',
  link: '',
  image: 'mockImage.com'
}
