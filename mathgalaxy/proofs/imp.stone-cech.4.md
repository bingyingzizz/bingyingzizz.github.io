# 构造 $\beta X$ 并验证泛性质
`imp.stone-cech` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.compact` 紧 → `prop.chaus-reflective` 紧 Haus 是反射子范畴

$$\bigl(\pi_{g} \circ \widehat{f}\bigr)\bigl(e_{X}(x)\bigr) = (g \circ f)(x) = \pi_{g}\bigl(j_{K}(f(x))\bigr)$$

所以 $\widehat{f} \circ e_{X} = j_{K} \circ f$，即 $f = \widehat{f} \circ e_{X}$（把 $K$ 与它在方块里的像等同）。

**落回 $K$ 里。** 还差 $\widehat{f}(\beta X) \subseteq j_{K}(K)$。只需在稠密的 $e_{X}(X)$ 上验：由上式 $\widehat{f}(e_{X}(x)) = j_{K}(f(x)) \in j_{K}(K)$。而 $j_{K}(K)$ 在方块里是紧的因而闭，取闭包即得 $\widehat{f}(\beta X) \subseteq j_{K}(K)$。

**唯一性。** 两个这样的 $\widehat{f}$ 在稠密的 $e_{X}(X)$ 上相等，而目标是 Hausdorff，所以处处相等。∎

> 关键只有两处：**Tychonoff 定理**给出紧性，**$T_{3.5}$ 性**保证 $e_{K}$ 是单射（否则「落回 $K$ 里」那一步没意义）。
