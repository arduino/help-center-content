---
title: "Error: Java.lang.StackOverflowError"
id: 360016724180
---

The Arduino environment does some preliminary processing on your sketch by manipulating the code using regular expressions. This sometimes gets confused by certain strings of text. If you see an error like:

```
java.lang.StackOverflowError
at java.util.Vector.addElement(Unknown Source)
at java.util.Stack.push(Unknown Source)
at com.oroinc.text.regex.Perl5Matcher._pushState(Perl5Matcher.java)
```

or:

```
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
at com.oroinc.text.regex.Perl5Matcher._match(Perl5Matcher.java)
```

This is what's happening: unusual sequences involving "double-quotes", "single-quotes", \backslashes, comments, etc. can cause the errors. For example, missing quotes can cause problems and so can the sequence '\"' (use '"' instead).
