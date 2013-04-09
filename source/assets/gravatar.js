gistURL = "https://api.github.com/gists/5332681";

jQuery.getJSON(gistURL, function(data) {
  var members = [];
  var json_content = data.files["athensworks_members.json"].content;
  members = JSON.parse(json_content);
  
  for (var i = 0; i < members.length; i++) {
    var username = members[i];
    var gravatarURL = "https://secure.gravatar.com/" + username + ".json?callback=embedMember";
    console.log(gravatarURL);
    document.write("<script type='text/javascript' src='" + gravatarURL + "'></script>");
  }
});

function embedMember(data) {
  var profile = data.entry[0];
  var name = profile.name["givenName"] + " " + profile.name["familyName"];
  var profileURL = profile.profileURL;
  var thumbnailURL = profile.thumbnailUrl;
  var aboutMe = jQuery.trim(profile.aboutMe).substring(0, 144).trim(this) + "...";

  console.log(name);
  
  // document.write("<div class='member'>");
  //   document.write("<h3>" + name + "</h3>");
  //   document.write("<p>" + aboutMe + "</p>");
  // document.write("</div>");
  return null;
}