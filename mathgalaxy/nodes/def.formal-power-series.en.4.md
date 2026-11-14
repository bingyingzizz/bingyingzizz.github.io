# formal power series　`def.formal-power-series`
English entry · root `../`
[in graph](../#n=def.formal-power-series)　·　[Chinese page (authoritative)](./def.formal-power-series.md)

**Invertibility**: $\sum a_n x^n$ is invertible in $R[[x]]$ $\iff$ $a_0$ is a unit of $R$. The inverse is given recursively by $b_0 = a_0^{-1}$ and $b_n = -a_0^{-1}\sum_{k=1}^{n} a_k b_{n-k}$.

**Composition**: composition is defined only when the inner series $g$ has constant term $0$ (that is, $g \in xR[[x]]$); then the value $f(g(x))$ is defined, while otherwise one would have to handle infinitely many substitutions.

**Formal derivative**: $D\bigl(\sum a_n x^n\bigr) := \sum_{n \ge 1} n a_n x^{n-1}$, which satisfies the product rule and uses no limit.

> continued in nodes/def.formal-power-series.en.5.md
