# 两者都是与 $\mathrm{d}$ 交换的次数 $0$ 导子 $\implies$ Cartan 公式
`imp.mf2-cartan-formula` · 推出 · strong 边 · 根 `../`

`def.lie-derivative` Lie 导数 + `def.interior-product` 内乘 + `def.exterior-derivative` 外微分 → `thm.cartan-formula` Cartan 公式

**(3) 两者都与 $\mathrm{d}$ 交换。** $D\mathrm{d} = \mathrm{d}\iota_{X}\mathrm{d} + \iota_{X}\mathrm{d}^{2} = \mathrm{d}\iota_{X}\mathrm{d}$，而 $\mathrm{d}D = \mathrm{d}^{2}\iota_{X} + \mathrm{d}\iota_{X}\mathrm{d} = \mathrm{d}\iota_{X}\mathrm{d}$（用了 $\mathrm{d}^{2} = 0$），故 $D\mathrm{d} = \mathrm{d}D$。$\mathcal{L}_{X}\mathrm{d} = \mathrm{d}\mathcal{L}_{X}$：两边都是对 $t$ 求导，而 $\varphi_{t}^{\ast}\mathrm{d} = \mathrm{d}\varphi_{t}^{\ast}$（拉回与外微分交换，`prop.pullback-forms`）。

> 续见 proofs/imp.mf2-cartan-formula.3.md
