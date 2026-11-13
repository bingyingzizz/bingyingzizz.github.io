# Arzelà–Ascoli theorem　`thm.arzela-ascoli`
English entry · root `../`
[in graph](../#n=thm.arzela-ascoli)　·　[Chinese page (authoritative)](./thm.arzela-ascoli.md)

## Notes · **draft**
**Proof (diagonal argument)**: since $X$ is compact, $\implies$ one may take a countable dense set $\{x_{1}, x_{2}, \ldots\}$. By uniform boundedness, $\{f_{n}(x_{1})\}$ has a convergent subsequence; from it choose a subsequence for which $\{f_{n}(x_{2})\}$ converges; continuing layer by layer and taking the diagonal $g_{k} := f_{n_{k}}$, we get that $g_{k}(x_{j})$ converges for every $j$.

**Upgrading pointwise convergence to uniform convergence**: given $\varepsilon$, use equicontinuity to choose $\delta$; cover $x_{1}, \ldots, x_{N}$ by finitely many $\delta$-balls $X$.

> continued in nodes/thm.arzela-ascoli.en.4.md
