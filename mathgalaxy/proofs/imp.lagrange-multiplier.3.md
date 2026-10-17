# 切空间 = $\ker Dg(a)$ + 极值 $\implies$ 乘子存在
`imp.lagrange-multiplier` · 推出 · strong 边 · 根 `../`

`thm.regular-value` 正则值原像定理 → `thm.lagrange-multiplier` Lagrange 乘子法

**引理（因子化）**：若线性映射 $S : E \to F$ 满射、线性型 $\ell : E \to K$ 满足 $\ker S \subseteq \ker \ell$，则 $\ell$ 可分解为 $\ell = \lambda \circ S$，其中 $\lambda : F \to K$ 线性。

**引理的证明**：由秩–零化度，$S$ 诱导线性同构 $\overline S : E/\ker S \to F$；而 $\ker S \subseteq \ker \ell$ 说明 $\ell$ 穿过商，给出 $\overline \ell : E/\ker S \to K$。取 $\lambda := \overline \ell \circ \overline S^{-1}$ 即可。∎（引理）

> 续见 proofs/imp.lagrange-multiplier.4.md
