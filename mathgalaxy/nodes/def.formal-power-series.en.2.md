# formal power series　`def.formal-power-series`
English entry · root `../`
[in graph](../#n=def.formal-power-series)　·　[Chinese page (authoritative)](./def.formal-power-series.md)

## Statement · **draft**
Let $R$ be a commutative ring. A **formal power series** over $R$ is a sequence of coefficients $(a_n)_{n \ge 0}$ with $a_n \in R$, written formally as
$$\sum_{n \ge 0} a_n x^n .$$
It lives in $R[[x]]$: addition is termwise, and multiplication is the Cauchy product
$$\Bigl(\sum a_n x^n\Bigr)\Bigl(\sum b_n x^n\Bigr) := \sum_{n \ge 0}\Bigl(\sum_{k=0}^{n} a_k b_{n-k}\Bigr)x^n .$$
Here $x$ is only a **formal variable**; $x$ is not evaluated, and no question of convergence is asked.

> continued in nodes/def.formal-power-series.en.3.md
