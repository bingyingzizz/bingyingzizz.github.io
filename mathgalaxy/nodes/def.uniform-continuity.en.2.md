# uniform continuity　`def.uniform-continuity`
English entry · root `../`
[in graph](../#n=def.uniform-continuity)　·　[Chinese page (authoritative)](./def.uniform-continuity.md)

The only difference from "continuous" is the **order** of the quantifiers: here $\delta$ appears before $\forall x$, so one and the same $\delta$ must work simultaneously for all points of $X$.

## Notes · **draft**
⭐ In one sentence: continuity gives "a $\delta$ for each point", uniform continuity gives "one $\delta$ that works for all of $X$".

⚠ The two are **not equivalent**: $f(x) = x^{2}$ is continuous on $\mathbb{R}$, but for $x = n$, $x' = n + 1/n$ one has $|f(x) - f(x')| = 2 + 1/n^{2} > 2$, which no $\delta$, however small, can avoid — so it is not uniformly continuous.

$f(x) = 1/x$ on $(0, 1)$ is the same.

> continued in nodes/def.uniform-continuity.en.3.md
