

export class UsersModel {
  id: string;
  org_id?: string;
  status?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  roles?: [];

  constructor() {
    this.org_id = 'binnenlandse zaken';
    this.status = 'actief';
    this.firstName = 'Henk';
    this.lastName = 'Duif';
    this.id = '35007A69';
    this.email = "henk.duif.overheid@gmail.com";
    this.phoneNumber = "+31 61889542";
  }
}
