yarn

with bail option is set to 1, run all the 3 scenarios

yarn test:cucumber

```
[0-0] Error in "Check bail option: First error: Then I see "first error""
expected '' to equal 'first error'
[0-0] Error in "Check bail option: Second error: Then I see "second error""
expected '' to equal 'second error'
[0-0] PASSED
[0-0] FAILED in chrome - /features/multiple_failures.feature

```

bail option can be either 0 or 1 but passing the cucubmer option runs correctly only 1 scenario

yarn test:cucumber --cucumberOpts.failFast=true

```
[0-0] Error in "Check bail option: First error: Then I see "first error""
expected '' to equal 'first error'
[0-0] FAILED in chrome - /features/multiple_failures.feature
```
