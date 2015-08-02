describe('Team', function(){
  'use strict';

  var testStorage = 'testTeam',
      team;

  beforeEach(function(){
    team = new Team(testStorage);
  });

  afterEach(function(){
    window.localStorage.removeItem(testStorage);
  });

  describe('add', function(){
    it('should add data to localStorage', function(){
      expect(window.localStorage.getItem(testStorage)).toBe(null);

      var test = {name: 'test'};
      team.add(test);

      var data = JSON.parse(window.localStorage.getItem(testStorage));
      expect(data).toEqual([test]);
    });

    it('should add member to team', function(){
      var first  = {name: 'first'},
          second = {name: 'second'}
      team.add(first);
      team.add(second);

      var data = JSON.parse(window.localStorage.getItem(testStorage));
      expect(data).toEqual([first, second]);
    });
  });

  describe('members', function(){
    it('should return all team members', function(){
      expect(team.members()).toEqual([]);

      var first = {name: 'first'};
      team.add(first);

      expect(team.members()).toEqual([first]);

      var second = {name: 'second'};
      team.add(second);

      expect(team.members()).toEqual([first, second]);
    });
  });
});
