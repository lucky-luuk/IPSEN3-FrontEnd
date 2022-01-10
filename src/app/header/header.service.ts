export class HeaderService {
  private afkotheekHeaderOptions = [
    {
      name: 'Afkotheek',
      rout: '/afko'
    },
    {
      name: 'Game',
      rout: '/game'
    },
    {
      name: 'support',
      rout: '/support'
    }
  ];

  private moderatorHeaderOptions = [
    {
      name: 'Overzicht'
    },
    {
      name: 'Instellingen'
    },
    {
      name: 'Zoek'
    }
  ]

  getAfkotheekHeaderOptions() {
    return this.afkotheekHeaderOptions;
  }

  getModeratorHeaderOptions() {
    return this.moderatorHeaderOptions;
  }

}
