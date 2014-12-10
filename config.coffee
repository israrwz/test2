Router.configure
  layoutTemplate: 'dashboard_layout'
  loadingTemplate: 'loading'
  yieldTemplates:
    header:
      to: 'header'
    footer:
      to: 'footer'
    aside:
      to: 'aside'
    homepage_header:
      to: 'homepage_header'
    homepage_footer:
      to: 'homepage_footer'
  onBeforeAction: ->
    $('meta[name^="description"]').remove()
    #alert(Meteor.user())
    if /dashboard/i.test(Router.current().path) and (!(Meteor.loggingIn() || Meteor.user())) 
      window.location.replace("/sign-in")
    else
      this.next()



Router.map ->
  @route 'home',
    path: '/',
    layoutTemplate: 'homepage_layout',
    template: 'homepage_index'

  # @route 'register',
  #   path: '/register',
  #   layoutTemplate: 'homepage_layout',
  #   template: 'register'

                              # @route 'entrySignIn',
                              #   path: '/login',
                              #   layoutTemplate: 'homepage_layout',
                              #   data: ->
                              #     return {contentclass: 'bg-primary dker padder-v', customcss: '.bg-primary a {color: #428bca !important}'}

                              # @route 'entryForgotPassword',
                              #   path: '/forgot',
                              #   layoutTemplate: 'homepage_layout',
                              #   data: ->
                              #     return {contentclass: 'bg-primary dker padder-v', customcss: '.bg-primary a {color: #428bca !important}'}



                              # @route 'entrySignUp',
                              #   path: '/register',
                              #   layoutTemplate: 'homepage_layout',
                              # #   template: 'register'

                              # # @route 'register-seeker',
                              # #   path: '/register-seeker',
                              # #   layoutTemplate: 'homepage_layout',
                              #   template: 'entrySignUp'
                              #   onBeforeAction: ->
                              #     AccountsEntry.config
                              #       homeRoute: '/'
                              #       dashboardRoute: '/dashboard'
                              #       language: 'en'
                              #       showSignupCode: false
                              #       extraSignUpFields: [
                              #         {field: "name", name: "", label: "Full Name", placeholder: "Amanullah Khan", type: "text", required: true}
                              #       ]
                              #     T9n.map 'en',
                              #       createAccount: 'User Registration'
                              #     this.next()
                              #   data: ->
                              #     return {contentclass: 'bg-info lt padder-v', customcss: '.bg-info a {color: #428bca !important}'}


                              # @route 'register-provider',
                              #   path: '/register-provider',
                              #   layoutTemplate: 'homepage_layout',
                              #   template: 'entrySignUp'
                              #   onBeforeAction: ->
                              #     AccountsEntry.config
                              #       homeRoute: '/'
                              #       dashboardRoute: '/dashboard'
                              #       language: 'en'
                              #       showSignupCode: false
                              #       extraSignUpFields: [
                              #         {field: "name", name: "abc", label: "Full Name", placeholder: "Amanullah Khan", type: "text", required: true
                              #           },{
                              #          field: "organization", organization: "xyz", label: "Organization", placeholder: "Amanullah Inc", type: "text", required: true
                              #         },{
                              #          field: "reg_type", reg_type: "provider", label: " ", placeholder: "ff", type: "hidden"
                              #         }]
                              #     T9n.map 'en',
                              #       createAccount: 'Job Provider Registration'
                              #     this.next()
                              #   data: ->
                              #     return {contentclass: 'bg-info lt padder-v', customcss: '.bg-info a {color: #428bca !important}'}


  @route 'dashboard',
    path: '/dashboard'

  @route 'new-task',
    path: '/dashboard/new-task'

  @route 'list-teams',
    path: '/dashboard/list-teams'

  @route 'new-team',
    path: '/dashboard/new-team'



  @route 'notFound',
    path: '*'
    layoutTemplate: 'homepage_layout',
    template: 'errorpage'

