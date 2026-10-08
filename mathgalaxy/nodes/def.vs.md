# 向量空间的基　`def.vs`
向量空间 / 线性无关 / 基
layer 8 · 定义 · 向量空间的基 · 抽象代数

设 $K$ 是域，$V$ 是 $K$ 上的向量空间，$S \subseteq V$。

- **$S$ 线性无关**：$S$ 的每个有限子集都线性无关，即不存在不全为零的 $c_{1}$…$c_{n} \in K$ 使 $c_{1}v_{1} + \cdots + c_{n}v_{n} = 0$。
- **$S$ 生成 $V$**：$V$ 中每个向量都是 $S$ 中有限多个向量的线性组合。
- **$S$ 是 $V$ 的基**：$S$ 既线性无关又生成 $V$。
> 陈述续见 `nodes/def.vs.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.field` 域：用到了定义 域　proofs/dep.field-vs.md
- `def.finchar` 有限特征：「有限特征」这个抽象概念，在向量空间里有一个现成的实例　proofs/ana.maximal-apparatus.md
- `def.generated-sigma` 生成的 σ-代数：「取一切包含它的 X 之交」——生成同一个模板　proofs/ana.generated-closure.md

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/def.vs.4.md`

refs: Lang, Linear Algebra

- …另有入边，续页见 `nodes/def.vs.3.md`

## 说明
等价说法：$S$ 是基 $\iff V$ 中每个向量都能唯一地写成 $S$ 的有限线性组合。
