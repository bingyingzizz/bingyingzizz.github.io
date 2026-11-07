# Gauss 引理 $\Longrightarrow$ 二次互反律（数矩形里的整点）
`imp.gauss-qr-quadratic-reciprocity` · 推出 · strong 边 · 根 `../`

`lem.gauss-qr` Gauss 引理（二次剩余） → `thm.quadratic-reciprocity` 二次互反律

**① Eisenstein 形式**。Gauss 引理（`lem.gauss-qr`）给 $(q/p) = (-1)^{\mu}$，$\mu$ 是 $q, 2q, \ldots, \frac{p-1}{2}q$ 的最小正剩余里 $> p/2$ 的个数。把它换成更好数的形式：由「大于 $p/2$ 的剩余 $r$ 换成 $p - r$ 后得到 $1, \ldots, \frac{p-1}{2}$ 的一个排列」比较两边之和，得 $\mu \equiv \sum_{i=1}^{(p-1)/2} \lfloor iq/p \rfloor$（模 $2$：比较两边之和得 $\mu \equiv (1-q)\frac{p^{2}-1}{8} + S$，其中 $S = \sum_{i}\lfloor iq/p \rfloor$、$\frac{p^{2}-1}{8}$ 是整数、$q-1$ 是偶数，故第一项为偶，$\mu \equiv S$）。

> 续见 proofs/imp.gauss-qr-quadratic-reciprocity.2.md
