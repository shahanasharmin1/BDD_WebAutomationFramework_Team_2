package runner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(

        features = {"src/main/java/features/BankOfAmericaLogIn.feature"},
        glue = "step_definitions",
        plugin = {"pretty","json:target/cucumber-reports/cucumber.json","html:target/cucumber-reports"},
        strict = true,
        monochrome = true,
        dryRun = false,
       //tags = "(@SmokeTest) and (not pending)"
          tags=""
        //tags = "(@SmokeTest or @Regression) and (not @pending)"
  //        tags = {"@SmokeTest or @Regression and not @pending"}




)




public class TestRunner {







}
