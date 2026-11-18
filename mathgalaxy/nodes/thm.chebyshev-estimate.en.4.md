# Chebyshev estimate　`thm.chebyshev-estimate`
English entry · root `../`
[in graph](../#n=thm.chebyshev-estimate)　·　[Chinese page (authoritative)](./thm.chebyshev-estimate.md)

$$\pi(2n) \ge \frac{n\log 4 - \log(2n+1)}{\log(2n)} = \frac{\log 4}{2}\cdot\frac{2n}{\log(2n)} - \frac{\log(2n+1)}{\log(2n)}.$$

For $x := 2n \ge 16$, we have $\log(2n+1)/\log(2n) \le 2$ and $2\log x/x \le 2\log 16/16 < 0.7$, so $\pi(x) \ge 1.386\,x/\log x - 2 \ge (1.386 - 0.693)\,x/\log x > 0.3\,x/\log x$. For odd $x = 2n+1 \ge 17$, we have $\pi(x) \ge \pi(2n) \ge 0.3\cdot 2n/\log(2n)$. Also, $x/\log x \le \frac{x}{2n}\cdot\frac{2n}{\log(2n)}$ and $\frac{x}{2n} = 1+\frac{1}{2n} < 1.07$, giving $\pi(x) > \frac{0.3}{1.07}\,x/\log x > 0.28\,x/\log x$.

> continued in nodes/thm.chebyshev-estimate.en.5.md
