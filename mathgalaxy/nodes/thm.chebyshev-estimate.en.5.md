# Chebyshev estimate　`thm.chebyshev-estimate`
English entry · root `../`
[in graph](../#n=thm.chebyshev-estimate)　·　[Chinese page (authoritative)](./thm.chebyshev-estimate.md)

**Upper bound.** First estimate $\theta$. For even $n = 2r$, the product of the primes in $(r, 2r]$ divides $\binom{2r}{r} \le 4^{r}$, so

$$\theta(2r) - \theta(r) \le 2r\log 2.$$

For odd $n = 2r+1$, the product of the primes in $(r+1, 2r+1]$ divides $\binom{2r+1}{r}$. Since binomial coefficients of odd degree occur in equal pairs, $2\binom{2r+1}{r} \le 2^{2r+1}$, so $\binom{2r+1}{r} \le 2^{2r}$, that is,

$$\theta(2r+1) - \theta(r+1) \le 2r\log 2.$$

> continued in nodes/thm.chebyshev-estimate.en.6.md
