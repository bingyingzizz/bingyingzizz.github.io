# Gauss 引理 $\Longrightarrow$ 二次互反律（数矩形里的整点）
`imp.gauss-qr-quadratic-reciprocity` · 推出 · strong 边 · 根 `../`

`lem.gauss-qr` Gauss 引理（二次剩余） → `thm.quadratic-reciprocity` 二次互反律

**② 两个和数的是什么**。固定 $i \le \frac{p-1}{2}$，矩形里满足 $j p < i q$ 的 $j \ge 1$ 恰有 $\lfloor iq/p \rfloor$ 个（因为 $iq/p < q/2$，它们自动 $\le \frac{q-1}{2}$）。所以 $\sum_{i} \lfloor iq/p \rfloor$ 数的是直线 $p y = q x$ **下方**的整点数，$\sum_{j} \lfloor jp/q \rfloor$ 数**上方**的整点数。

**③ 相加**。矩形 $\{1 \le i \le \frac{p-1}{2}\} \times \{1 \le j \le \frac{q-1}{2}\}$ 共有 $\frac{p-1}{2} \cdot \frac{q-1}{2}$ 个整点，且没有点落在直线上（$iq = jp$、$p \ne q$ 为素数、$i < p$，矛盾），故两和相加恰是这个数。代回 ①：$\left(\frac{q}{p}\right)\left(\frac{p}{q}\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}$。∎
