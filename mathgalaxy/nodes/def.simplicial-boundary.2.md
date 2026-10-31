# 边缘算子　`def.simplicial-boundary`　·　续页（第 2 页）
[在星图里打开](../#n=def.simplicial-boundary)　·　第 1 页 [nodes/def.simplicial-boundary.md](./def.simplicial-boundary.md)

## 陈述（续）
$$\partial_{p}\sigma := \sum_{i=0}^{p} (-1)^{i}\,[v_{0}, \ldots, \widehat{v_{i}}, \ldots, v_{p}],$$
其中帽子 $\widehat{v_{i}}$ 表示「删掉这个顶点」。因为 $C_{p}(K)$ 自由，这条公式线性延拓成唯一的群同态

$$\partial_{p} : C_{p}(K) \longrightarrow C_{p-1}(K).$$
**基本性质**：对每个 $p$，

$$\partial_{p-1} \circ \partial_{p} = 0.$$
于是约定 $Z_{p} := \ker\partial_{p}$（**闭链**）、$B_{p} := \operatorname{im}\partial_{p+1}$（**边缘**），并且 $B_{p} \subseteq Z_{p}$，即 $(C_{*}, \
partial)$ 是一个**链复形**。

> 续见 [nodes/def.simplicial-boundary.3.md](./def.simplicial-boundary.3.md)
