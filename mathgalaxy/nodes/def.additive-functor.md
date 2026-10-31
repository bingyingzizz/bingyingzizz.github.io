# 加法函子　`def.additive-functor`
加法函子
layer 9 · 定义 · 加法与阿贝尔范畴 · 同调代数
[在星图里打开](../#n=def.additive-functor)　·　[节点索引](../index.md)

设 $\mathcal{C}, \mathcal{D}$ 是两个**预加性范畴**。函子 $F : \mathcal{C} \to \mathcal{D}$ 叫**加法函子**，如果对每对 $M, N \in \mathcal{C}$，映射

$$\operatorname{Hom}_{\mathcal{C}}(M, N) \longrightarrow \operatorname{Hom}_{\mathcal{D}}(F(M), F(N)), \qquad f \longmapsto F(f)$$

是**阿贝尔群同态**（即保加法、保 $0$）。

## 它能推出什么 / 谁在用它
- 被 [`thm.watts`](../nodes/thm.watts.md) 张量函子的刻画 用

- …另有出边，续页见 [nodes/def.additive-functor.3.md](./def.additive-functor.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.additive-functor.2.md](./def.additive-functor.2.md)

refs: Le Stum, An introduction to condensed mathematics, §5.1–5.2

> 说明见 `notes/def.additive-functor.md`

引用：`def.additive-functor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
