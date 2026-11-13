# Cauchy condensation test　`thm.cauchy-condensation`
English entry · root `../`
[in graph](../#n=thm.cauchy-condensation)　·　[Chinese page (authoritative)](./thm.cauchy-condensation.md)

## Notes · **draft**
⭐ It formalizes **grouping by powers of $2$**: replace every term whose index lies in $[2^{k}, 2^{k+1})$ by the smallest term of that block ($a_{2^{k+1}}$) or the largest one ($a_{2^{k}}$), and squeeze from both sides.

⭐ A demonstration of its power: the convergence of $\sum \frac{1}{n \ln n}$ — after condensation it becomes $\sum \frac{2^{k}}{2^{k} \ln 2^{k}} = \frac{1}{\ln 2}\sum \frac{1}{k}$, which is plainly **divergent**.

⚠ The hypothesis is that $a_n$ is non-negative and **decreasing** (that is what makes the block replacement valid).

> continued in nodes/thm.cauchy-condensation.en.3.md
