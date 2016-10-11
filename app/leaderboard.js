console.log("Hello World");

PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'selectedClass': function() {
      let playerID = this._id;
      let selectedPlayer = Session.get('selectedPlayer');
      if (playerID === selectedPlayer) {
        return 'selected';
      }
    }
  });
  Template.leaderboard.events({
    'click .player': function(){
      let playerID = this._id;
      Session.set('selectedPlayer', playerID);
    }
  });
}

if (Meteor.isServer){
  // no code
}


