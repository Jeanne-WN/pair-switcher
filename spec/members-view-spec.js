describe('Members View', function(){
  'use strict';

  var membersView;

  beforeEach(function(){
    setFixtures('<div class="members-list"></div>');
    membersView = new MembersView($('.members-list'));
  });

  describe('draw', function(){
    it('should draw a member', function(){
      membersView.draw([{name: 'test', isTyro: false}]);

      var result = $('.members-list'),
          renderedMembers = $('li', result);

      expect(result).toContainElement('ul.list-unstyled');
      expect(renderedMembers.length).toBe(1);
      expect(renderedMembers[0]).toHaveClass('clearfix');
      expect(renderedMembers).toContainText('test');
    });

    it('should draw tyro members in members list container', function(){
      membersView.draw([{name: 'test', isTyro: true}]);

      var result = $('.members-list'),
          renderedMembers = $('li', result);

      expect(result).toContainElement('ul.list-unstyled');
      expect(renderedMembers.length).toBe(1);
      expect(renderedMembers[0]).toHaveClass('clearfix');
      expect(renderedMembers).toContainText('test(Tyro)');
    });

    it('should draw all members in members list container', function(){
      membersView.draw([{name: 'first', isTyro: false}, {name: 'second', isTyro: true}]);

      var result = $('.members-list'),
          renderedMembers = $('li', result);

      expect(renderedMembers.length).toBe(2);
      expect(renderedMembers[0]).toContainText('first');
      expect(renderedMembers[1]).toContainText('second(Tyro)');

    });

    it('should remove all preivous members', function(){
      membersView.draw([{name: 'first', isTyro: false}]);
      membersView.draw([{name: 'second', isTyro: false}]);

      var result = $('.members-list'),
          renderedMembers = $('li', result);

      expect(renderedMembers.length).toBe(1);
      expect(renderedMembers[0]).toHaveClass('clearfix');
      expect(renderedMembers).toContainText('second');
    });

    it('should draw nothing when members list is empty', function(){
      membersView.draw([]);

      var result = $('.members-list'),
          renderedMembers = $('li', result);

      expect(result).not.toContainElement('ul.list-unstyled');
      expect(renderedMembers.length).not.toBe(1);
    });

  });
});
