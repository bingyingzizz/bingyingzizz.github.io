# Hurwitz theorem　`thm.hurwitz`
English entry · root `../`
[in graph](../#n=thm.hurwitz)　·　[Chinese page (authoritative)](./thm.hurwitz.md)

⚠ What is needed is "uniform convergence on every compact set" (compact-uniform), not pointwise convergence. For pointwise convergence the conclusion fails.

⭐ The proof uses a small closed disc plus Rouché: if $f$ has a zero at $z_0$, choose $r$ so that $f$ has no other zero in $\overline{B(z_0, r)}$, and let $m = \min_{|z - z_0| = r}|f| > 0$; uniform convergence of $f_k$ gives $|f_k - f| < m \le |f|$ on the circle, and Rouché transfers the zero of $f$ to $f_k$, a contradiction.

> continued in nodes/thm.hurwitz.en.4.md
