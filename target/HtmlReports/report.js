$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/GoogleSeatch.feature");
formatter.feature({
  "name": "feature to test google search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate google search is working",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "browser window is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.browser_is_open()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: E:\\Eclipses\\Demo\\CucumberJava\\src\\test\\resources\\drivers\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:589)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:154)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:149)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:36)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:195)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:389)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:118)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:105)\r\n\tat StepsDefinitions.GoogleSearchSteps.browser_is_open(GoogleSearchSteps.java:28)\r\n\tat ✽.browser window is open(file:///E:/Eclipses/Demo/CucumberJava/src/test/resources/Features/GoogleSeatch.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.user_is_on_google_search_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a text in search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.user_enters_a_text_in_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.hits_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to search results",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.GoogleSearchSteps.user_is_navigated_to_search_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "feature to test login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepsDefinitions.LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepsDefinitions.LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.LoginSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
});