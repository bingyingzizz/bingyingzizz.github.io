# Cartan 公式　`thm.cartan-formula`　·　说明
根 `../`

**为什么物理里爱用它**：$\mathcal{L}_{X}$ 是沿流的变化率，$\mathrm{d}\iota_{X}$ 给出**恰当**部分，而 $\iota_{X}\mathrm{d}$ 一般**不闭**（$\mathbb{R}^{2}$、$X = \partial_{x}$、$\omega = x^{2}\mathrm{d}y$ 时 $\iota_{X}\mathrm{d}\omega = 2x\,\mathrm{d}y$，$\mathrm{d}(2x\,\mathrm{d}y) = 2\,\mathrm{d}x \wedge \mathrm{d}y \ne 0$）。像「场的对称性」这类陈述（$\mathcal{L}_{X}F = 0$）以及规范变换的存在性，都从这条公式出发。

**两个边界情形**：$k = 0$ 时 $\iota_{X}f = 0$，故 $\mathcal{L}_{X}f = \iota_{X}\mathrm{d}f = \mathrm{d}f(X) = Xf$，与 `def.lie-derivative` 的第一条一致；

$k = n$ 时 $\mathrm{d}\omega = 0$，故 $\mathcal{L}_{X}\omega = \mathrm{d}\iota_{X}\omega$ 恰当 —— 这是「体积沿流的变率等于散度乘体积」那条公式的起点。

> 续见 notes/thm.cartan-formula.3.md
