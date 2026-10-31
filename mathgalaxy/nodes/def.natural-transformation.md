# 自然变换　`def.natural-transformation`
自然变换
layer 9 · 定义 · 函子与自然变换 · 范畴论
[在星图里打开](../#n=def.natural-transformation)　·　[节点索引](../index.md)

设 $F, G : \mathcal{C} \to \mathcal{D}$ 是两个函子。从 $F$ 到 $G$ 的**自然变换** $\alpha : F \implies G$ 是一族态射

$$\alpha_X : F(X) \to G(X) \qquad (X \in \mathcal{C})$$

使得对每条 $f : X \to Y$，方块交换：

$$G(f) \circ \alpha_X = \alpha_Y \circ F(f)$$

每个 $\alpha_X$ 都是同构时，$\alpha$ 叫**自然同构**，记 $F \cong G$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.natural-transformation.2.md](./def.natural-transformation.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.natural-transformation.3.md](./def.natural-transformation.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.2

> 说明见 `notes/def.natural-transformation.md`

引用：`def.natural-transformation`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
