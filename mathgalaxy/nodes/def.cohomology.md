# 同调　`def.cohomology`
同调
layer 13 · 定义 · 同调与正合列 · 同调代数
[在星图里打开](../#n=def.cohomology)　·　[节点索引](../index.md)

设 $\mathcal{A}$ 是阿贝尔范畴，$K$ 是 $\mathcal{A}$ 中的上链复形。$K$ 的**第 $n$ 阶同调**是

$$H^{n}(K) \;:=\; Z^{n}(K) \big/ B^{n}(K) \;=\; \ker d^{n} \big/ \operatorname{im} d^{n-1}$$
> 陈述续见 [nodes/def.cohomology.2.md](./def.cohomology.2.md)


## 它能推出什么 / 谁在用它
- 被 [`thm.universal-coefficients`](../nodes/thm.universal-coefficients.md) 万有系数定理 用

- …另有出边，续页见 [nodes/def.cohomology.4.md](./def.cohomology.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.cohomology.3.md](./def.cohomology.3.md)

refs: Le Stum, An introduction to condensed mathematics, §7.1–7.3

## 说明
例：$H^{n}(K[k]) = H^{n+k}(K)$；$M \in \mathcal{A}$ 时 $H^{0}([M]) = M$、其余为 $0$；$H^{0}([M \to N]) = \ker f$、$H^{1}([M \to N]) = \operatorname{coker} f$。

$H^{n}$ 是**函子**，但它是**加法而不正合**的 —— 同调不可交换性是整个同调代数的起点。

引用：`def.cohomology`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
