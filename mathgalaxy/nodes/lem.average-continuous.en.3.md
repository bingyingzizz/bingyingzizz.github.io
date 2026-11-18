# the averaging operator is jointly continuous　`lem.average-continuous`
English entry · root `../`
[in graph](../#n=lem.average-continuous)　·　[Chinese page (authoritative)](./lem.average-continuous.md)

The second term tends to $0$. Indeed, $\omega_n r_k^n \to \omega_n r_0^n > 0$, so the coefficient tends to $0$, while $\int_{B(x_0,r_0)} f$ is constant.

**Step 2. Find a dominating function.** Choose $\delta = 1/2$. If $|x - x_0| < 1/2$ and $|r - r_0| < 1/2$, then $r < r_0 + 1/2$, and $|y - x| < r$ implies

$$|y - x_0| \le |y - x| + |x - x_0| < r + 1/2 < r_0 + 1,$$

that is, $B(x,r) \subseteq B(x_0, r_0 + 1)$. Thus for such $(x,r)$ and every $y$,

$$|\chi_{B(x,r)}(y) - \chi_{B(x_0,r_0)}(y)|\,|f(y)| \le \chi_{B(x_0, r_0+1)}(y)\,|f(y)| \in L^1.$$

> continued in nodes/lem.average-continuous.en.4.md
