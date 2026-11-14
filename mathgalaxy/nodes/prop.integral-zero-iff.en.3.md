# integral zero iff zero almost everywhere　`prop.integral-zero-iff`
English entry · root `../`
[in graph](../#n=prop.integral-zero-iff)　·　[Chinese page (authoritative)](./prop.integral-zero-iff.md)

And $\{f > 0\} = \bigcup_{n \ge 1} A_{n}$ is a countable union of null sets, so $\mu(\{f>0\}) = 0$, i.e. $f = 0$ a.e. ✓. ∎

Incidentally: $\{f = +\infty\} \subseteq \{f>0\}$ is handled at the same time.

$(\Longleftarrow )$ It suffices that $f$ vanish off a null set; every simple function $\varphi \le f$ in the infimum is then almost everywhere zero, hence $\int \varphi = 0$.

$(\implies )$ Put $A_n = \{f > 1/n\}$; then $(1/n)\cdot\mu(A_n) \le \int f = 0$, so $\mu (A_{n}) = 0$; and $\{f > 0\} = \bigcup_n A_n$ is null.

> continued in nodes/prop.integral-zero-iff.en.4.md
