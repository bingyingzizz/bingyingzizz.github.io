# interchange of derivative and uniform limit　`thm.uniform-limit-derivative`
English entry · root `../`
[in graph](../#n=thm.uniform-limit-derivative)　·　[Chinese page (authoritative)](./thm.uniform-limit-derivative.md)

⚠ Assuming only $f_n \rightrightarrows f$ is **not enough**: $f_n(x) = \frac{\sin(nx)}{n}$ converges uniformly to $0$, while $f_n'(x) = \cos(nx)$ converges nowhere.

⭐ The proof uses the mean value theorem: apply Lagrange to $\frac{f_n(x) - f_n(x_0)}{x - x_0}$ to replace the difference quotient by $f_n'$ at some point, then let $n \to \infty$ using uniform convergence of $f_n'$.

> Proofs of the edges are still Chinese only: `proofs/`; the Chinese page remains authoritative.


Cite: `thm.uniform-limit-derivative` (content v0.9.3) · CC BY 4.0: [LICENSE.txt](../LICENSE.txt)

