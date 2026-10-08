# 序数可比　`thm.ordinal-trichotomy`
序数的三歧性：$\in$ 在 $\mathrm{On}$ 上是良序
layer 8 · 定理 · 序数与超限 · 集合论

对任意两个序数 $\alpha, \beta$，下式**恰有一个**成立：

$$\alpha \in \beta, \qquad \alpha = \beta, \qquad \beta \in \alpha$$

特别地，$\in$ 在序数全体上是**良序**：任意非空的一族序数都有最小元。

## 为什么成立（入边，证明在 proofs/）
- `def.ordinal` 序数 + `ax.found` 正则公理：序数的定义 $\implies$ 三歧性　proofs/imp.ordinal-trichotomy.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.wellorder-ordinal` 良序集的序型
- ⇒ `thm.burali-forti` 序数全体是真类

refs: Kunen, Set Theory, I.11

> 说明见 `notes/thm.ordinal-trichotomy.md`
