# Baer's Criterion　`thm.baer-criterion`
English entry · root `../`
[in graph](../#n=thm.baer-criterion)　·　[Chinese page (authoritative)](./thm.baer-criterion.md)

If $A_{1} \ne B$, take $b \in B \setminus A_{1}$ and set

$$J := \{\, r \in R : r b \in A_{1} \,\}, \qquad h : J \to I, \quad h(r) := f_{1}(r b).$$

$J$ is a left ideal and $h$ is $R$-linear. By hypothesis there is $x \in I$ with $h(r) = r x$ ($\forall r \in J$). Define $f_{2}(a + r b) := f_{1}(a) + r x$.

**Well-defined**: if $a + r b = a_{1} + r_{1} b$, then $(r - r_{1}) b = a_{1} - a \in A_{1}$, hence $r - r_{1} \in J$, so $f_{1}((r - r_{1})b) = f_{1}(a_{1} - a)$, i.e. $f_{1}(a) + r x = f_{1}(a_{1}) + r_{1} x$ ✓.

This contradicts maximality, hence $A_{1} = B$ ✓.

∎

> continued in nodes/thm.baer-criterion.en.4.md
