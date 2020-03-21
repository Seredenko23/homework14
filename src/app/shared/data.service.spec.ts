import {DataService} from './data.service';
import {TestBed} from '@angular/core/testing';

describe('DataService', () => {
  let dataService: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    });

    dataService = TestBed.get(DataService);
  });

  it('should ', () => {
    const fakedata = [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum'
      },
    ];

    dataService.changeData(fakedata)

    dataService.currentData.subscribe(data => {
      expect(data).toEqual(fakedata);
    });
  });

})
