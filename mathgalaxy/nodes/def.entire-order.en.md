# order and type of an entire function　`def.entire-order`
English entry · root `../`
[in graph](../#n=def.entire-order)　·　[Chinese page (authoritative)](./def.entire-order.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 31 · definition · cluster Analytic Continuation and Entire Functions (`analysis.entire`) · Complex Analysis

## Statement · **draft**
Let $f$ be an entire function. Its **order** is defined by

$$\rho := \limsup_{r \to \infty} \frac{\log^{+} \log^{+} M(r)}{\log r},\qquad M(r) := \max_{|z| = r} |f(z)|.$$

where $\log^{+} x = \max(\log x, 0)$. If $0 < \rho < \infty$, one further defines the **type**

$$\sigma := \limsup_{r \to \infty} \frac{\log^{+} M(r)}{r^{\rho}} \in [0, \infty].$$

> continued in nodes/def.entire-order.en.2.md
