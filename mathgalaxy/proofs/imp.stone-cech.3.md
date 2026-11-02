# 构造 $\beta X$ 并验证泛性质
`imp.stone-cech` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.compact` 紧 → `prop.chaus-reflective` 紧 Haus 是反射子范畴

$$(\pi_{g} \circ \widehat{f}) := \pi_{g \circ f} : [0,1]^{C(X,[0,1])} \longrightarrow [0,1]$$

即「把第 $g$ 个坐标读成 $g \circ f$ 那个坐标」。每个分量连续，所以 $\widehat{f}$ 连续；在 $e_{X}(x)$ 上验证：

$$\bigl(\pi_{g} \circ \widehat{f}\bigr)\bigl(e_{X}(x)\bigr) = (g \circ f)(x) = \pi_{g}\bigl(j_{K}(f(x))\bigr)$$

所以 $\widehat{f} \circ e_{X} = j_{K} \circ f$，即 $f = \widehat{f} \circ e_{X}$（把 $K$ 与它在方块里的像等同）。

**落回 $K$ 里。** 还差 $\widehat{f}(\beta X) \subseteq j_{K}(K)$。

只需在稠密的 $e_{X}(X)$ 上验：由上式 $\widehat{f}(e_{X}(x)) = j_{K}(f(x)) \in j_{K}(K)$。

> 续见 proofs/imp.stone-cech.4.md
