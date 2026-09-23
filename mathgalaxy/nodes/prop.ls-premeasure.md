# F 给出的预测度　`prop.ls-premeasure`
命题：单调右连续的 F 给出半开区间上的预测度
layer 15 · 命题 · 测度的构造 · 分析学

设 $F : \mathbb{R} \to \mathbb{R}$ 是**递增**且**右连续**的函数。在半开区间的全体上定义

$$\mu_0( (a, b] ) = F(b) - F(a)$$

（并规定 $\mu _{0}(\emptyset ) = 0$，扩充到由这些区间做有限不交并得到的代数 $\mathfrak{A}$ 上。）则 $\mu _{0}$ 是 $\mathfrak{A}$ 上的一个**预测度**。

## 为什么成立（入边，证明在 proofs/）
- `def.premeasure` 预测度：用到了定义 预测度　proofs/def-link.premeasure-ls-premeasure.md
- `def.fundamental-class` 基本类：用到了定义 基本类　proofs/def-link.fundamental-class-ls-premeasure.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.ls-exists` F ↔ Borel 测度

refs: Folland, Real Analysis, Theorem 1.16

> 说明见 `notes/prop.ls-premeasure.md`
