Teams = new Mongo.Collection('teams');

Meteor.methods  
	saveTeam: (name, description, visibility) ->  
		if ! this.userId
			throw new Meteor.Error("not-logged-in", "Must be logged in to post a comment.")
		if Teams.findOne({name: name})
			throw new Meteor.Error("team-exists", "A team with this name already exists.")
		else
			Teams.insert
				createdBy: this.userId,
				name: name,
				description: description,
				visibility: visibility
			#return 'completed'
			#console.log team