import {ApiService} from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpClientTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    apiService = TestBed.get(ApiService);
    httpClientTestingController = TestBed.get(HttpTestingController)
  });

  it('should return list of users', () => {
    const fakeUsers = [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      }];

    apiService.getUsers().subscribe(data => {
      expect(data).toEqual(fakeUsers);
    });

    const request = httpClientTestingController.expectOne(apiService.BASE_URL + '/users');

    expect(request.request.method).toBe('GET');

    request.flush(fakeUsers);
  });

  it('should return list of posts', () => {
    const fakePosts = [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum'
      },
    ];

    apiService.getPosts(1).subscribe(data => {
      expect(data).toEqual(fakePosts);
    });

    const request = httpClientTestingController.expectOne(apiService.BASE_URL + `/posts?userId=${1}`);

    expect(request.request.method).toBe('GET');

    request.flush(fakePosts);
  });
})
