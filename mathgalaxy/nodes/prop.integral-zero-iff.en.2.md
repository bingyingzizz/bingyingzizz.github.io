# integral zero iff zero almost everywhere　`prop.integral-zero-iff`
English entry · root `../`
[in graph](../#n=prop.integral-zero-iff)　·　[Chinese page (authoritative)](./prop.integral-zero-iff.md)

**$(\Longleftarrow)$** If $f = 0$ a.e., then every simple function $\varphi \le f$ also vanishes a.e. (at points where $f = 0$ we have $\varphi = 0$), so $\int \varphi = 0$; taking the supremum over all such $\varphi$ gives $\int f = 0$ ✓.

**$(\implies)$** Suppose $\int f = 0$. For each $n \ge 1$ put $A_{n} := \{f > 1/n\}$ (measurable). From $\frac1n\chi_{A_{n}} \le f$ we get

$$\frac1n\,\mu(A_{n}) \le \int f\,\mathrm{d}\mu = 0 \implies \mu(A_{n}) = 0 .$$

> continued in nodes/prop.integral-zero-iff.en.3.md
