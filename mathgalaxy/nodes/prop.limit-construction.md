# 极限的构造　`prop.limit-construction`
极限 = 无限积 + 等化子
layer 13 · 命题 · 图与极限 · 范畴论

设 $D : I \to \mathcal{C}$ 是**小**图。若 $\mathcal{C}$ 有 $I$ 中对象为指标的所有**积**、以及一对平行映射的**等化子**，则 $\lim D$ 存在，并且可以具体地造出来：

$$X' := \prod_{i \in I} D(i), \qquad X'' := \prod_{\alpha : i \to j} D(j),$$

$$X = \lim D \;\cong\; \operatorname{eq}\Bigl(\; X' \xrightarrow[\;p\;]{\;q\;} X'' \;\Bigr),$$
> 陈述续见 `nodes/prop.limit-construction.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limcon-limit.md
- `def.product` 积 / 余积：用到了定义 积 / 余积　proofs/def-dep.limcon-product.md
- `def.equalizer` 等化子 / 余等化子：用到了定义 等化子 / 余等化子　proofs/def-dep.limcon-equalizer.md

> 说明见 `notes/prop.limit-construction.md`
