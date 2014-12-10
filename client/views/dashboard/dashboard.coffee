Template.dashboard_layout.rendered = ->
	$('html').addClass('app')
	$('.dropdown-toggle').dropdown()


Template.header.helpers
	fullname: ->  if Meteor.userId() && Meteor.user() && Meteor.user().profile then Meteor.user().profile.name else ''
