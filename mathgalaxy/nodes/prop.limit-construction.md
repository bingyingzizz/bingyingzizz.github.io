# 极限的构造　`prop.limit-construction`
极限 = 无限积 + 等化子
layer 13 · 命题 · 图与极限 · 范畴论
[在星图里打开](../#n=prop.limit-construction)　·　[节点索引](../index.md)

设 $D : I \to \mathcal{C}$ 是**小**图。若 $\mathcal{C}$ 有 $I$ 中对象为指标的所有**积**、以及一对平行映射的**等化子**，则 $\lim D$ 存在，并且可以具体地造出来：

$$X' := \prod_{i \in I} D(i), \qquad X'' := \prod_{\alpha : i \to j} D(j),$$

$$X = \lim D \;\cong\; \operatorname{eq}\Bigl(\; X' \xrightarrow[\;p\;]{\;q\;} X'' \;\Bigr),$$
> 陈述续见 [nodes/prop.limit-construction.2.md](./prop.limit-construction.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.limit-construction.3.md](./prop.limit-construction.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/prop.limit-construction.md`

引用：`prop.limit-construction`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
