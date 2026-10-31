# 偏导数　`def.partial-derivative`
偏导数
layer 16 · 定义 · 多元微分 · 数学分析
[在星图里打开](../#n=def.partial-derivative)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 是开集，$f : U \to \mathbb{R}^{m}$，$a \in U$。$f$ 在 $a$ 处关于第 $j$ 个变元的**偏导数**是（若该极限存在）

$$\frac{\partial f}{\partial x_j}(a) := \lim_{h \to 0} \frac{f(a + h e_j) - f(a)}{h}$$

其中 $e_j$ 是第 $j$ 个标准基向量。也就是说，**只让第 $j$ 个坐标动**，其余固定，就是一个一元导数。
> 陈述续见 [nodes/def.partial-derivative.2.md](./def.partial-derivative.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.directional-derivative`](../nodes/def.directional-derivative.md) 方向导数 用

- …另有出边，续页见 [nodes/def.partial-derivative.4.md](./def.partial-derivative.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.partial-derivative.3.md](./def.partial-derivative.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Spivak, Calculus on Manifolds, Ch. 2

> 说明见 `notes/def.partial-derivative.md`

引用：`def.partial-derivative`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
