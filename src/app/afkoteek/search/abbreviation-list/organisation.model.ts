
export class OrganisationModel {
  public static readonly DEFAULT_ID = "NONE";
  public static readonly DEFAULT_NAME = "NONE";

  id : string;
  name : string;

  constructor() {
    this.id = OrganisationModel.DEFAULT_ID;
    this.name = OrganisationModel.DEFAULT_NAME;
  }

}
