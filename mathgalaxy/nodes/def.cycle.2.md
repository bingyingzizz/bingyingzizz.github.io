# 闭链　`def.cycle`　·　续页（第 2 页）
[在星图里打开](../#n=def.cycle)　·　第 1 页 [nodes/def.cycle.md](./def.cycle.md)

## 陈述（续）
设 $K$ 是加法范畴 $\mathcal{C}$ 中的复形，微分 $d^{n} : K^{n} \to K^{n+1}$（`def.cochain-complex`）。

**上链情形**：第 $n$ 阶**上闭链群**（cocycles）是

$$Z^{n}(K) := \ker d^{n} = \{\, x \in K^{n} : d^{n}x = 0 \,\} ;$$

它的元素叫**上闭链**（cocycle）。
**链情形**（箭头反向，$d_{n} : K_{n} \to K_{n-1}$）：第 $n$ 阶**闭链群**（cycles）是

$$Z_{n}(K) := \ker d_{n} ,$$

它的元素叫**闭链**（cycle）。
⚠️ 两个名字指的是**同一个东西**（$d$ 的核），只是复形的分次方向不同：上链复形的核记 $Z^{n}$、链复形的核记 $Z_{n}$。

> 续见 [nodes/def.cycle.3.md](./def.cycle.3.md)
