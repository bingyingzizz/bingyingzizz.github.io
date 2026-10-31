# 两者都是与 $\mathrm{d}$ 交换的次数 $0$ 导子 $\implies$ Cartan 公式
`imp.mf2-cartan-formula` · 推出 · strong 边 · 根 `../`

`def.lie-derivative` Lie 导数 + `def.interior-product` 内乘 + `def.exterior-derivative` 外微分 → `thm.cartan-formula` Cartan 公式

**(4) 在函数上相等。** 对 $f \in C^{\infty}(M)$：$Df = \mathrm{d}\bigl(\iota_{X}f\bigr) + \iota_{X}\mathrm{d}f = 0 + \mathrm{d}f(X) = Xf = \mathcal{L}_{X}f$。

**唯一性收尾。** 一个保次数 $0$、与 $\mathrm{d}$ 交换的导子，由它在 $C^{\infty}(M)$ 上的值决定：局部任意 $k$-形式是 $\sum f_{0}\,\mathrm{d}g_{1}\wedge\cdots\wedge\mathrm{d}g_{k}$ 的有限和（每个系数写成这样的形状靠 $k$-形式的局部展开），而导子性给出

$$D(f_{0}\,\mathrm{d}g_{1}\wedge\cdots\wedge\mathrm{d}g_{k}) = D(f_{0})\,\mathrm{d}g_{1}\wedge\cdots + f_{0}\,D(\mathrm{d}g_{1}\wedge\cdots\wedge\mathrm{d}g_{k}),$$

> 续见 proofs/imp.mf2-cartan-formula.4.md
