import {PostListComponent} from './post-list.component';
import {of} from 'rxjs';

describe('postList', () => {
  it('should assign posts in the posts variable', () => {
    const data = jasmine.createSpyObj('DataService', ['currentData']);
    const fakedata = [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum'
      },
    ];

    data.currentData = of(fakedata);

    const cmp = new PostListComponent(data);
    cmp.ngOnInit();

    expect(cmp.posts).toEqual(fakedata);
  });
});
