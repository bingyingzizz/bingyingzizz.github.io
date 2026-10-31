# 单纯映射　`def.simplicial-map`　·　续页（第 2 页）
[在星图里打开](../#n=def.simplicial-map)　·　第 1 页 [nodes/def.simplicial-map.md](./def.simplicial-map.md)

## 陈述（续）
$$|f|\left(\sum_{v} t_{v} v\right) := \sum_{v} t_{v} f(v),$$

这是一个连续映射 $|K| \to |L|$。
**诱导链映射**：在链群上定义 $\varphi_{\#} : C_{p}(K) \to C_{p}(L)$，对 $p$-单纯形 $\sigma = [v_{0}, \ldots, v_{p}]$：
若 $f(\sigma)$ 是 $p$ 维，则 $\varphi_{\#}(\sigma) := [f(v_{0}), \ldots, f(v_{p})]$（去掉
重复顶点、重排成全序）；若 $\dim f(\sigma) < p$，则 $\varphi_{\#}(\sigma) := 0$。再线性延拓。它满足 $\varphi_{\#} \circ \partial = \partial \circ \varphi_{\#}$，因此过商给出
$$\varphi_{*} : H_{p}(K) \longrightarrow H_{p}(L),\qquad [z] \longmapsto [\varphi_{\#} z].$$

> 续见 [nodes/def.simplicial-map.3.md](./def.simplicial-map.3.md)
