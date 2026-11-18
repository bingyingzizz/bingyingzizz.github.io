# Runge approximation theorem　`thm.runge`
English entry · root `../`
[in graph](../#n=thm.runge)　·　[Chinese page (authoritative)](./thm.runge.md)

**Step 2: Moving the poles.** Suppose $b,b^{\prime}$ lie in the same component of $\mathbb{C}\setminus K$, denoted by $\Omega$. Take a polygonal path in $\Omega$ from $b$ to $b^{\prime}$, and choose points $b = b_{0}, b_{1}, \ldots, b_{N} = b^{\prime}$ along it such that $|b_{i+1} - b_{i}| < \operatorname{dist}(b_{i},K)$. For $z\in K$, we have $|b_{i}-z| \ge \operatorname{dist}(b_{i},K) > |b_{i+1}-b_{i}|$, so the geometric series $\frac{1}{b_{i+1} - z} = \frac{1}{b_{i} - z}\cdot\frac{1}{1 - \frac{b_{i}-b_{i+1}}{b_{i}-z}} = \sum_{k=0}^{\infty}\frac{(b_{i}-b_{i+1})^{k}}{(b_{i}-z)^{k+1}}$ converges uniformly on $K$ (with common ratio $\le q_{i} < 1$)

> continued in nodes/thm.runge.en.9.md
