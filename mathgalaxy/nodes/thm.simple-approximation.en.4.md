# approximation by simple functions　`thm.simple-approximation`
English entry · root `../`
[in graph](../#n=thm.simple-approximation)　·　[Chinese page (authoritative)](./thm.simple-approximation.md)

have $n < f$ ✓; elsewhere it is zero ✓;
- **Monotonicity**: when $n \to n+1$, the intervals are refined by $2^{-(n+1)}$ and the ceiling rises from $n$ to $n+1$; a pointwise check gives $\varphi_{n} \le \varphi_{n+1}$ ✓;
- **Pointwise convergence**: if $f(x) < \infty$, choose $n > f(x)$ so that $0 \le f(x)-\varphi_{n}(x) \le 2^{-n} \to 0$; if $f(x) = +\infty$, then $\varphi_{n}(x) = n \to \infty$ ✓;
- **Uniform on bounded sets**: if $f \le M$, choose $n > M$; the same estimate gives $|f-\varphi_{n}| \le 2^{-n}$, independent of $x$ ✓.
**(b)** For a general measurable $f$: writ

> continued in nodes/thm.simple-approximation.en.5.md
