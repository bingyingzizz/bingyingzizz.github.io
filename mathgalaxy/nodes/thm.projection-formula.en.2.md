# best approximation and the projection formula　`thm.projection-formula`
English entry · root `../`
[in graph](../#n=thm.projection-formula)　·　[Chinese page (authoritative)](./thm.projection-formula.md)

$$P_U v = \sum_{j=1}^{k} \langle e_j, v \rangle\, e_j, \qquad \|v\|^{2} = \|P_U v\|^{2} + \|v - P_U v\|^{2} \ge \sum_{j=1}^{k} |\langle e_j, v \rangle|^{2}$$

(the last statement is **Bessel's inequality**).

## Notes · **draft**
⭐ The geometric meaning of "best approximation": $P_U v$ is the point of $U$ **closest** to $v$, and "closest" is well defined by the norm coming from the inner product.

This is the common source of least squares and of Fourier series (truncating to the first $n$ terms is optimal).

> continued in nodes/thm.projection-formula.en.3.md
