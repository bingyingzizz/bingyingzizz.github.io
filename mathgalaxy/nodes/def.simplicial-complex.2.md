# 单纯复形　`def.simplicial-complex`　·　续页（第 2 页）
[在星图里打开](../#n=def.simplicial-complex)　·　第 1 页 [nodes/def.simplicial-complex.md](./def.simplicial-complex.md)

## 陈述（续）
即：属于 $K$ 的成员叫**单纯形**，它的非空子集也必须在 $K$ 里（**闭包性质**）。
$\sigma$ 的**维数**定义成 $\dim\sigma := \#\sigma - 1$；$K$ 的维数是 $\max_{\sigma \in K}\dim\sigma$。维数为 $0, 1, 2$ 的单纯形分别叫**顶点、棱、三角形**。
**几何实现**：把顶点集嵌进 $\mathbb{R}^{V}$，令

$$|K| := \bigcup_{\sigma \in K} \operatorname{conv}\{\, v : v \in \sigma \,\} \subseteq \mathbb{R}^{V},$$

配以子空间拓扑。有限复形时这就是一个紧的度量空间；$|K|$ 叫 $K$ 的**多面体**。

> 续见 [nodes/def.simplicial-complex.3.md](./def.simplicial-complex.3.md)
