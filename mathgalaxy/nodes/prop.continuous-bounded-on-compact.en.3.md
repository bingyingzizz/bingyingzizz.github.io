# continuous on a compact set implies bounded　`prop.continuous-bounded-on-compact`
English entry · root `../`
[in graph](../#n=prop.continuous-bounded-on-compact)　·　[Chinese page (authoritative)](./prop.continuous-bounded-on-compact.md)

**Proof** (by contradiction + sequential compactness).

Suppose $f$ is unbounded; then for every $n$ there is $x_n \in X$ with $|f(x_n)| > n$.

$X$ compact $\implies$ sequentially compact, so $\{x_n\}$ has a subsequence $x_{n_k} \to x^{*} \in X$;

$f$ continuous gives $f(x_{n_k}) \to f(x^{*})$, and a convergent sequence is bounded, so there is $M$ with $|f(x_{n_k})| \le M$ for all $k$.

On the other hand, by construction $|f(x_{n_k})| > n_k \to \infty$, a contradiction.

∎

> continued in nodes/prop.continuous-bounded-on-compact.en.4.md
