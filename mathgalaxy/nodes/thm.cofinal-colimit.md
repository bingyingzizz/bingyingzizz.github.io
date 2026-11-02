# 共尾函子不改变余极限　`thm.cofinal-colimit`
共尾 $\implies$ 沿 $F$ 算余极限与沿 $I$ 算同构
layer 14 · 定理 · 图与极限 · 范畴论
[在星图里打开](../#n=thm.cofinal-colimit)　·　[节点索引](../index.md)

设 $F : J \to I$ **共尾**，$D : I \to \mathcal{C}$ 是图。若 $\varinjlim_{j \in J} D(F(j))$ 存在，则 $\varinjlim_{i \in I} D(i)$ 存在，并且

$$\varinjlim_{j \in J} D\bigl(F(j)\bigr) \;\cong\; \varinjlim_{i \in I} D(i).$$

## 为什么成立（入边，证明在 proofs/）
- [`def.limit`](../nodes/def.limit.md) 极限：用到了定义 极限　[proofs/def-dep.cofinalcolim-colimit.md](../proofs/def-dep.cofinalcolim-colimit.md)

- …另有入边，续页见 [nodes/thm.cofinal-colimit.2.md](./thm.cofinal-colimit.2.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/thm.cofinal-colimit.md`

引用：`thm.cofinal-colimit`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
