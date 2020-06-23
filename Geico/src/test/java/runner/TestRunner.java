package runner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/main/java/features"},
        glue = "step_definitions",
        plugin = {"pretty","json:target/cucumber-reports/cucumber.json","html:target/cucumber-reports"},
        strict = true,
        monochrome = true,
        dryRun = false,
        tags = "@Test4"

)

public class TestRunner {
}
