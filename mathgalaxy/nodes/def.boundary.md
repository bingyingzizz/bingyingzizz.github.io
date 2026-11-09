# 边缘　`def.boundary`
边缘与上边缘：被微分打出来的元素
layer 16 · 定义 · 复形与导出三角 · 同调代数
[在星图里打开](../#n=def.boundary)　·　[节点索引](../index.md)

**在做什么**：把同调公式 $H^{n} = Z^{n}/B^{n}$ 里那个分母说清楚。边缘是**从上一层打过来**的元素 —— 它们是「平凡的闭链」，同调要做的就是把它们除掉。

设 $K$ 是加法范畴 $\mathcal{C}$ 中的复形，微分 $d^{n} : K^{n} \to K^{n+1}$。

**上链情形**：第 $n$ 阶**上边缘群**（coboundaries）是

$$B^{n}(K) := \operatorname{im} d^{n-1} = \{\, d^{n-1}x : x \in K^{n-1} \,\} ,$$
> 陈述续见 [nodes/def.boundary.2.md](./def.boundary.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.cohomology`](../nodes/def.cohomology.md) 同调 用

- …另有出边，续页见 [nodes/def.boundary.4.md](./def.boundary.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.boundary.3.md](./def.boundary.3.md)

refs: Le Stum, An introduction to condensed mathematics；Weibel, An Introduction to Homological Algebra

> 说明见 `notes/def.boundary.md`

引用：`def.boundary`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
