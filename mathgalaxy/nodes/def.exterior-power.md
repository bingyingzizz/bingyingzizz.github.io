# 外幂　`def.exterior-power`
外幂 $\bigwedge^{k} V$
layer 11 · 定义 · 多重线性与张量 · 抽象代数
[在星图里打开](../#n=def.exterior-power)　·　[节点索引](../index.md)

设 $V$ 是 $K$-向量空间。$V$ 的 **$k$ 次外幂** $\bigwedge^{k} V$ 是 $V^{\otimes k}$ 商掉由

$$v_1 \otimes \cdots \otimes v_k \quad \text{with}\ v_i = v_j\ (i \ne j)$$

张成的子空间所得的商空间；记像为 $v_1 \wedge \cdots \wedge v_k$。于是

$$v \wedge v = 0, \qquad v \wedge w = -\, w \wedge v$$

并且 $\dim \bigwedge^{k} V = \binom{n}{k}$（$n = \dim V$）；$k > n$ 时 $\bigwedge^{k}V = 0$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.exterior-power.2.md](./def.exterior-power.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.exterior-power.3.md](./def.exterior-power.3.md)

refs: Lang, Algebra, Ch. XIX；Roman, Advanced Linear Algebra, Ch. 14

> 说明见 `notes/def.exterior-power.md`

引用：`def.exterior-power`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
