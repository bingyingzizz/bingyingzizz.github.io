# 符号与交错群　`def.alternating-group`
置换的符号与交错群
layer 11 · 定义 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=def.alternating-group)　·　[节点索引](../index.md)

每个 $\sigma \in S_n$ 都能写成**对换**（两个点的交换）之积，且所用对换个数的**奇偶性**与分解方式无关。据此定义**符号**

$$\operatorname{sgn}(\sigma) := (-1)^{k} \quad (\sigma = \text{$k$ 个对换之积})$$

等价公式（不含分解的任意性）

$$\operatorname{sgn}(\sigma) = \prod_{1 \le i < j \le n} \frac{\sigma(j) - \sigma(i)}{j - i} \in \{\pm 1\}$$
> 陈述续见 [nodes/def.alternating-group.2.md](./def.alternating-group.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`prop.sn-solvable`](../nodes/prop.sn-solvable.md) 对称群的可解性

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.alternating-group.3.md](./def.alternating-group.3.md)

refs: Lang, Algebra, Ch. I §5；Dummit–Foote, Abstract Algebra, §3.5

> 说明见 `notes/def.alternating-group.md`

引用：`def.alternating-group`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
