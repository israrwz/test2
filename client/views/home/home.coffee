Template.homepage_layout.rendered = ->
	#SEO Page Title & Description
	$('html').removeClass('app')
	document.title = "TaskWall"
	$("<meta>", { name: "description", content: "TaskWall, better task management" }).appendTo "head"
	afx()

