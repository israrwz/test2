
Template.newTeam.events
	"click .btn-save": ->
		form={}
		$.each $('#newTeamForm').serializeArray(), ->
			form[this.name] = this.value;
		
		Meteor.call 'saveTeam', form.name, form.description, form.visibility,  (error, result) ->
			if error.error == "team-exists"
				alert "A Team with this name already exists."
			else
				#console.log 'saved'
				Router.go('list-teams')
