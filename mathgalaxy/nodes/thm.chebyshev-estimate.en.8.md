# Chebyshev estimate　`thm.chebyshev-estimate`
English entry · root `../`
[in graph](../#n=thm.chebyshev-estimate)　·　[Chinese page (authoritative)](./thm.chebyshev-estimate.md)

**From integers to reals.** Let $x \ge 2$ be real and set $m := \lfloor x \rfloor$. Then $\pi(x) = \pi(m)$. When $m \ge 16$, the function $t/\log t$ is increasing on $[16, \infty)$, so $m/\log m \le x/\log x$ and the upper bound carries over directly. This only gives $\pi(x) \ge 0.3\,m/\log m$ for the lower bound, so use $x/\log x \le (1+1/m)\,m/\log m$ instead (by $x < m+1$). When $m \ge 16$, the factor satisfies $1+1/m < 1.07$, so $\pi(x) > \frac{0.3}{1.07}\,x/\log x > 0.28\,x/\log x$. When $m < 16$, check the integers individually ($\pi$ is piecewise constant and $t/\log t$ increases on $[3, \inft

> continued in nodes/thm.chebyshev-estimate.en.9.md
