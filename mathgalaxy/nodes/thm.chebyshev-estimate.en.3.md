# Chebyshev estimate　`thm.chebyshev-estimate`
English entry · root `../`
[in graph](../#n=thm.chebyshev-estimate)　·　[Chinese page (authoritative)](./thm.chebyshev-estimate.md)

On the other hand, factor $N$ into primes. By Legendre's formula,

$$v_{p}(N) = \sum_{k \ge 1}\left(\left\lfloor\frac{2n}{p^{k}}\right\rfloor - 2\left\lfloor\frac{n}{p^{k}}\right\rfloor\right),$$

Each term is either $0$ or $1$, and given $p^{k} \le 2n$, the number of admissible $k$ is at most $\log(2n)/\log p$. Hence $v_{p}(N) \le \log(2n)/\log p$, that is, $p^{v_{p}(N)} \le 2n$. Thus

$$N = \prod_{p \le 2n} p^{v_{p}(N)} \le (2n)^{\pi(2n)}.$$

Combine this with $N \ge 4^{n}/(2n+1)$ and take logarithms to get

> continued in nodes/thm.chebyshev-estimate.en.4.md
