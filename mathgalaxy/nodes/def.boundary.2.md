# 边缘　`def.boundary`　·　续页（第 2 页）
[在星图里打开](../#n=def.boundary)　·　第 1 页 [nodes/def.boundary.md](./def.boundary.md)

## 陈述（续）
设 $K$ 是加法范畴 $\mathcal{C}$ 中的复形，微分 $d^{n} : K^{n} \to K^{n+1}$。

**上链情形**：第 $n$ 阶**上边缘群**（coboundaries）是

$$B^{n}(K) := \operatorname{im} d^{n-1} = \{\, d^{n-1}x : x \in K^{n-1} \,\} ,$$
它的元素叫**上边缘**（coboundary）。

**链情形**：第 $n$ 阶**边缘群**（boundaries）是

$$B_{n}(K) := \operatorname{im} d_{n+1} ,$$

它的元素叫**边缘**（boundary）。
**为什么 $B \subseteq Z$**：由复形的定义 $d^{n} \circ d^{n-1} = 0$，对 $x = d^{n-1}y$ 有 $d^{n}x = d^{n}d^{n-1}y = 0$，所以每个上边缘都是上闭链。因此商 $Z^{n}/B^{n}$ 有意义。

> 续见 [nodes/def.boundary.3.md](./def.boundary.3.md)
