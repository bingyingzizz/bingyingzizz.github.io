# imp.yoneda
`imp.yoneda` · 推出 · strong 边 · 根 `../`

`def.functor` 函子 + `def.natural-transformation` 自然变换 + `def.representable` 表示函子 → `lem.yoneda` 米田引理

}(f) = F(f)\bigl(\alpha_{X}(1_{X})\bigr) = \Psi\bigl(\Phi(\alpha)\bigr)_{Y}(f) ✓$$
- **自然性**：$\Phi$ 对 $F$ 自然（沿 $\beta : F\to G$ 两边都变成 $\beta_{X}\circ(-)$）✓；对 $X$ 也自然（沿 $k : X'\to X$，$h^{k}$ 的前复合与 $F(k)$ 对应）✓。
于是 $\operatorname{Hom}(h^{X}, F) \cong F(X)$，双射就是 $\alpha\mapsto\alpha_{X}(1_{X})$ ✓；对偶地（取 $\mathcal{C}^{\mathrm{op}}$）得预层版本 $\operatorname{Hom}(h_{X}, T) \cong T(X)$ ✓。

> 续见 proofs/imp.yoneda.3.md
