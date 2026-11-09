# 闭链　`def.cycle`
闭链与上闭链：被微分杀掉的元素
layer 15 · 定义 · 复形与导出三角 · 同调代数
[在星图里打开](../#n=def.cycle)　·　[节点索引](../index.md)

**在做什么**：把同调公式 $H^{n} = Z^{n}/B^{n}$ 里那个分子说清楚。闭链就是**被微分杀掉**的元素 —— 整门同调代数都在问「杀掉的里面，有多少是真的来了、有多少是绕了远路」。

设 $K$ 是加法范畴 $\mathcal{C}$ 中的复形，微分 $d^{n} : K^{n} \to K^{n+1}$（`def.cochain-complex`）。

**上链情形**：第 $n$ 阶**上闭链群**（cocycles）是

$$Z^{n}(K) := \ker d^{n} = \{\, x \in K^{n} : d^{n}x = 0 \,\} ;$$
> 陈述续见 [nodes/def.cycle.2.md](./def.cycle.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.cohomology`](../nodes/def.cohomology.md) 同调 用

- …另有出边，续页见 [nodes/def.cycle.4.md](./def.cycle.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.cycle.3.md](./def.cycle.3.md)

refs: Le Stum, An introduction to condensed mathematics；Weibel, An Introduction to Homological Algebra

> 说明见 `notes/def.cycle.md`

引用：`def.cycle`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
