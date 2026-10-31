# 两者都是与 $\mathrm{d}$ 交换的次数 $0$ 导子 $\implies$ Cartan 公式
`imp.mf2-cartan-formula` · 推出 · strong 边 · 根 `../`

`def.lie-derivative` Lie 导数 + `def.interior-product` 内乘 + `def.exterior-derivative` 外微分 → `thm.cartan-formula` Cartan 公式

记 $D := \mathrm{d}\,\iota_{X} + \iota_{X}\,\mathrm{d}$，要证 $D = \mathcal{L}_{X}$ 作用在 $\Omega^{\bullet}(M)$ 上。分四步。

**(1) 两者都保次数。** $\mathrm{d}$ 次数 $+1$、$\iota_{X}$ 次数 $-1$，故 $D$ 次数 $0$；$\mathcal{L}_{X}$ 由拉回定义，而拉回保次数。

**(2) 两者都是导子。** $\mathcal{L}_{X}$：$\varphi_{t}^{\ast}(\omega\wedge\eta) = \varphi_{t}^{\ast}\omega\wedge\varphi_{t}^{\ast}\eta$，对 $t$ 求导即得 Leibniz 律。$D$：$\mathrm{d}$ 是 $+1$ 次**反导子**，$\iota_{X}$ 是 $-1$ 次**反导子**（`def.interior-product` 的第 1 条），两个反导子的复合是次数 $0$ 的导子，两个导子之和仍是导子。

> 续见 proofs/imp.mf2-cartan-formula.2.md
