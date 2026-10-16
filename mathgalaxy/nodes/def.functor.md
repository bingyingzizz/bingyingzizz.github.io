# 函子　`def.functor`
函子（Functor）
layer 8 · 定义 · 函子与自然变换 · 范畴论
[在星图里打开](../#n=def.functor)　·　[节点索引](../index.md)

从范畴 $\mathcal{C}$ 到范畴 $\mathcal{D}$ 的**函子** $F : \mathcal{C} \to \mathcal{D}$ 由两部分组成：

- 对象上的映射 $X \mapsto F(X)$；
- 态射上的映射 $f \mapsto F(f)$，把 $f : X \to Y$ 送到 $F(f) : F(X) \to F(Y)$。

要求它**保持单位**与**保持复合**：

$$F(1_X) = 1_{F(X)}, \qquad F(g \circ f) = F(g) \circ F(f)$$

（只要 $g \circ f$ 有定义）。反方向的函子 $F : \mathcal{C}^{\mathrm{op}} \to \mathcal{D}$ 叫**反变函子**。

## 它能推出什么 / 谁在用它
- 被 [`lem.yoneda`](../nodes/lem.yoneda.md) 米田引理 用

- …另有出边，续页见 [nodes/def.functor.3.md](./def.functor.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.functor.2.md](./def.functor.2.md)

refs: Le Stum, An introduction to condensed mathematics, §1.2

> 说明见 `notes/def.functor.md`

引用：`def.functor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
