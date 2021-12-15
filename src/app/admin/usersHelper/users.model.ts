

export class UsersModel {
  userid: string;
  org_id: string;
  status: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;

  constructor() {
    this.org_id = 'binnenlandse zaken';
    this.status = 'actief';
    this.firstname = 'Henk';
    this.lastname = 'Duif';
    this.userid = '35007A69';
    this.email = "henk.duif.overheid@gmail.com";
    this.phoneNumber = "+31 61889543";
  }
}
