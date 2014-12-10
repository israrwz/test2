
Template.newTeam.events
	"click .btn-save": ->
		form={}
		$.each $('#newTeamForm').serializeArray(), ->
			form[this.name] = this.value;
		
		Meteor.call 'saveTeam', EJSON.stringify form.name, EJSON.stringify form.description, EJSON.stringify form.visibility,  (error, result) ->
			if error.error == "team-exists"
				alert "A Team with this name already exists."
			else
				#console.log 'saved'
				Router.go('list-teams')