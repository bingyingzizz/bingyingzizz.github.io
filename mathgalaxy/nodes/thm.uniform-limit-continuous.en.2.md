# a uniform limit of continuous functions is continuous　`thm.uniform-limit-continuous`
English entry · root `../`
[in graph](../#n=thm.uniform-limit-continuous)　·　[Chinese page (authoritative)](./thm.uniform-limit-continuous.md)

## Notes · **draft**
⭐ The standard three $\varepsilon/3$ trick: $|f(x) - f(x_0)| \le |f(x) - f_n(x)| + |f_n(x) - f_n(x_0)| + |f_n(x_0) - f(x_0)|$.

The first and third terms use **uniform convergence** (the same $n$ works for both points at once), the second uses continuity of $f_n$.

⚠ Pointwise convergence **does not preserve continuity** ($x^{n}$ on $[0, 1]$), and this is the most important of the three: uniform convergence exists precisely so that a global property such as continuity can pass through the limit.

> continued in nodes/thm.uniform-limit-continuous.en.3.md
