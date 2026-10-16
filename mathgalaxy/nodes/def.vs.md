# 向量空间的基　`def.vs`
向量空间 / 线性无关 / 基
layer 8 · 定义 · 向量空间的基 · 抽象代数
[在星图里打开](../#n=def.vs)　·　[节点索引](../index.md)

设 $K$ 是域，$V$ 是 $K$ 上的向量空间，$S \subseteq V$。

- **$S$ 线性无关**：$S$ 的每个有限子集都线性无关，即不存在不全为零的 $c_{1}$…$c_{n} \in K$ 使 $c_{1}v_{1} + \cdots + c_{n}v_{n} = 0$。
- **$S$ 生成 $V$**：$V$ 中每个向量都是 $S$ 中有限多个向量的线性组合。
- **$S$ 是 $V$ 的基**：$S$ 既线性无关又生成 $V$。

注意线性无关性是**逐有限子集**定义的性质——这正是它「具有有限特征」的原因。

## 它能推出什么 / 谁在用它
- 被 [`thm.vsbasis`](../nodes/thm.vsbasis.md) 每个向量空间有基 用

- …另有出边，续页见 [nodes/def.vs.3.md](./def.vs.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.vs.2.md](./def.vs.2.md)

refs: Lang, Linear Algebra

## 说明
等价说法：$S$ 是基 $\iff V$ 中每个向量都能唯一地写成 $S$ 的有限线性组合。

引用：`def.vs`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
