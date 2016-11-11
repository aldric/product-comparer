import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let banks = [
        { id: 11, name: 'BforBank' },
        { id: 12, name: 'Monabanq' },
        { id: 13, name: 'ING Direct' },
        { id: 14, name: 'Boursorama' },
        { id: 15, name: 'Plop bank' },
        { id: 16, name: 'youpi bank' },
        { id: 17, name: 'super bank' },
        { id: 18, name: 'The bank' }
      ];
    return {banks};
  }
}