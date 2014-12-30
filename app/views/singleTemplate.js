var show = function(request, response, params, templateName) {
  response.render(templateName, params);
};

module.exports.show = show;