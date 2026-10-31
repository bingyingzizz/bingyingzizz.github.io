# Archimedes 性质　`lem.archimedean`
阿基米德性质与 $\mathbb{Q}$ 的稠密性
layer 14 · 引理 · 实数的运算与不等式 · 数学分析+集合论
[在星图里打开](../#n=lem.archimedean)　·　[节点索引](../index.md)

设 $K$ 是一个**完备有序域**（比如 $\mathbb{R}$）。则：

**(i) 阿基米德性质**：自然数在 $K$ 中没有上界 ——

$$\forall x \in K,\ \exists n \in \mathbb{N} : n > x$$

**(ii) $\mathbb{Q}$ 在 $K$ 中稠密**：任意两个元素之间都夹着一个有理数 ——

$$\forall x, y \in K,\ x < y \implies \exists q \in \mathbb{Q} : x < q < y$$
> 陈述续见 [nodes/lem.archimedean.2.md](./lem.archimedean.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`cor.archimedean-epsilon`](../nodes/cor.archimedean-epsilon.md) Archimedes 的 ε 形式与取整

- …另有出边，续页见 [nodes/lem.archimedean.4.md](./lem.archimedean.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/lem.archimedean.3.md](./lem.archimedean.3.md)

refs: Tao, Analysis I, Ch. 5（实数的构造）；Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/lem.archimedean.md`

引用：`lem.archimedean`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
