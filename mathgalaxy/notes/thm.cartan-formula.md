# Cartan 公式　`thm.cartan-formula`　·　说明
根 `../`

**证明的形状**（写在边上）：两边都是「与 $\mathrm{d}$ 交换的次数 $0$ 的导子」，所以只要在函数上验一遍 —— 这是 Cartan 公式三行证完的原因。注意「与 $\mathrm{d}$ 交换」在左边用了「流拉回与外微分交换」，在右边用了 $\mathrm{d}^{2} = 0$。

**它是「同伦算子」的原型**：$\mathrm{d}\iota_{X} + \iota_{X}\mathrm{d} = \mathcal{L}_{X}$ 的形状与 Poincaré 引理的 $\mathrm{d}K + K\mathrm{d} = \operatorname{id}$（`lem.poincare-lemma`）完全一样 —— 都把「求导」拆成两条链映射之和。差别在于 $\mathcal{L}_{X}$ 不必是 $\operatorname{id}$：给定 $\mathcal{L}_{X}$ 后想解 $\iota_{X}\omega = \eta$，就是一个「同伦方程」。

**为什么物理里爱用它**：$\mathcal{L}_{X}$ 是沿流的变化率，$\mathrm{d}\iota_{X}$ 与 $\iota_{X}\mathrm{d}$ 分掉了「恰当部分」与「闭部分」。像「场的对称性」这类陈述（$\mathcal{L}_{X}F = 0$）以及规范变换的存在性，都从这条公式出发。

> 续见 notes/thm.cartan-formula.2.md
