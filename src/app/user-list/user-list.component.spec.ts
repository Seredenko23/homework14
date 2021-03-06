import {UserListComponent} from './user-list.component';
import {of} from 'rxjs';

describe('userList', () => {
  it('should assign user in the users variable', () => {
    const api = jasmine.createSpyObj('ApiService', ['getUsers']);
    const fakedata = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
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
      }
    ];

    api.getUsers.and.returnValue(of(fakedata));

    // @ts-ignore
    const cmp = new UserListComponent(api);
    cmp.ngOnInit();

    expect(cmp.users).toEqual(fakedata);
  });
});
