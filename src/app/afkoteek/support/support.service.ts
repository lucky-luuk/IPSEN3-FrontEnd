export class SupportService{
  private supportOption = [
    {
      type: 'request',
      name: 'Informatie verzoek'
    },
    {
      type: 'report',
      name: 'Fout Melden'
    },
    {
      type: 'add',
      name: 'Afkorting toevoegen'
    }
  ];

  getOptions() {
    return this.supportOption;
  }
}
