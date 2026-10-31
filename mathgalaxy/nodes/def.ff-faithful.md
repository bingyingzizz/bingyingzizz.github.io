# 忠实 / 满 / 全忠实　`def.ff-faithful`
忠实、满、全忠实函子
layer 9 · 定义 · 函子与自然变换 · 范畴论
[在星图里打开](../#n=def.ff-faithful)　·　[节点索引](../index.md)

函子 $F : \mathcal{C} \to \mathcal{C}'$ 对每一对对象 $X, Y$ 给出一个映射

$$\operatorname{Hom}_{\mathcal{C}}(X, Y) \longrightarrow \operatorname{Hom}_{\mathcal{C}'}(F(X), F(Y)), \qquad f \mapsto F(f)$$

按这个映射的性质来命名：

- **忠实**（faithful）：每个这样的映射都是单射；
- **满**（full）：每个这样的映射都是满射；
- **全忠实**（fully faithful）：每个这样的映射都是双射。

## 它能推出什么 / 谁在用它
- ⇒ [`def.cat-equivalence`](../nodes/def.cat-equivalence.md) 范畴等价

- …另有出边，续页见 [nodes/def.ff-faithful.3.md](./def.ff-faithful.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.ff-faithful.2.md](./def.ff-faithful.2.md)

refs: Le Stum, An introduction to condensed mathematics, §1.2

> 说明见 `notes/def.ff-faithful.md`

引用：`def.ff-faithful`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
